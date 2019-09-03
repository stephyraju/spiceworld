import os
from flask import Flask, render_template, redirect, request, url_for
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

# declaring app name
app = Flask(__name__)

app.config["MONGO_DBNAME"] = 'cook_book'
app.config["MONGO_URI"] = os.getenv('MONGO_URI', 'mongodb://localhost')

mongo = PyMongo(app)

@app.route('/')
@app.route('/get_recipes')
def get_recipes():
     return render_template("index.html", recipes=mongo.db.recipes.find())
     
@app.route('/add_recipe')
def add_recipe():
     return render_template("addrecipe.html",  
               recipes=mongo.db.recipes.find(),
               categories = mongo.db.categories.find(), 
               cuisines=mongo.db.cuisines.find(), 
               difficulty=mongo.db.difficulty.find(), 
               allergens=mongo.db.allergens.find())
               
 
@app.route('/insert_recipe', methods=['GET', 'POST'])
def insert_recipe():
    recipes = mongo.db.recipes
    recipes.insert_one(request.form.to_dict())
    return redirect(url_for('get_recipes'))              
               
@app.route('/view_recipes', methods=['POST', 'GET'])
def view_recipes():
     return render_template("recipes.html",  
               categories=mongo.db.categories.find())




    
if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)