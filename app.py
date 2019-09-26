import os
from flask import Flask, render_template, redirect, request, url_for, session, flash
from flask_pymongo import PyMongo, DESCENDING
from bson.objectid import ObjectId
import bcrypt
import logging


# declaring app name
app = Flask(__name__)

app.config['SECRET_KEY'] = os.getenv('SECRET')
app.config["MONGO_DBNAME"] = 'cook_book'
app.config["MONGO_URI"] = os.getenv('MONGO_URI', 'mongodb://localhost')

# Logging Config
logging.basicConfig(level=logging.INFO)


mongo = PyMongo(app)

@app.route('/')
@app.route('/index')
def index():
    
    recipes = list(mongo.db.recipes.find().sort("views",DESCENDING))
    return render_template("index.html", recipes = recipes )
     
#@app.route('/get_recipes',methods=['POST','GET'])
#def get_recipes():
 #   return render_template("recipes.html", recipes=mongo.db.recipes.find()) 


# -------CREATE---------#
     
@app.route('/add_recipe')
def add_recipe():
     return render_template("addrecipe.html",  
               recipes=mongo.db.recipes.find(),
               categories = mongo.db.categories.find(), 
               cuisines=mongo.db.cuisines.find(), 
               difficulty=mongo.db.difficulty.find(), 
               allergens=mongo.db.allergens.find())
               
 
@app.route('/insert_recipe', methods=['POST'])
def insert_recipe():
    print(request.form)
    print(request.form.getlist('ingredients[]'))
    print(request.form.getlist('preparation[]'))
    print(request.form.to_dict())
    recipes = mongo.db.recipes
    data = request.form.to_dict()
    data.update({'ingredients':request.form.getlist('ingredients[]')})
    data.update({'preparation':request.form.getlist('preparation[]')})
    del data['ingredients[]']
    del data['preparation[]']
    recipes.insert_one(data)
    return redirect(url_for('get_recipes'))  
    
#-------READ--------#

@app.route("/get_recipes", methods=['GET'])
def get_recipes():      
    return render_template('recipes.html',
                         recipes=mongo.db.recipes.find(),
                         categories = mongo.db.categories.find())                          

@app.route('/view_recipe/recipe_id?=<recipe_id>')
def view_recipe(recipe_id):
    
    mongo.db.recipes.find_one_and_update({"_id": ObjectId(recipe_id)}, {"$inc": {"views": 1}})
    return render_template('view.html', 
                            recipe = mongo.db.recipes.find_one({"_id":ObjectId(recipe_id)}))
                        
#-----------Search-----------#
@app.route('/search', methods=['POST'])
def search(): 
    print(request.form)
    print(request.form.to_dict())
    word_find = request.form["word_find"]     
    mongo.db.recipes.create_index([("$**", 'text')])
    recipes = mongo.db.recipes.find({"$text":{"$search": word_find}})
    return render_template('recipes.html',
                            title="View recipes", 
                            recipes=recipes,
                            username=session['username'], 
                            categories = mongo.db.categories.find(), 
                            cuisines=mongo.db.cuisines.find(), 
                            difficulty=mongo.db.difficulty.find(), 
                            allergens=mongo.db.allergens.find()) 
 
                            
@app.route('/get_starter', methods=['GET'])
def get_starter():
    return render_template('recipes.html', title='Starters', recipes=mongo.db.recipes.find({'category_name': 'Starter'}))                           

@app.route('/get_breakfast', methods=['GET'])
def get_breakfast():
    return render_template('recipes.html', title='Desserts', recipes=mongo.db.recipes.find({'category_name': 'Breakfast'})) 

@app.route('/get_main', methods=['GET'])
def get_main():
    return render_template('recipes.html', title='Main course', recipes=mongo.db.recipes.find({'category_name': 'Main Course'}))                            

@app.route('/get_dessert', methods=['GET'])
def get_dessert():
    return render_template('recipes.html', title='Desserts', recipes=mongo.db.recipes.find({'category_name': 'Dessert'}))   
    
@app.route('/get_snacks', methods=['GET'])
def get_snacks():
    return render_template('recipes.html', title='Snacks', recipes=mongo.db.recipes.find({'category_name': 'Snacks'})) 
    
@app.route('/get_cakes', methods=['GET'])
def get_cakes():
    return render_template('recipes.html', title='Cakes', recipes=mongo.db.recipes.find({'category_name': 'Cakes'})) 
    
@app.route('/get_bbq', methods=['GET'])
def get_bbq():
    return render_template('recipes.html', title='BBQ', recipes=mongo.db.recipes.find({'category_name': 'BBQ'})) 

@app.route('/get_vegan', methods=['GET'])
def get_vegan():
    return render_template('recipes.html', title='Vegan', recipes=mongo.db.recipes.find({'category_name': 'Vegan'})) 
    
@app.route('/get_instant', methods=['GET'])
def get_instant():
    return render_template('recipes.html', title='Instant Pot', recipes=mongo.db.recipes.find({'category_name': 'Instant Recipe'})) 

@app.route('/get_drinks', methods=['GET'])
def get_drinks():
    return render_template('recipes.html', title='Drinks', recipes=mongo.db.recipes.find({'category_name': 'Drinks'})) 
        
#-----------UPDATE-----------#

@app.route('/edit_recipe/<recipe_id>',methods=['GET'])
def edit_recipe(recipe_id):
    recipe = mongo.db.recipes.find_one({"_id":ObjectId(recipe_id)})
    return render_template('editrecipe.html', 
                            recipe=recipe,
                            categories=mongo.db.categories.find(), 
                            cuisines=mongo.db.cuisines.find(), 
                            difficulty=mongo.db.difficulty.find(), 
                            allergens=mongo.db.allergens.find())
                            
