## Spiceworld -A Recipe App

Python & Flask - Data Centric Development - Milestone Project 3

'spiceworld' is a recipe app built on the Flask framework using MongoDB database. 
The purpose of this project is to "Create a web application that allows users to store and easily access cooking recipes", using the CRUD operations of Create, Read, Update, and Delete for their recipes.

The deployed site can be found at [cookbook.](https://www.google.com)

## UX

This project is part of my Code Institute Full Stack Software Development studies.
I've decided to make a recipe app to allow users to add  and store their recipes.

#### User Stories

As a user, I want to be able to:

* view the recipes from any device (mobile, tablet, desktop).
* Easily navigate through the recipes by various main filters.
* view all recipes as a Guest.
* Search any specific recipe.
* Login and add my recipes.[Creatre]
* Get the instruction to make a dish from this site.[Read]
* Edit the recipes I've added.[Edit]
* Delete the recipes I've submitted.[Delete]

#### Design

##### Framework

* **[Materialize 1.0.0](https://materializecss.com/)**

  To get a modern and clean layout, I used Materialize as a framework.
  
* **[jQuery 3.4.0](https://code.jquery.com/jquery/)**

  Used to manipulate the DOM, for example buttons, and showing / hiding elements

* **[Flask 1.0.2](https://palletsprojects.com/p/flask/)** 

  Flask is the micro web framework that runs the application

##### Database

For the database,I choose MongoDB and this was a great oppertunity to get experience using NoSQL database MongoDB.





##### Color Scheme

##### Typography

##### Icon

Materialize icons has been used for this project.

#### Wireframes

Mock-ups were created early on in this project, using pencil and paper.
I've used [Balsamiq Wireframes](https://balsamiq.com/) during the Scope Plane part of the design and planning process for this project.

#### Features
##### Existing Features
##### Features Left to Implement

#### Technologies Used

##### Languages

*   **[HTML](https://html.spec.whatwg.org/multipage/)** used as the markup language
  
*   **[CSS](https://www.w3.org/Style/CSS/)** used as the base for cascading styles.

*   **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** used mostly for DOM manipulation

*   **[Python3](https://www.python.org/)** used to run the backend application

##### Libraries

* **[Google Fonts]()** provided the fonts used throughout the project

* **[Font Awesome]()** v5.8.2 to provide the icon set

* **[Materialize]()** v1.0.0 used as the CSS framework for the project

* **[jQuery]()** used as the primary JavaScript functionality.

* **[Flask]()** v1.0.2 is the micro web framework that runs the application

* **[Jinja]()** v2.10.1 is the default templating language for flask and is used to display data from the python application in the frontend html pages

* **[PyMongo]()** 2.3.0 was used to enable the python application to access the Mongo database

##### Tools

* **[AWS Cloud9]()** is the IDE used to put all this together

* **[MongoDB Atlas]()** is used to store my database in the 'cloud'.

* **[Git]()** is used for version control

* **[GitHub]()** provides hosting for software development version control using Git

* **[Balsamiq]()** was used to create the wireframes when initially planning this project

##### Hosting

  **[Heroku]()** is used to host the app
  
#### Testing





#### Deployment

##### Deployment To Heroku

In order the deploy my project to Heroku I have completed the following steps:

 **AWS Cloud9 IDE**
 
* Created a Procfile with the command echo web: python run.py > Procfile.
* Created a requirement.txt file so Heroku know what python modules it will need to run my application with the command sudo pip freeze --local > requirements.txt
* Then git add and git commit the new prerequisites from the requirements.txt file and Procfile, then 'git push' the undertaking to GitHub.
* Created config Vars such as my Secret Key, IP PORT and MONGO_URI within .bashrc so I could still run the project from my own IDE
 

 **Heroku**

* After loging into heroku I created a new app, using the name spiceword cookbook and set the region to Europe.

* Select application

* In the settings tab I clicked reveal config vars and entered the required environment variables, which in this case were:

    IP 0.0.0.0

    PORT 5000

    MONGO_URI mongodb+srv://root:<password_removed>@myfirstcluster-fai9p.mongodb.net/cook_book?retryWrites=true&w=majority

    SECRET secret key for flask session

#### Credits

##### Content

  The recipes for the cookbook were sourced from [bbcgoodfood.com](https://www.bbcgoodfood.com/).
  
  The text for some of the recipe categories was taken from Wikipedia.

##### Media

  The images for the recipes have been sourced from their respective recipes at [bbcgoodfood.com](https://www.bbcgoodfood.com/).
  
  The images for the logo image,Category images on the home page were taken from google free images.
  
####  Acknowledgements

  **Tutorials**
  
  https://www.tutorialspoint.com

  https://stackoverflow.com

  https://www.youtube.com/watch?v=vVx1737auSE - To understand how to create the login/register functions.
  
  https://www.quackit.com/mongodb/tutorial/mongodb_sort_query_results.cfm
  

Special thanks to Guido Cecilio Garcia, my Code Institute mentor, for his guidance and advice whilst working on this project.

 