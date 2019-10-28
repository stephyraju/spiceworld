# Importing modules
import os
import math
from flask import (
    Flask, render_template, redirect, request, url_for, session, flash)
from flask_pymongo import PyMongo, pymongo, DESCENDING
from bson.objectid import ObjectId
import bcrypt
import logging


# Declaring app name
app = Flask(__name__)

# Config settings and environmental variables
app.config['SECRET_KEY'] = os.getenv('SECRET')
app.config["MONGO_DBNAME"] = 'cook_book'
app.config["MONGO_URI"] = os.getenv('MONGO_URI', 'mongodb://localhost')

# Logging Config
logging.basicConfig(level=logging.INFO)


mongo = PyMongo(app)

# Pagination and sorting
PAGE_SIZE = 8
KEY_PAGE_SIZE = 'page_size'
KEY_PAGE_NUMBER = 'page_number'
KEY_TOTAL = 'total'
KEY_PAGE_COUNT = 'page_count'
KEY_ENTITIES = 'items'
KEY_NEXT = 'next_uri'
KEY_PREV = 'prev_uri'
KEY_WORD_FIND = 'word_find'
KEY_ORDER_BY = 'order_by'
KEY_ORDER = 'order'


def get_paginated_list(entity, query={}, **params):
    page_size = int(params.get(KEY_PAGE_SIZE, PAGE_SIZE))
    page_number = int(params.get(KEY_PAGE_NUMBER, 1))
    order_by = params.get(KEY_ORDER_BY, '_id')
    order = params.get(KEY_ORDER, 'asc')
    order = pymongo.ASCENDING if order == 'asc' else pymongo.DESCENDING
    if page_number < 1:
        page_number = 1
    offset = (page_number - 1) * page_size
    items = []
    word_find = ''
    if KEY_WORD_FIND in params:
        word_find = params.get(KEY_WORD_FIND)
        if len(word_find.split()) > 0:
            entity.create_index([("$**", 'text')])
            result = entity.find({'$text': {'$search': word_find}})
            items = result.sort(order_by, order).skip(offset).limit(page_size)
        else:
            items = entity.find().sort(
                order_by, order
            ).skip(offset).limit(page_size)
    else:
        items = entity.find(query).sort(order_by, order).skip(
            offset).limit(page_size)
    total_items = items.count()
    if page_size > total_items:
        page_size = total_items
    if page_number < 1:
        page_number = 1
    if page_size:
        page_count = math.ceil(total_items / page_size)
    else:
        page_count = 0
    if page_number > page_count:
        page_number = page_count
    next_uri = {
        KEY_PAGE_SIZE: page_size,
        KEY_PAGE_NUMBER: page_number + 1
    } if page_number < page_count else None
    prev_uri = {
        KEY_PAGE_SIZE: page_size,
        KEY_PAGE_NUMBER: page_number - 1
    } if page_number > 1 else None

    return {
        KEY_TOTAL: total_items,
        KEY_PAGE_SIZE: page_size,
        KEY_PAGE_COUNT: page_count,
        KEY_PAGE_NUMBER: page_number,
        KEY_NEXT: next_uri,
        KEY_PREV: prev_uri,
        KEY_WORD_FIND: word_find,
        KEY_ORDER_BY: order_by,
        KEY_ORDER: order,
        KEY_ENTITIES: items
        }

# HOME


@app.route('/')
@app.route('/index')
def index():
    recipes = list(mongo.db.recipes.find().sort("views", DESCENDING))
    return render_template("index.html", recipes=recipes)

# CREATE


@app.route('/add_recipe')
def add_recipe():
    return render_template("addrecipe.html",
                           recipes=mongo.db.recipes.find(),
                           categories=mongo.db.categories.find(),
                           cuisines=mongo.db.cuisines.find(),
                           difficulty=mongo.db.difficulty.find(),
                           allergens=mongo.db.allergens.find())


@app.route('/insert_recipe', methods=['POST'])
def insert_recipe():
    logging.info("Inserting Recipes")
    recipes = mongo.db.recipes
    data = request.form.to_dict()
    data['recipe_name'] = data['recipe_name']
    data.update({'ingredients': request.form.getlist('ingredients[]')})
    data.update({'preparation': request.form.getlist('preparation[]')})
    data.update({'allergens': request.form.getlist('allergens')})
    del data['ingredients[]']
    del data['preparation[]']
    recipes.insert_one(data)
    new_recipe_id = recipes.find_one({"recipe_name": data['recipe_name']})[
            '_id']
    return redirect(url_for('view_recipe', recipe_id=new_recipe_id))


# READ

# Page to view all recipes
@app.route("/get_recipes", methods=['GET'])
def get_recipes():
    logging.info("Getting Recipes")
    recipes = get_paginated_list(mongo.db.recipes, **request.args.to_dict())
    return render_template('recipes.html',
                           recipes=recipes,
                           result=recipes)


