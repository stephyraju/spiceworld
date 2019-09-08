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

@app.route("/get_recipes", methods=['POST', 'GET'])
def get_recipes():      
    return render_template('recipes.html',
                         recipes=mongo.db.recipes.find(),
                         categories = mongo.db.categories.find())               
               
@app.route('/view/recipe_id?=<id>')
def view(id):
    recipe = mongo.db.recipes.find_one({"_id": ObjectId(id)})
    return render_template('view.html',
                        title='View Recipe', 
                        recipe=recipe)
                        
#-----------UPDATE-----------#

@app.route('/edit_recipe/<recipe_id>')
def edit_recipe(recipe_id):
    recipe = mongo.db.recipes.find_one({"_id":ObjectId(recipe_id)})
    return render_template('edit_recipe.html', 
                            recipe=recipe,
                            categories=mongo.db.categories.find(), 
                            cuisine=mongo.db.cuisine.find(), 
                            difficulty=mongo.db.difficulty.find(), 
                            allergens=mongo.db.allergens.find())
    
if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)