@app.route('/update_recipe/<recipe_id>', methods=["POST"])
def update_recipe(recipe_id):
    print(mongo.db.recipes.find_one({"_id": ObjectId(recipe_id)}))
    print(request.form)
    print(request.form.to_dict())
    recipes = mongo.db.recipes
    recipes.update({"_id":ObjectId(recipe_id)},
        {
        'recipe_name':request.form.get('recipe_name'),
        'author':request.form.get('author'),
        'category_name':request.form.get('category_name'),
        'description': request.form.get('description'),
        'serves':request.form.get('serves'),
        'cooking_time':request.form.get('cooking_time'),
        'cuisine':request.form.get('cuisine'),
        'difficulty':request.form.get('difficulty'),
        'allergens':request.form.get('allergens'), 
        'image_url' :request.form.get('image_url'),
        'ingredients':request.form.getlist('ingredients[]'),
        'preparation':request.form.getlist('preparation[]')
        })
    return redirect(url_for('view_recipe',recipe_id=recipe_id))
  
#-----------DELETE-----------#
@app.route('/delete_recipe/<recipe_id>')
def delete_recipe(recipe_id):
    mongo.db.recipes.remove({"_id":ObjectId(recipe_id)})
    return redirect(url_for('get_recipes'))

#-----------Register-----------#
#https://www.youtube.com/watch?v=vVx1737auSE

@app.route('/register', methods=['GET','POST'])
def register():
    logging.info('Inside Registering.....')
    if request.method == 'POST':
        logging.info('User name: ' + str(request.form['username'].lower()))
        session['username'] = request.form['username'].lower()
        logging.info('Mongo User: ' + str(mongo.db.users))
        users = mongo.db.users
        user_exists = users.find_one({'author':request.form['username'].lower()})
        logging.info('User exists: ' + str(user_exists))
        
        if user_exists is None:
            logging.info('User Does not exist. Creating new user')
            hashpass = bcrypt.hashpw(request.form['password'].encode('utf-8'), bcrypt.gensalt())
            users.insert({'author':request.form['username'].lower(), 'password':hashpass})
            session['username'] = request.form['username'].lower()
            return redirect(url_for('get_recipes'))

        flash('Username already exists, please choose a different one.')
        logging.info('User already exist. Skipping new user')
        session.pop('username', None)
        return render_template('register.html', title="Register")

    return render_template('register.html', title="Register")

#-----------Login-----------#

@app.route('/login',methods=['GET','POST'])
def login():
    if request.method == 'POST':
        session["username"] = request.form["username"].lower()
        users = mongo.db.users
        user_login = users.find_one({'author':request.form['username'].lower()})

        if user_login:
            if bcrypt.hashpw(request.form['password'].encode('utf-8'), user_login['password']) == user_login['password']:
                # session["username"] = request.form["username"].lower()
                return redirect(url_for('get_recipes'))
        
        flash('The login details are not correct')
        session.pop('username', None)
        return render_template('login.html',  title="Login")

    return render_template('login.html',  title="Login")
    
#-----------Account-----------#

@app.route("/account/<account_name>, methods=['GET']")
def account(account_name):
    logging.info("Account Name is: '{}'".format(account_name))
    if account_name != session.get('username'):
        logging.info("User is not allowed to access page")
        flash("You can only access your own account page.")
        return redirect(url_for('index'))
        
    logging.info("User is authorized to access page")
    #users = mongo.db.users
    #users = mongo.db.users.find_one({"username": account_name})
    recipes_submitted_by_user = mongo.db.recipes.find(
        {"author": account_name})              
    logging.info("Recipes submitted by user: " + str(recipes_submitted_by_user))
    total_recipes_by_user = recipes_submitted_by_user.count() 
    logging.info("Total recipes by user: " + str(total_recipes_by_user))
    logging.info(recipes_submitted_by_user)
    
    return render_template('account.html', 
                            user_recipes=recipes_submitted_by_user,
                            total_recipes_by_user=total_recipes_by_user)
      
                
#-----------Likes-----------#

@app.route('/like_recipe/<recipe_id>')
def like_recipe(recipe_id):
    '''Controls behavior of user-like increment and decrements operator.
    Feature is dependant upon user interaction in the user-interface.'''
    users = mongo.db.users
    
    already_liked= users.find_one({"$and":[{"author":session['username']},{'likes':recipe_id}]})

    if already_liked is None:
        mongo.db.recipes.update_one({"_id":ObjectId(recipe_id)}, {'$inc': {'likes': 1}})
        users.update_one({"author":session['username']},{"$push":{"likes":recipe_id}})
    else:
        flash("You have already liked this recipe!")

    return render_template('view.html', 
                            recipe = mongo.db.recipes.find_one({"_id":ObjectId(recipe_id)}), username = session['username'])

#-----------Dislikes-----------#


@app.route('/dislike_recipe/<recipe_id>')
def dislike_recipe(recipe_id):
    '''Controls behavior of user-dislike increment and decrements operator.
    Feature is dependant upon user interaction in the user-interface.'''
    users = mongo.db.users
    
    already_disliked= users.find_one({"$and":[{"author":session['username']},{'dislikes':recipe_id}]})

    if already_disliked is None:
        mongo.db.recipes.update_one({"_id":ObjectId(recipe_id)}, {'$inc': {'dislikes': 1}})
        users.update_one({"author":session['username']},{"$push":{"dislikes":recipe_id}})
    else:
        flash("You have already disliked this recipe!")

  
    return render_template('view.html', 
                            recipe = mongo.db.recipes.find_one({"_id":ObjectId(recipe_id)}), username = session['username'])     
    
#-----------Logout-----------#

@app.route('/logout')
def logout():
   # remove the username from the session if it is there
   session.pop('username', None)
   return redirect(url_for('index'))
   

if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)