@app.route('/view_recipe/recipe_id?=<recipe_id>')
def view_recipe(recipe_id):
    logging.info("Viewing Recipes")
    mongo.db.recipes.find_one_and_update(
        {"_id": ObjectId(recipe_id)}, {"$inc": {"views": 1}})
    return render_template('view.html',
                           recipe=mongo.db.recipes.find_one(
                                  {"_id": ObjectId(recipe_id)}),
                           categories=mongo.db.categories.find(),
                           cuisines=mongo.db.cuisines.find(),
                           difficulty=mongo.db.difficulty.find(),
                           allergens=mongo.db.allergens.find())

# Search


@app.route('/search', methods=['POST'])
def search():
    logging.info("Searching Recipes")
    result = get_paginated_list(mongo.db.recipes, **request.form.to_dict())
    return render_template('recipes.html',
                           title="View recipes",
                           recipes=result,
                           result=result,
                           categories=mongo.db.categories.find(),
                           cuisines=mongo.db.cuisines.find(),
                           difficulty=mongo.db.difficulty.find(),
                           allergens=mongo.db.allergens.find())


# Filters for categories in home page


@app.route('/get_starter', methods=['GET'])
def get_starter():
    recipes = get_paginated_list(mongo.db.recipes,
                                 query={'category_name': 'Starter'},
                                 **request.args.to_dict())
    return render_template('recipes.html',
                           title='Starters',
                           recipes=recipes,
                           result=recipes)


@app.route('/get_breakfast', methods=['GET'])
def get_breakfast():
    recipes = get_paginated_list(mongo.db.recipes,
                                 query={'category_name': 'Breakfast'},
                                 **request.args.to_dict())
    return render_template('recipes.html',
                           title='Desserts',
                           recipes=recipes,
                           result=recipes)


@app.route('/get_main', methods=['GET'])
def get_main():
    recipes = get_paginated_list(mongo.db.recipes,
                                 query={'category_name': 'Main Course'},
                                 **request.args.to_dict())
    return render_template('recipes.html',
                           title='Main course',
                           recipes=recipes,
                           result=recipes)


@app.route('/get_dessert', methods=['GET'])
def get_dessert():
    recipes = get_paginated_list(mongo.db.recipes,
                                 query={'category_name': 'Dessert'},
                                 **request.args.to_dict())
    return render_template('recipes.html',
                           title='Desserts',
                           recipes=recipes,
                           result=recipes)


@app.route('/get_snacks', methods=['GET'])
def get_snacks():
    recipes = get_paginated_list(mongo.db.recipes,
                                 query={'category_name': 'Snacks'},
                                 **request.args.to_dict())
    return render_template('recipes.html',
                           title='Snacks',
                           recipes=recipes,
                           result=recipes)


@app.route('/get_cakes', methods=['GET'])
def get_cakes():
    recipes = get_paginated_list(mongo.db.recipes,
                                 query={'category_name': 'Cakes'},
                                 **request.args.to_dict())
    return render_template('recipes.html',
                           title='Cakes',
                           recipes=recipes,
                           result=recipes)


@app.route('/get_bbq', methods=['GET'])
def get_bbq():
    recipes = get_paginated_list(mongo.db.recipes,
                                 query={'category_name': 'BBQ'},
                                 **request.args.to_dict())
    return render_template('recipes.html',
                           title='BBQ',
                           recipes=recipes,
                           result=recipes)


@app.route('/get_vegan', methods=['GET'])
def get_vegan():
    recipes = get_paginated_list(mongo.db.recipes,
                                 query={'category_name': 'Vegan'},
                                 **request.args.to_dict())
    return render_template('recipes.html',
                           title='Vegan',
                           recipes=recipes,
                           result=recipes)


@app.route('/get_instant', methods=['GET'])
def get_instant():
    recipes = get_paginated_list(mongo.db.recipes,
                                 query={'category_name': 'Instant Recipe'},
                                 **request.args.to_dict())
    return render_template('recipes.html',
                           title='Instant Pot',
                           recipes=recipes,
                           result=recipes)


@app.route('/get_drinks', methods=['GET'])
def get_drinks():
    recipes = get_paginated_list(mongo.db.recipes,
                                 query={'category_name': 'Drinks'},
                                 **request.args.to_dict())
    return render_template('recipes.html',
                           title='Drinks',
                           recipes=recipes,
                           result=recipes)

# UPDATE


@app.route('/edit_recipe/<recipe_id>', methods=['GET'])
def edit_recipe(recipe_id):

    recipe = mongo.db.recipes.find_one({"_id": ObjectId(recipe_id)})
    return render_template('editrecipe.html',
                           recipe=recipe,
                           categories=mongo.db.categories.find(),
                           cuisines=mongo.db.cuisines.find(),
                           difficulty=mongo.db.difficulty.find(),
                           allergens=mongo.db.allergens.find())


