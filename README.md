# SEASONE(tc)D 

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Seasoned was built to provide relief to college students during the COVID-19 pandemic. With the Spoonacular API, Seasoned is able to send queries for recipes by ingredients users have right in their cupboard. COVID testing sites are right at their fingertips. The Twitter API sits on the landing page for live updates on all things COVID-19 anytime.  



# Video Walkthrough

![hippo](https://media.giphy.com/media/kA9MowRyuxFVwAjUVY/giphy.gif)
![hippo](https://media.giphy.com/media/MKfOBOmgtvsEcBM4bT/giphy.gif)
![hippo](https://media.giphy.com/media/zvjMifqOmRfNgLMi14/giphy.gif)  


# Features
- modernized UI with minimalist design
- express.js handles routes for HTTP requests
- user and recipe data protected
- passport and JWT allows for login authenticaiton and cookie storage
- bcrypt ensures protected passwords for user accounts
- user stays logged in for 1 hour
- only users can post recipes to recipe database

### How to Run
1. First run npm install from the root. After this you will run npm run-script install-all from the root 
2. In order to run both the client app and the server app in development mode, run: ```npm run-script dev```


## File Structure
-       client - Holds the client application
-       public - This holds all of our static files
-       src
-       assets - This folder holds assets such as images, docs, and fonts
-       components - This folder holds all of the different components that will make up our views
-       views - These represent a unique page on the website i.e. Home or Login. These are still normal react components
-       App.js - This is what renders all of our browser routes and different views
-       index.js - This is what renders the react app by rendering App.js, should not change
-       package.json - Defines npm behaviors and packages for the client
-       server - Holds the server application
-       config - This holds our configuration files, like mongoDB uri
-       controllers - These hold all of the callback functions that each route will call
-       models - This holds all of our data models
-       routes - This holds all of our HTTP to URL path associations for each unique url
-       tests - This holds all of our server tests that we have defined
-       server.js - Defines npm behaviors and packages for the client
-       package.json - Defines npm behaviors like the scripts defined in the next section of the README
-       .gitignore - Tells git which files to ignore