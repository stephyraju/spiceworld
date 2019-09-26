{"filter":false,"title":"app.py","tooltip":"/app.py","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":247,"column":0},"end":{"row":254,"column":0},"action":"insert","lines":["@app.route('/view_recipe/<recipe_id>')","def view_recipe(recipe_id):","    #we increment the number of views everytime a recipe is seen","    mongo.db.Recipes.update_one({\"_id\":ObjectId(recipe_id)}, {'$inc': {'views': 1}})","    ","    return render_template('view_recipe.html', ","                            recipe = mongo.db.Recipes.find_one({\"_id\":ObjectId(recipe_id)}), username = session['username'])",""],"id":3116}],[{"start":{"row":263,"column":4},"end":{"row":263,"column":43},"action":"remove","lines":["return redirect(url_for('view_recipe'))"],"id":3117},{"start":{"row":263,"column":4},"end":{"row":264,"column":124},"action":"insert","lines":["return render_template('view_recipe.html', ","                            recipe = mongo.db.Recipes.find_one({\"_id\":ObjectId(recipe_id)}), username = session['username'])"]}],[{"start":{"row":247,"column":0},"end":{"row":255,"column":0},"action":"remove","lines":["@app.route('/view_recipe/<recipe_id>')","def view_recipe(recipe_id):","    #we increment the number of views everytime a recipe is seen","    mongo.db.Recipes.update_one({\"_id\":ObjectId(recipe_id)}, {'$inc': {'views': 1}})","    ","    return render_template('view_recipe.html', ","                            recipe = mongo.db.Recipes.find_one({\"_id\":ObjectId(recipe_id)}), username = session['username'])","",""],"id":3118}],[{"start":{"row":265,"column":4},"end":{"row":265,"column":43},"action":"remove","lines":["return redirect(url_for('view_recipe'))"],"id":3119},{"start":{"row":265,"column":4},"end":{"row":266,"column":124},"action":"insert","lines":["return render_template('view_recipe.html', ","                            recipe = mongo.db.Recipes.find_one({\"_id\":ObjectId(recipe_id)}), username = session['username'])"]}],[{"start":{"row":256,"column":46},"end":{"row":256,"column":47},"action":"remove","lines":["R"],"id":3120}],[{"start":{"row":256,"column":46},"end":{"row":256,"column":47},"action":"insert","lines":["r"],"id":3121}],[{"start":{"row":266,"column":46},"end":{"row":266,"column":47},"action":"remove","lines":["R"],"id":3122}],[{"start":{"row":266,"column":46},"end":{"row":266,"column":47},"action":"insert","lines":["r"],"id":3123}],[{"start":{"row":265,"column":38},"end":{"row":265,"column":39},"action":"remove","lines":["e"],"id":3124},{"start":{"row":265,"column":37},"end":{"row":265,"column":38},"action":"remove","lines":["p"]},{"start":{"row":265,"column":36},"end":{"row":265,"column":37},"action":"remove","lines":["i"]},{"start":{"row":265,"column":35},"end":{"row":265,"column":36},"action":"remove","lines":["c"]},{"start":{"row":265,"column":34},"end":{"row":265,"column":35},"action":"remove","lines":["e"]},{"start":{"row":265,"column":33},"end":{"row":265,"column":34},"action":"remove","lines":["r"]},{"start":{"row":265,"column":32},"end":{"row":265,"column":33},"action":"remove","lines":["_"]}],[{"start":{"row":255,"column":38},"end":{"row":255,"column":39},"action":"remove","lines":["e"],"id":3125},{"start":{"row":255,"column":37},"end":{"row":255,"column":38},"action":"remove","lines":["p"]},{"start":{"row":255,"column":36},"end":{"row":255,"column":37},"action":"remove","lines":["i"]},{"start":{"row":255,"column":35},"end":{"row":255,"column":36},"action":"remove","lines":["c"]},{"start":{"row":255,"column":34},"end":{"row":255,"column":35},"action":"remove","lines":["e"]},{"start":{"row":255,"column":33},"end":{"row":255,"column":34},"action":"remove","lines":["r"]},{"start":{"row":255,"column":32},"end":{"row":255,"column":33},"action":"remove","lines":["_"]}],[{"start":{"row":250,"column":8},"end":{"row":250,"column":9},"action":"insert","lines":["_"],"id":3126},{"start":{"row":250,"column":9},"end":{"row":250,"column":10},"action":"insert","lines":["r"]},{"start":{"row":250,"column":10},"end":{"row":250,"column":11},"action":"insert","lines":["e"]},{"start":{"row":250,"column":11},"end":{"row":250,"column":12},"action":"insert","lines":["c"]},{"start":{"row":250,"column":12},"end":{"row":250,"column":13},"action":"insert","lines":["i"]},{"start":{"row":250,"column":13},"end":{"row":250,"column":14},"action":"insert","lines":["p"]}],[{"start":{"row":250,"column":14},"end":{"row":250,"column":15},"action":"insert","lines":["e"],"id":3127}],[{"start":{"row":260,"column":11},"end":{"row":260,"column":12},"action":"insert","lines":["_"],"id":3128},{"start":{"row":260,"column":12},"end":{"row":260,"column":13},"action":"insert","lines":["r"]},{"start":{"row":260,"column":13},"end":{"row":260,"column":14},"action":"insert","lines":["e"]},{"start":{"row":260,"column":14},"end":{"row":260,"column":15},"action":"insert","lines":["c"]},{"start":{"row":260,"column":15},"end":{"row":260,"column":16},"action":"insert","lines":["i"]},{"start":{"row":260,"column":16},"end":{"row":260,"column":17},"action":"insert","lines":["p"]},{"start":{"row":260,"column":17},"end":{"row":260,"column":18},"action":"insert","lines":["e"]}],[{"start":{"row":247,"column":0},"end":{"row":254,"column":0},"action":"insert","lines":["@app.route('/views/<recipe_id>')","def views(recipes_id):","    '''Controls behavior of user-views increment operator.'''","","    mongo.db.recipes.find_one_and_update({\"_id\": ObjectId(recipe_id)}, {\"$inc\": {\"views\": 1}})","    recipe = mongo.db.recipes.find_one({\"_id\": ObjectId(recipe_id)})","    return render_template('view.html', title='View Recipe', recipe=recipe)",""],"id":3129}],[{"start":{"row":252,"column":4},"end":{"row":252,"column":68},"action":"remove","lines":["recipe = mongo.db.recipes.find_one({\"_id\": ObjectId(recipe_id)})"],"id":3145}],[{"start":{"row":253,"column":61},"end":{"row":253,"column":74},"action":"remove","lines":["recipe=recipe"],"id":3146},{"start":{"row":253,"column":61},"end":{"row":253,"column":125},"action":"insert","lines":["recipe = mongo.db.recipes.find_one({\"_id\": ObjectId(recipe_id)})"]}],[{"start":{"row":248,"column":16},"end":{"row":248,"column":17},"action":"remove","lines":["s"],"id":3147}],[{"start":{"row":252,"column":0},"end":{"row":252,"column":4},"action":"remove","lines":["    "],"id":3148},{"start":{"row":251,"column":94},"end":{"row":252,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":29,"column":1},"end":{"row":34,"column":80},"action":"insert","lines":["def index():","    '''Retrieves four most viewed recipes in the recipes collection of database.","    Renders the template for the homepage and provides the recipe information for the template.'''","","    recipes = list(mongo.db.recipes.find().sort(\"views\", pymongo.DESCENDING).limit(4))","    return render_template('index.html', title='Home | Veggit', recipes=recipes)"],"id":3149}],[{"start":{"row":33,"column":76},"end":{"row":33,"column":86},"action":"remove","lines":[".limit(4))"],"id":3150}],[{"start":{"row":35,"column":0},"end":{"row":36,"column":0},"action":"insert","lines":["",""],"id":3151},{"start":{"row":36,"column":0},"end":{"row":37,"column":0},"action":"insert","lines":["",""]},{"start":{"row":37,"column":0},"end":{"row":38,"column":0},"action":"insert","lines":["",""]},{"start":{"row":38,"column":0},"end":{"row":39,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":36,"column":0},"end":{"row":47,"column":58},"action":"insert","lines":["@app.route('/get_recipes')","def get_recipes():","    recipes = mongo.db.Recipes.find().sort([(\"upvotes\",DESCENDING), (\"views\",DESCENDING)])","    return render_template('get_recipes.html',","                            title=\"View recipes\", ","                            username=session['username'], ","                            recipes = recipes, ","                            categories = mongo.db.Categories.find(), ","                            cuisines=mongo.db.Cuisines.find(), ","                            difficulty=mongo.db.Difficulty.find(), ","                            allergens=mongo.db.Allergens.find(), ","                            recipes_count=recipes.count())"],"id":3152}],[{"start":{"row":23,"column":12},"end":{"row":24,"column":0},"action":"insert","lines":["",""],"id":3153},{"start":{"row":24,"column":0},"end":{"row":24,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":24,"column":4},"end":{"row":24,"column":76},"action":"insert","lines":["recipes = list(mongo.db.recipes.find().sort(\"views\", pymongo.DESCENDING)"],"id":3154}],[{"start":{"row":23,"column":12},"end":{"row":24,"column":0},"action":"insert","lines":["",""],"id":3155},{"start":{"row":24,"column":0},"end":{"row":24,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":31,"column":1},"end":{"row":50,"column":0},"action":"remove","lines":["def index():","    '''Retrieves four most viewed recipes in the recipes collection of database.","    Renders the template for the homepage and provides the recipe information for the template.'''","","    recipes = list(mongo.db.recipes.find().sort(\"views\", pymongo.DESCENDING)","    return render_template('index.html', title='Home | Veggit', recipes=recipes)   ","","@app.route('/get_recipes')","def get_recipes():","    recipes = mongo.db.Recipes.find().sort([(\"upvotes\",DESCENDING), (\"views\",DESCENDING)])","    return render_template('get_recipes.html',","                            title=\"View recipes\", ","                            username=session['username'], ","                            recipes = recipes, ","                            categories = mongo.db.Categories.find(), ","                            cuisines=mongo.db.Cuisines.find(), ","                            difficulty=mongo.db.Difficulty.find(), ","                            allergens=mongo.db.Allergens.find(), ","                            recipes_count=recipes.count())",""],"id":3156},{"start":{"row":31,"column":0},"end":{"row":31,"column":1},"action":"remove","lines":[" "]},{"start":{"row":30,"column":77},"end":{"row":31,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":25,"column":76},"end":{"row":25,"column":77},"action":"insert","lines":[","],"id":3157}],[{"start":{"row":25,"column":76},"end":{"row":25,"column":77},"action":"remove","lines":[","],"id":3158}],[{"start":{"row":25,"column":76},"end":{"row":25,"column":77},"action":"insert","lines":[")"],"id":3159}],[{"start":{"row":25,"column":48},"end":{"row":25,"column":76},"action":"remove","lines":["\"views\", pymongo.DESCENDING)"],"id":3160},{"start":{"row":25,"column":48},"end":{"row":25,"column":67},"action":"insert","lines":["\"views\",DESCENDING)"]}],[{"start":{"row":25,"column":56},"end":{"row":25,"column":57},"action":"insert","lines":[" "],"id":3161}],[{"start":{"row":25,"column":56},"end":{"row":25,"column":57},"action":"remove","lines":[" "],"id":3162}],[{"start":{"row":2,"column":33},"end":{"row":2,"column":34},"action":"insert","lines":[" "],"id":3163}],[{"start":{"row":2,"column":34},"end":{"row":2,"column":44},"action":"insert","lines":["DESCENDING"],"id":3164}],[{"start":{"row":2,"column":33},"end":{"row":2,"column":34},"action":"remove","lines":[" "],"id":3165}],[{"start":{"row":2,"column":33},"end":{"row":2,"column":34},"action":"insert","lines":[","],"id":3166}],[{"start":{"row":2,"column":34},"end":{"row":2,"column":35},"action":"insert","lines":[" "],"id":3167}],[{"start":{"row":26,"column":41},"end":{"row":26,"column":72},"action":"remove","lines":["recipes=mongo.db.recipes.find()"],"id":3168},{"start":{"row":26,"column":41},"end":{"row":27,"column":47},"action":"insert","lines":["username=session['username'], ","                            recipes = recipes, "]}],[{"start":{"row":26,"column":41},"end":{"row":27,"column":0},"action":"insert","lines":["",""],"id":3169},{"start":{"row":27,"column":0},"end":{"row":27,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":27,"column":2},"end":{"row":27,"column":34},"action":"remove","lines":["  username=session['username'], "],"id":3170},{"start":{"row":27,"column":1},"end":{"row":27,"column":2},"action":"remove","lines":[" "]},{"start":{"row":27,"column":0},"end":{"row":27,"column":1},"action":"remove","lines":[" "]}],[{"start":{"row":26,"column":41},"end":{"row":27,"column":0},"action":"remove","lines":["",""],"id":3171}],[{"start":{"row":27,"column":45},"end":{"row":27,"column":46},"action":"remove","lines":[","],"id":3172}],[{"start":{"row":27,"column":24},"end":{"row":27,"column":28},"action":"remove","lines":["    "],"id":3173}],[{"start":{"row":27,"column":20},"end":{"row":27,"column":24},"action":"remove","lines":["    "],"id":3174},{"start":{"row":27,"column":16},"end":{"row":27,"column":20},"action":"remove","lines":["    "]},{"start":{"row":27,"column":12},"end":{"row":27,"column":16},"action":"remove","lines":["    "]},{"start":{"row":27,"column":8},"end":{"row":27,"column":12},"action":"remove","lines":["    "]},{"start":{"row":27,"column":4},"end":{"row":27,"column":8},"action":"remove","lines":["    "]},{"start":{"row":27,"column":0},"end":{"row":27,"column":4},"action":"remove","lines":["    "]},{"start":{"row":26,"column":41},"end":{"row":27,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":249,"column":17},"end":{"row":249,"column":18},"action":"remove","lines":["s"],"id":3175}],[{"start":{"row":249,"column":17},"end":{"row":249,"column":18},"action":"insert","lines":["_"],"id":3176}],[{"start":{"row":249,"column":17},"end":{"row":249,"column":18},"action":"remove","lines":["_"],"id":3177}],[{"start":{"row":250,"column":8},"end":{"row":250,"column":9},"action":"remove","lines":["s"],"id":3178}],[{"start":{"row":70,"column":4},"end":{"row":70,"column":68},"action":"remove","lines":["recipe = mongo.db.recipes.find_one({\"_id\": ObjectId(recipe_id)})"],"id":3179},{"start":{"row":70,"column":4},"end":{"row":70,"column":94},"action":"insert","lines":["mongo.db.recipes.find_one_and_update({\"_id\": ObjectId(recipe_id)}, {\"$inc\": {\"views\": 1}})"]}],[{"start":{"row":249,"column":0},"end":{"row":255,"column":0},"action":"remove","lines":["@app.route('/view/<recipe_id>')","def view(recipe_id):","    '''Controls behavior of user-views increment operator.'''","","    mongo.db.recipes.find_one_and_update({\"_id\": ObjectId(recipe_id)}, {\"$inc\": {\"views\": 1}})","    return render_template('view.html', title='View Recipe', recipe = mongo.db.recipes.find_one({\"_id\": ObjectId(recipe_id)}))",""],"id":3180},{"start":{"row":248,"column":0},"end":{"row":249,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":73,"column":40},"end":{"row":74,"column":0},"action":"insert","lines":["",""],"id":3181},{"start":{"row":74,"column":0},"end":{"row":74,"column":24},"action":"insert","lines":["                        "]},{"start":{"row":74,"column":24},"end":{"row":75,"column":0},"action":"insert","lines":["",""]},{"start":{"row":75,"column":0},"end":{"row":75,"column":24},"action":"insert","lines":["                        "]}],[{"start":{"row":75,"column":24},"end":{"row":75,"column":25},"action":"insert","lines":["z"],"id":3183}],[{"start":{"row":75,"column":24},"end":{"row":75,"column":25},"action":"remove","lines":["z"],"id":3184},{"start":{"row":75,"column":20},"end":{"row":75,"column":24},"action":"remove","lines":["    "]},{"start":{"row":75,"column":16},"end":{"row":75,"column":20},"action":"remove","lines":["    "]},{"start":{"row":75,"column":12},"end":{"row":75,"column":16},"action":"remove","lines":["    "]},{"start":{"row":75,"column":8},"end":{"row":75,"column":12},"action":"remove","lines":["    "]},{"start":{"row":75,"column":4},"end":{"row":75,"column":8},"action":"remove","lines":["    "]},{"start":{"row":75,"column":0},"end":{"row":75,"column":4},"action":"remove","lines":["    "]},{"start":{"row":74,"column":24},"end":{"row":75,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":73,"column":24},"end":{"row":73,"column":37},"action":"remove","lines":["recipe=recipe"],"id":3185},{"start":{"row":73,"column":20},"end":{"row":73,"column":24},"action":"remove","lines":["    "]},{"start":{"row":73,"column":16},"end":{"row":73,"column":20},"action":"remove","lines":["    "]},{"start":{"row":73,"column":12},"end":{"row":73,"column":16},"action":"remove","lines":["    "]},{"start":{"row":73,"column":8},"end":{"row":73,"column":12},"action":"remove","lines":["    "]},{"start":{"row":73,"column":4},"end":{"row":73,"column":8},"action":"remove","lines":["    "]}],[{"start":{"row":73,"column":0},"end":{"row":73,"column":4},"action":"remove","lines":["    "],"id":3186},{"start":{"row":72,"column":44},"end":{"row":73,"column":0},"action":"remove","lines":["",""]},{"start":{"row":72,"column":43},"end":{"row":72,"column":44},"action":"remove","lines":[","]}],[{"start":{"row":69,"column":27},"end":{"row":70,"column":0},"action":"insert","lines":["",""],"id":3187},{"start":{"row":70,"column":0},"end":{"row":70,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":73,"column":43},"end":{"row":73,"column":44},"action":"insert","lines":[","],"id":3189}],[{"start":{"row":73,"column":44},"end":{"row":73,"column":59},"action":"insert","lines":["recipes=recipes"],"id":3190}],[{"start":{"row":73,"column":44},"end":{"row":73,"column":59},"action":"remove","lines":["recipes=recipes"],"id":3191},{"start":{"row":73,"column":44},"end":{"row":73,"column":70},"action":"insert","lines":["recipes = mongo.db.recipes"]}],[{"start":{"row":73,"column":70},"end":{"row":73,"column":71},"action":"insert","lines":["("],"id":3192},{"start":{"row":73,"column":71},"end":{"row":73,"column":72},"action":"insert","lines":[")"]}],[{"start":{"row":73,"column":71},"end":{"row":73,"column":72},"action":"remove","lines":[")"],"id":3193},{"start":{"row":73,"column":70},"end":{"row":73,"column":71},"action":"remove","lines":["("]},{"start":{"row":73,"column":69},"end":{"row":73,"column":70},"action":"remove","lines":["s"]}],[{"start":{"row":73,"column":69},"end":{"row":73,"column":70},"action":"insert","lines":["s"],"id":3194}],[{"start":{"row":72,"column":3},"end":{"row":73,"column":73},"action":"remove","lines":[" return render_template('view.html',","                        title='View Recipe',recipes = mongo.db.recipes)  "],"id":3195},{"start":{"row":72,"column":3},"end":{"row":73,"column":92},"action":"insert","lines":["return render_template('view_recipe.html', ","                            recipe = mongo.db.Recipes.find_one({\"_id\":ObjectId(recipe_id)}),"]}],[{"start":{"row":73,"column":91},"end":{"row":73,"column":92},"action":"remove","lines":[","],"id":3196}],[{"start":{"row":73,"column":91},"end":{"row":73,"column":92},"action":"insert","lines":[")"],"id":3197}],[{"start":{"row":72,"column":2},"end":{"row":72,"column":3},"action":"insert","lines":[" "],"id":3198}],[{"start":{"row":73,"column":46},"end":{"row":73,"column":47},"action":"remove","lines":["R"],"id":3199}],[{"start":{"row":73,"column":46},"end":{"row":73,"column":47},"action":"insert","lines":["r"],"id":3200}],[{"start":{"row":72,"column":38},"end":{"row":72,"column":39},"action":"remove","lines":["e"],"id":3201},{"start":{"row":72,"column":37},"end":{"row":72,"column":38},"action":"remove","lines":["p"]},{"start":{"row":72,"column":36},"end":{"row":72,"column":37},"action":"remove","lines":["i"]},{"start":{"row":72,"column":35},"end":{"row":72,"column":36},"action":"remove","lines":["c"]},{"start":{"row":72,"column":34},"end":{"row":72,"column":35},"action":"remove","lines":["e"]},{"start":{"row":72,"column":33},"end":{"row":72,"column":34},"action":"remove","lines":["r"]},{"start":{"row":72,"column":32},"end":{"row":72,"column":33},"action":"remove","lines":["_"]}],[{"start":{"row":254,"column":72},"end":{"row":255,"column":0},"action":"insert","lines":["",""],"id":3202},{"start":{"row":255,"column":0},"end":{"row":255,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":255,"column":4},"end":{"row":263,"column":51},"action":"insert","lines":["users = mongo.db.users","    ","    already_liked= users.find_one({\"$and\":[{\"author\":session['username']},{'likes':recipe_id}]})","","    if already_liked is None:","        mongo.db.recipes.update_one({\"_id\":ObjectId(recipe_id)}, {'$inc': {'upvotes': 1}})","        users.update_one({\"author\":session['username']},{\"$push\":{\"votes\":recipe_id}})","    else:","        flash(\"You have already liked this recipe\")"],"id":3203}],[{"start":{"row":260,"column":76},"end":{"row":260,"column":83},"action":"remove","lines":["upvotes"],"id":3206},{"start":{"row":260,"column":76},"end":{"row":260,"column":77},"action":"insert","lines":["l"]},{"start":{"row":260,"column":77},"end":{"row":260,"column":78},"action":"insert","lines":["i"]},{"start":{"row":260,"column":78},"end":{"row":260,"column":79},"action":"insert","lines":["k"]},{"start":{"row":260,"column":79},"end":{"row":260,"column":80},"action":"insert","lines":["e"]},{"start":{"row":260,"column":80},"end":{"row":260,"column":81},"action":"insert","lines":["s"]}],[{"start":{"row":261,"column":67},"end":{"row":261,"column":72},"action":"remove","lines":["votes"],"id":3207},{"start":{"row":261,"column":67},"end":{"row":261,"column":68},"action":"insert","lines":["l"]},{"start":{"row":261,"column":68},"end":{"row":261,"column":69},"action":"insert","lines":["i"]},{"start":{"row":261,"column":69},"end":{"row":261,"column":70},"action":"insert","lines":["k"]},{"start":{"row":261,"column":70},"end":{"row":261,"column":71},"action":"insert","lines":["e"]},{"start":{"row":261,"column":71},"end":{"row":261,"column":72},"action":"insert","lines":["s"]}],[{"start":{"row":265,"column":3},"end":{"row":265,"column":94},"action":"remove","lines":[" mongo.db.recipes.find_one_and_update({\"_id\": ObjectId(recipe_id)}, {\"$inc\": {\"likes\": 1}})"],"id":3208}],[{"start":{"row":265,"column":2},"end":{"row":265,"column":3},"action":"remove","lines":[" "],"id":3209},{"start":{"row":265,"column":1},"end":{"row":265,"column":2},"action":"remove","lines":[" "]},{"start":{"row":265,"column":0},"end":{"row":265,"column":1},"action":"remove","lines":[" "]},{"start":{"row":264,"column":0},"end":{"row":265,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":273,"column":4},"end":{"row":282,"column":0},"action":"insert","lines":[" users = mongo.db.users","    ","    already_liked= users.find_one({\"$and\":[{\"author\":session['username']},{'likes':recipe_id}]})","","    if already_liked is None:","        mongo.db.recipes.update_one({\"_id\":ObjectId(recipe_id)}, {'$inc': {'likes': 1}})","        users.update_one({\"author\":session['username']},{\"$push\":{\"likes\":recipe_id}})","    else:","        flash(\"You have already liked this recipe\")",""],"id":3210}],[{"start":{"row":275,"column":12},"end":{"row":275,"column":13},"action":"insert","lines":["d"],"id":3211},{"start":{"row":275,"column":13},"end":{"row":275,"column":14},"action":"insert","lines":["i"]},{"start":{"row":275,"column":14},"end":{"row":275,"column":15},"action":"insert","lines":["s"]}],[{"start":{"row":275,"column":79},"end":{"row":275,"column":80},"action":"insert","lines":["d"],"id":3212},{"start":{"row":275,"column":80},"end":{"row":275,"column":81},"action":"insert","lines":["i"]},{"start":{"row":275,"column":81},"end":{"row":275,"column":82},"action":"insert","lines":["s"]}],[{"start":{"row":275,"column":4},"end":{"row":275,"column":5},"action":"insert","lines":[" "],"id":3213}],[{"start":{"row":275,"column":4},"end":{"row":275,"column":5},"action":"remove","lines":[" "],"id":3214}],[{"start":{"row":273,"column":4},"end":{"row":273,"column":5},"action":"remove","lines":[" "],"id":3215}],[{"start":{"row":278,"column":76},"end":{"row":278,"column":77},"action":"insert","lines":["d"],"id":3216},{"start":{"row":278,"column":77},"end":{"row":278,"column":78},"action":"insert","lines":["i"]},{"start":{"row":278,"column":78},"end":{"row":278,"column":79},"action":"insert","lines":["s"]}],[{"start":{"row":279,"column":67},"end":{"row":279,"column":68},"action":"insert","lines":["d"],"id":3217},{"start":{"row":279,"column":68},"end":{"row":279,"column":69},"action":"insert","lines":["i"]},{"start":{"row":279,"column":69},"end":{"row":279,"column":70},"action":"insert","lines":["s"]}],[{"start":{"row":281,"column":32},"end":{"row":281,"column":33},"action":"insert","lines":["d"],"id":3218},{"start":{"row":281,"column":33},"end":{"row":281,"column":34},"action":"insert","lines":["i"]},{"start":{"row":281,"column":34},"end":{"row":281,"column":35},"action":"insert","lines":["s"]}],[{"start":{"row":281,"column":52},"end":{"row":281,"column":53},"action":"insert","lines":["!"],"id":3219}],[{"start":{"row":263,"column":49},"end":{"row":263,"column":50},"action":"insert","lines":["!"],"id":3220}],[{"start":{"row":277,"column":15},"end":{"row":277,"column":16},"action":"insert","lines":["d"],"id":3221},{"start":{"row":277,"column":16},"end":{"row":277,"column":17},"action":"insert","lines":["i"]},{"start":{"row":277,"column":17},"end":{"row":277,"column":18},"action":"insert","lines":["s"]}],[{"start":{"row":283,"column":2},"end":{"row":283,"column":97},"action":"remove","lines":["  mongo.db.recipes.find_one_and_update({\"_id\": ObjectId(recipe_id)}, {\"$inc\": {\"dislikes\": 1}})"],"id":3222}],[{"start":{"row":250,"column":0},"end":{"row":251,"column":0},"action":"insert","lines":["#-----------Account-----------#",""],"id":3223}],[{"start":{"row":268,"column":0},"end":{"row":269,"column":0},"action":"insert","lines":["#-----------Account-----------#",""],"id":3224}],[{"start":{"row":250,"column":12},"end":{"row":250,"column":19},"action":"remove","lines":["Account"],"id":3228},{"start":{"row":250,"column":12},"end":{"row":250,"column":13},"action":"insert","lines":["L"]},{"start":{"row":250,"column":13},"end":{"row":250,"column":14},"action":"insert","lines":["i"]},{"start":{"row":250,"column":14},"end":{"row":250,"column":15},"action":"insert","lines":["k"]},{"start":{"row":250,"column":15},"end":{"row":250,"column":16},"action":"insert","lines":["e"]},{"start":{"row":250,"column":16},"end":{"row":250,"column":17},"action":"insert","lines":["s"]}],[{"start":{"row":268,"column":12},"end":{"row":268,"column":19},"action":"remove","lines":["Account"],"id":3229},{"start":{"row":268,"column":12},"end":{"row":268,"column":13},"action":"insert","lines":["D"]},{"start":{"row":268,"column":13},"end":{"row":268,"column":14},"action":"insert","lines":["i"]},{"start":{"row":268,"column":14},"end":{"row":268,"column":15},"action":"insert","lines":["s"]},{"start":{"row":268,"column":15},"end":{"row":268,"column":16},"action":"insert","lines":["l"]},{"start":{"row":268,"column":16},"end":{"row":268,"column":17},"action":"insert","lines":["i"]},{"start":{"row":268,"column":17},"end":{"row":268,"column":18},"action":"insert","lines":["k"]},{"start":{"row":268,"column":18},"end":{"row":268,"column":19},"action":"insert","lines":["e"]}],[{"start":{"row":268,"column":19},"end":{"row":268,"column":20},"action":"insert","lines":["s"],"id":3230}],[{"start":{"row":268,"column":0},"end":{"row":269,"column":0},"action":"insert","lines":["",""],"id":3231}],[{"start":{"row":257,"column":4},"end":{"row":257,"column":23},"action":"insert","lines":["session['username']"],"id":3232}],[{"start":{"row":257,"column":23},"end":{"row":257,"column":24},"action":"insert","lines":["="],"id":3233}],[{"start":{"row":257,"column":24},"end":{"row":257,"column":101},"action":"insert","lines":["users.find_one({\"$and\":[{\"author\":session['username']},{'likes':recipe_id}]})"],"id":3234}],[{"start":{"row":257,"column":24},"end":{"row":257,"column":25},"action":"insert","lines":[" "],"id":3235}],[{"start":{"row":256,"column":26},"end":{"row":257,"column":0},"action":"insert","lines":["",""],"id":3236},{"start":{"row":257,"column":0},"end":{"row":257,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":258,"column":3},"end":{"row":258,"column":102},"action":"remove","lines":[" session['username']= users.find_one({\"$and\":[{\"author\":session['username']},{'likes':recipe_id}]})"],"id":3237},{"start":{"row":258,"column":2},"end":{"row":258,"column":3},"action":"remove","lines":[" "]},{"start":{"row":258,"column":1},"end":{"row":258,"column":2},"action":"remove","lines":[" "]},{"start":{"row":258,"column":0},"end":{"row":258,"column":1},"action":"remove","lines":[" "]},{"start":{"row":257,"column":4},"end":{"row":258,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":244,"column":14},"end":{"row":244,"column":15},"action":"insert","lines":["s"],"id":3281}]]},"ace":{"folds":[],"scrolltop":1980,"scrollleft":0,"selection":{"start":{"row":144,"column":28},"end":{"row":144,"column":28},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":99,"state":"start","mode":"ace/mode/python"}},"timestamp":1569327099219,"hash":"62c0b58805b06d4d549b25fcea0b7a1577263c44"}