@app.route('/update_recipe/<recipe_id>', methods=["POST"])
def update_recipe(recipe_id):
    logging.info("Updating Recipe")
    recipes = mongo.db.recipes
    recipes.update({"_id": ObjectId(recipe_id)},
                   {
                    'recipe_name': request.form.get('recipe_name'),
                    'author': request.form.get('author'),
                    'category_name': request.form.get('category_name'),
                    'description': request.form.get('description'),
                    'serves': request.form.get('serves'),
                    'cooking_time': request.form.get('cooking_time'),
                    'cuisine': request.form.get('cuisine'),
                    'difficulty': request.form.get('difficulty'),
                    'allergens': request.form.getlist('allergens'),
                    'image_url': request.form.get('image_url'),
                    'ingredients': request.form.getlist('ingredients[]'),
                    'preparation': request.form.getlist('preparation[]')
                    })
    return redirect(url_for('view_recipe', recipe_id=recipe_id))

# DELETE


@app.route('/delete_recipe/<recipe_id>')
def delete_recipe(recipe_id):
    logging.info("Deleting Recipe with Id: {}".format(recipe_id))
    mongo.db.recipes.remove({"_id": ObjectId(recipe_id)})
    return redirect(url_for('get_recipes'))

# Register


@app.route('/register', methods=['GET', 'POST'])
def register():
    logging.info('Registering User')
    if request.method == 'POST':
        session['username'] = request.form['username'].lower()
        users = mongo.db.users
        user_exists = users.find_one(
                      {'author': request.form['username'].lower()})

        if user_exists is None:
            logging.info('User Does not exist. Creating new user')
            hashpass = bcrypt.hashpw(request.form['password'].encode('utf-8'),
                                     bcrypt.gensalt())
            users.insert({'author': request.form['username'].lower(),
                         'password': hashpass})
            session['username'] = request.form['username'].lower()
            return redirect(url_for('index'))

        flash('Username already exists, please choose a different one.')
        logging.info('User already exist. Skipping new user')
        session.pop('username', None)
        return render_template('register.html', title="Register")

    return render_template('register.html', title="Register")

# Login


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        session["username"] = request.form["username"].lower()
        users = mongo.db.users
        user_login = users.find_one(
                    {'author': request.form['username'].lower()})

        if user_login:
            if bcrypt.hashpw(request.form['password'].encode('utf-8'),
               user_login['password']) == user_login['password']:
                # session["username"] = request.form["username"].lower()
                return redirect(url_for('index'))

        flash('The login details are not correct')
        session.pop('username', None)
        return render_template('login.html',  title="Login")

    return render_template('login.html',  title="Login")

# Account


@app.route("/account/<account_name>, methods=['GET']")
def account(account_name):
    logging.info("Account Name is: '{}'".format(account_name))
    if account_name != session.get('username'):
        logging.info("User {} is not allowed to access page".format
                     (session.get('username')))
        flash("You can only access your own account page.")
        return redirect(url_for('index'))

    logging.info("User {} is authorized to access page".format
                 (session.get('username')))
    recipes_submitted_by_user = mongo.db.recipes.find(
                               {"author": account_name})
    total_recipes_by_user = recipes_submitted_by_user.count()
    return render_template('account.html',
                           user_recipes=recipes_submitted_by_user,
                           total_recipes_by_user=total_recipes_by_user)


# Likes


@app.route('/like_recipe/<recipe_id>')
def like_recipe(recipe_id):

    '''Controls behavior of user-like increment and decrements operator.
    Feature is dependant upon user interaction in the user-interface.
    User is only allowed to like once for each recipe'''

    users = mongo.db.users

    already_liked = users.find_one({"$and": [{"author": session['username']},
                                   {'likes': recipe_id}]})

    if already_liked is None:
            mongo.db.recipes.update_one({"_id": ObjectId(recipe_id)},
                                        {'$inc': {'likes': 1}})
            users.update_one({"author": session['username']},
                             {"$push": {"likes": recipe_id}})
    else:
        flash("You have already liked this recipe!")

    return render_template('view.html',
                           recipe=mongo.db.recipes.find_one
                           ({"_id": ObjectId(recipe_id)}))

# Dislikes


@app.route('/dislike_recipe/<recipe_id>')
def dislike_recipe(recipe_id):
    '''Controls behavior of user-dislike increment and decrements operator.
    Feature is dependant upon user interaction in the user-interface.
    User is only allowed to dislike once for each recipe'''
    users = mongo.db.users

    already_disliked = users.find_one({"$and":
                                      [{"author": session['username']},
                                       {'dislikes': recipe_id}]})

    if already_disliked is None:
        mongo.db.recipes.update_one({"_id": ObjectId(recipe_id)},
                                    {'$inc': {'dislikes': 1}})
        users.update_one({"author": session['username']},
                         {"$push": {"dislikes": recipe_id}})
    else:
        flash("You have already disliked this recipe!")

    return render_template('view.html',
                           recipe=mongo.db.recipes.find_one
                           ({"_id": ObjectId(recipe_id)}),
                           username=session['username'])

# Logout


@app.route('/logout')
def logout():
    # remove the username from the session if it is there
    session.pop('username', None)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=False)