
<p align="center">
  <img alt="spiceworld" src="https://github.com/stephyraju/spiceworld/raw/master/documentation/wireframe/logoimg.png">
</p>

![alt spiceworld](https://github.com/stephyraju/spiceworld/raw/master/documentation/wireframe/mockups.png)

### Spiceworld - A Recipe App

Python & Flask - Data Centric Development - Milestone Project 3

'spiceworld' is a recipe app built on the Flask framework using MongoDB database. 
The purpose of this project is to "Create a web application that allows users to store and easily access cooking recipes", using the CRUD operations of Create, Read, Update, and Delete for their recipes.

The deployed site can be found at [spiceword.](https://spiceworld-cookbook.herokuapp.com/)

---
## Table of Contents

1. **[UX](#UX)**

   * **[User Stories](#user-stories)**
   * **[Design](#design)**
     * **[Framework](#framework)**
     * **[Database](#database)**
     * **[Color Scheme](#color-scheme)**
     * **[Typography](#typography)**
     * **[Icon](#icon)**
   * **[Wireframes](#wireframes)**

2. **[Features](#features)**
   * **[Existing Features](#existing-features)**
   * **[Features Left to Implement](#features-left-to-implement)**

3. **[Technologies Used](#technologies-Used)**

   * **[Languages](#languages)**
   * **[Libraries](#libraries)**
   * **[Tools](#tools)**
   * **[Hosting](#hosting)**
4. **[Testing](#testing)**

5. **[Deployment](#deployment)**

6. **[Credits](#credits)**
    * **[Content](#content)**
    * **[Media](#media)**
    * **[Acknowledgements](#acknoledgements)**
    * **[Disclaimer](disclaimer)**


## UX

This is the milestone project that I have created for the “Data Centric Development” module, which is part of “Full Stack Web Development Course” offered by Code Institute.

I love cooking and trying new recipes. I usually collect recipes from youtube and other public sites and change it for my taste. This was a perfect oppertunity to build cookbook application where I can save all my favorite recipes at one source and share to my friends who ask me for recipes.
It also allows others to to add and store their recipes securely.

### User Stories

As a user, I want to be able to:

* view the recipes from any device (mobile, tablet, desktop).
* see recipes from other users to get new ideas.
* easily navigate through the recipes by various main filters.
* view all recipes as a Guest.
* vote like/dislike for recipes added by other users.
* search any specific recipe.
* search recipes by different category.
* Login and add my recipes.[Creatre]
* Easily see all of the recipes I have submitted.
* Get the instruction to make a dish from this site.[Read]
* Edit the recipes I've added.[Edit]
* Delete the recipes I've submitted.[Delete]

### Design

#### Framework

* **[Materialize 1.0.0](https://materializecss.com/)**

  To get a modern and clean layout, I used Materialize as a framework.
  
* **[jQuery 3.4.0](https://code.jquery.com/jquery/)**

  Used to manipulate the DOM, for example buttons, and showing / hiding elements

* **[Flask 1.0.2](https://palletsprojects.com/p/flask/)** 

  Flask is the micro web framework that runs the application

#### Database

For the database, I choose MongoDB and this was a great oppertunity to get experience using NoSQL database MongoDB.

See the database schema [here](https://github.com/stephyraju/spiceworld/blob/master/documentation/schema/schema.png)

The database is made up of the following collections

**categories**
       
       
       id: <ObjectId()>

       category_name: <string>
       
**cuisines**

       id: <ObjectId()>

       cusine: <string>
       
**allergens**
      
        id: <ObjectId()>

       allergens: <array>

**difficulty**
      
        id: <ObjectId()>

       difficulty: <string>

**recipes**

      id: <ObjectId>
      recipe_name: <string>
      category_name: <string>
      cooking_time: <string>
      preparation: <array>
      description:<string>
      ingredients: <string>
      serves: <string>
      difficulty: <string>
      allergens:<array>
      cuisine:<string>
      author: <string>
      image_url: <string>
      likes: <int32>
      dislikes: <int32>
      views: <int32>

**users**

      id: <ObjectId()>
      
      author: <string>
      
      password: <string>



#### Color Scheme

For the color scheme, I've used gray and black in the navbar and most pages. I chose green and red for some buttons and headings to highlight.
Overall, I tried to keep a simple classic look. [Materialize colors](https://materializecss.com/color.html) was a good choice for this project.

#### Typography

The following fonts were used:

* **Courgette** was used for the navigation elements.

* **Muli** was used for headings.

* **ProximaNova Regular** was used for the general text.

#### Icon

[Materialize icons](https://materializecss.com/icons.html) has been used for this project.

### Wireframes

Mock-ups were created early on in this project.

I've used [Balsamiq Wireframes](https://balsamiq.com/) during the Scope Plane part of the design and planning process for this project.

All of my wireframes for this project can be found [here](https://github.com/stephyraju/spiceworld/tree/master/documentation/wireframe)

### Features

#### Existing Features

* **Navigation bar**
   
    The navigation bar features the spiceworld logo in the top left corner.
        
    * For visitors to the site who are not logged in, list items links are available for them to use.
    
      a. Home

      b. Recipes
      
      c. Register
      
      d. Login
      
   * For users who are logged in, the list items are as follows:
     
      a. Home
      
      b. Recipes
      
      c. Add Recipes
     
      d. My Account
      
      e. Logout

   * The navbar is collapsed into a burger icon on small and medium screens. The options remain the same, but they are instead accessed using a side navigation element which can be accessed through 'burger' icon at the top left. 
   
* **Footer**

   The footer has copyright information and social media links.

* **Carousels**

   The materialize carousal shows all the recipes available in the app by moving sideways. The recipes in the carousel will be sorted by the number of views and likes, with the recipe with most viewed at the top of the carousel.User can go to recipe view page by clicking on the carousal image. 

* **Description**

   A brief description is available to explain how this app works.

* **Register User**

   Users can use the site as a guest, but some features are not available unless logged in.I have built-in authentication and authorization to check certain criteria is met before an account is validated. All passwords are hashed for security purposes!
  
   When a user registers,they are automatically logged in and redirected to the home page.

* **Log In to Account**
  
   The login page has an input form like register form where the users will enter their username and password.
    
   Flash message If the username is not registered or if the password is incorrect an error message will appear.

   New users can click on the link "Register here" to get redirected to the register page.


* **Log Out of Account**
 
   Users can easily log out of their account with the click of a button.

* **View All Recipes**

   On the recipes page, all recipes are  displayed, with a standard 8-items per page using pagination.
   
* **Search recipe**

  If a user would like to search for something specific with the name, they have a search button on the all recipe page.

* **Add a Recipe**

  [**C**RUD] **C**reate or 'add' a new recipe.
  
  Logged in users can add their recipes. For selective fields,user can select the options from drop down. All the fields of the form is well explained with the 'placeholder' to make it easy for the user.

* **View Recipe**

  [C**R**UD] **R**ead or 'review' recipes, either from the home page, or the user recipes page. 
  
  The logged in user can like or dislike the recipe one time.
  If the user viewing is the user who submitted, they will have additional options edit and delete. 
  Delete button allow the user to completely remove the recipe from the database.

* **Update Recipe**

  [CR**U**D] **U**pdate or 'edit' their own user recipes on this page.
  
  The edit recipe form is identical in layout to the add recipe form, and very similar in functionality.
  User can either save or cancel the changes by clicking the appropriate buttons.
  
* **Delete Recipe**

  [CRU**D**] **D**elete or 'remove' a user's own recipes.
  
  If the user clicks the delete button, a popup modal will appear asking for confirmation. If the user still choose to delete, the recipe will be permanently deleted.
  
* **My Account Page**
 
   Each user has their own account page, there they can view all the recipes they have added and can go for edit recipe from there aswell.

* **Flashed Messages**
 
   The app uses the flask flash method to communicate important events to the user and make it user friendly.


#### Features Left to Implement

* Search: Search button with more filters.
* Favourites: Adding favourate recipe to user account page would be more convienent for the user.
* Admin account: To make managing the site easier, an admin panel will need to be added.
* Pagination: I need to add pagination to my accounts as when I add more recipes and rectify the minor issues with the pagination in search results. 

### Technologies Used

#### Languages

*   **[HTML](https://html.spec.whatwg.org/multipage/)** used as the markup language
  
*   **[CSS](https://www.w3.org/Style/CSS/)** used as the base for cascading styles.

*   **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** used mostly for DOM manipulation

*   **[Python3](https://www.python.org/)** used to run the backend application

#### Libraries

* **[Google Fonts](https://fonts.google.com/)** provided the fonts used throughout the project

* **[Font Awesome](https://fontawesome.com/)** v5.8.2 to provide the icon set

* **[Materialize](https://materializecss.com/)** v1.0.0 used as the CSS framework for the project

* **[jQuery](https://jquery.com/)** used as the primary JavaScript functionality.

* **[Flask](https://flask.palletsprojects.com/en/1.1.x/)** v1.0.2 is the micro web framework that runs the application

* **[Jinja](https://jinja.palletsprojects.com/en/2.10.x/)** v2.10.1 is the default templating language for flask and is used to display data from the python application in the frontend html pages

* **[PyMongo](https://flask-pymongo.readthedocs.io/en/latest/)** 2.3.0 was used to enable the python application to access the Mongo database

#### Tools

* **[AWS Cloud9](https://aws.amazon.com/console/)** is the IDE used to put all this together

* **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)** is used to store my database in the 'cloud'.

* **[Git](https://gist.github.com/derhuerst/1b15ff4652a867391f03)** is used for version control

* **[GitHub](https://github.com/)** provides hosting for software development version control using Git

* **[Balsamiq](https://balsamiq.com/)** was used to create the wireframes when initially planning this project

* **[Am I Responsive](http://ami.responsivedesign.is/)** to create the images in this readme file.

##### Hosting

  **[Heroku]()** is used to host the app
  
### Testing

Most of the testing was manual testing during the development of the site with additional testing completed at the end, before this write up.

Friends and family have also tested by creating accounts and using the site on their own devices. They have tested how the page displays, registered their own accounts, added their recipes, edited and deleted.

To test the site yourself, you can

Browse as a guest, but with limited functionality.

Create your own user. Do not use a password you use elsewhere as the passwords are not secure.

Use an existing user to see how the app handles user recipes 

You can do this with:

Username: sarah
Password: password

If testing with user 'sarah', please don't deleting any recipes. To test this aspect of the site, you can create and delete submissions with users you create yourself.

#### Validation Services

The following validation services were used to check the validity of the website code.


* [W3C Markup Validation](https://validator.w3.org/) was used to validate **HTML**.

  Unfortunately the W3C Validator for HTML does not understand the Jinja templating syntax, so it therefore shows a lot of errors with regards to {{ variables }}, {% for %} {% endfor %}, etc. Aside from the Jinja warnings and errors, all of the remaining code is perfectly validating. Also due to the Jinja templating, certain elements cannot be 'beautified' across multiple lines, and must remain on a single line.
  
* [W3C CSS validation](https://jigsaw.w3.org/css-validator/) was used to validate **CSS**.

* [JSHint](https://jshint.com/) was used to validate JavaScript.
   
   The JS file was run through jshint.com and outside of numerous instances of $ being undefined due to using jQuery, there were no errors.

*  [PEP8 Online](http://pep8online.com/) was used to validate Python.
        
   app.py file is completely PEP8 compliant! 

#### Responsiveness 

Chrome DevTools and physical devices were used throughout development for a number of purposes, one of which was to test the responsiveness and rendering across a range of sizes and devices. As issues were found they were either fixed at the time or noted and returned to later.

The site has been tested successfully on 
  
   * Apple Macbook Air - Safari browser
   * Apple iPhone 6,7 &8S - Safari Browser
   * iPad Mini - Safari Browser
   * Desktop - Chrome v.74
   * Desktop - Firefox v.67


#### Features Testing
 
 * **Creating an Account**
 
 I've created my own account, and 15 other accounts to confirm authentication and validation for creatiing account and all worked as expected.

* Log In To An Existing Account
 
  The accounts created as part of the previous test were used to test the log in functionality and I was able to log in with each of them.

* Log Out

  All accounts could also be successfully logged out. Print statements were used in the python console to confirm the username variable had been removed from the session.



* **Add | View | Edit | Delete a Recipe**
 
I've created 20 test recipes in order to preparare for the pagination using different accounts I created for testing.
The data validation in the add recipe form is solid and only accepts input in the correct format.

I've edited several recipe's  recipe description, adding ingredients or changing preparation methods, to test the functionality of updating a recipe to the database. 
The data validation is the same as Add Recipe and works as it should.

Tested edit and delete button were available for the owner of the recipes, and disabled for others.

I deleted some recipes to test the delete functionality.When the delete button is pressed, a pop-up modal asks to confirm deletion. If a user selects cancel, they are taken back and I've confirmed the recipe isn't deleted.

I've confirmed the recipes are deleted by searching and also in database directly.

**Known Issues**

Pagination - Pagination was not working for search result. For setting the pagination for search result and the recipes, my mentor Guido guided me and together we solved the pagination issues.


### Deployment

#### Deployment To Heroku

In order the deploy my project to Heroku I have completed the following steps:

 **AWS Cloud9 IDE**
 
* Created a Procfile with the command echo web: python run.py > Procfile.
* Created a requirement.txt file so Heroku know what python modules it will need to run my application with the command sudo pip freeze --local > requirements.txt
* Then git add and git commit the new prerequisites from the requirements.txt file and Procfile, then 'git push' the undertaking to GitHub.
* Created config Vars such as my Secret Key, IP PORT and MONGO_URI within .bashrc so I could still run the project from my own IDE
 

 **Heroku**

* After loging into heroku I created a new app, using the name spiceword-cookbook and set the region to Europe.

* Select application

* In the settings tab I clicked reveal config vars and entered the required environment variables, which in this case were:

    IP 0.0.0.0

    PORT 5000

    MONGO_URI mongodb+srv://root:<password_removed>@myfirstcluster-fai9p.mongodb.net/cook_book?retryWrites=true&w=majority

    SECRET secret key for flask session
    
* From the heroku dashboard of your newly created application, click on "Deploy" > "Deployment method" and select GitHub.

* Confirm the linking of the heroku app to the correct GitHub repository.

* In the heroku dashboard, click "Deploy".

* In the "Manual Deployment" section of this page, made sure the master branch is selected and then click "Deploy Branch".

* The site is now successfully deployed.

#### Local Deployment

Should you wish the run a local copy of this application of your local machine, you will need to follow the instructions listed below:

Tools you may need:

Python 3 installed on your machine [https://www.python.org/downloads/](https://www.python.org/downloads/)

PIP installed on your machine [https://pip.pypa.io/en/stable/installing/](https://pip.pypa.io/en/stable/installing/)

Git installed on your machine: [https://gist.github.com/derhuerst/1b15ff4652a867391f03](https://gist.github.com/derhuerst/1b15ff4652a867391f03)

A text editor such as [https://code.visualstudio.com/](https://code.visualstudio.com/) Visual Studio Code

An account at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) MongoDB Atlas or MongoDB running locally on your machine

**To deploy locally on your own machine, follow these steps:**

* Save a copy of the repo on your local machine or use git clone https://github.com/stephyraju/spiceworld.git and cd into the correct folder using the terminal.

* Create a virtual environment, using python -m venv venv where the 2nd venv is the environment name.

* Activate the virtual environment with venv\Scripts\activate

* Install any required modules with pip install -r requirements.txt

* Within the file app.py change the line app.config['SECRET_KEY'] = os.getenv('SECRET') to app.config['SECRET_KEY'] = os.getenv('SECRET', '<your_key>) where <your_key> is a secret key of your choosing.

* Also change app.config["MONGO_URI"] = os.getenv('MONGO_URI') to app.config["MONGO_URI"] = os.getenv('MONGO_URI', <your mongo_uri string>) where <your mongo_uri string> is the string that points to your own MongoDB.

* Your database should be named cook_book with collections set up as outlined in the database design section of this document. To help, you can also refer to these included JSON examples

* From the terminal you can then run the app with python app.py and view in a browser at http://127.0.0.1:5000/


### Credits

#### Content

  The recipes for the cookbook were sourced from [bbcgoodfood.com](https://www.bbcgoodfood.com/).
  
  The text for some of the recipe categories was taken from Wikipedia.

#### Media

  The images for the recipes have been sourced from their respective recipes at [bbcgoodfood.com](https://www.bbcgoodfood.com/).
  
  The images for the logo image,Category images on the home page were taken from google free images.
  
####  Acknowledgements

  **Tutorials**
  
  https://www.tutorialspoint.com

  https://stackoverflow.com

  https://www.youtube.com/watch?v=vVx1737auSE - To understand how to create the login/register functions.
  
  https://www.quackit.com/mongodb/tutorial/mongodb_sort_query_results.cfm
  
  
Special thanks to Guido Cecilio Garcia, my Code Institute mentor, for his guidance and advice whilst working on this project and also helping me to sort pagination issues.

#####  Disclaimer

The content of this website is educational purposes only.