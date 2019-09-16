import os
from flask import Flask, render_template, redirect, request, url_for, session, flash
from flask_pymongo import PyMongo
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
    
    return render_template("index.html", recipes=mongo.db.recipes.find())
     
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
                         categories = mongo.db.categories.find(),
                         username=session['username'])           
               

@app.route('/view_recipe/recipe_id?=<recipe_id>')
def view_recipe(recipe_id):
    recipe = mongo.db.recipes.find_one({"_id": ObjectId(recipe_id)})
    return render_template('view.html',
                        title='View Recipe', 
                        recipe=recipe,
                        username=session['username'])  
  
  
                            

#-----------UPDATE-----------#

@app.route('/edit_recipe/<recipe_id>',methods=['GET'])
def edit_recipe(recipe_id):
    recipe = mongo.db.recipes.find_one({"_id":ObjectId(recipe_id)})
    return render_template('editrecipe.html', 
                            recipe=recipe,
                            categories=mongo.db.categories.find(), 
                            cuisine=mongo.db.cuisine.find(), 
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