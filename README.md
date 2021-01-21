# SEASONE(tc)D 

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Seasoned was built to provide relief to college students during the COVID-19 pandemic. With the Edamam API, Seasoned is able to send queries for recipes by ingredients users have right in their cupboard. COVID testing sites are right at their fingertips. The Twitter API sits on the landing page for live updates on all things COVID-19 anytime.  



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
1. First run ```npm install``` from the root. After this you will run ```npm run-script install-all``` from the root 
2. In order to run both the client app and the server app in development mode, run: ```npm run-script dev```

## Issues & Notes
1. Currently, the registration component does not post to the database successfully. We believe this to be a router issue, however, the login is successful for the 1 item we have in the database. 
2. ~~The Spoonacular API efforts can be found in Ryan's branch, however, we did not merge this into the master as it is not entirely complete. We aim to work on this later on past the submission of this project.~~
3. The TomTom API efforts were also not merged to the master. 
4. Several pages will appear empty for these reasons stated above, such as the More, Food Drives, and COVID-19 pages. 
5. The Twitter API was put at the bottom of our Sprint backlog, so it was unfortunately unable to be started and thus completed for the homepage.

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


#### Citations & Credits
###### MERN template: 
rennemannd - https://github.com/rennemannd/MERN-Heroku-Template
###### Login/Register Components + Authentication: 
NoobCoder - https://github.com/noobcoder1137/MERN-Stack-Authentication-Authorization-JWT
beaucarnes - https://github.com/beaucarnes/mern-exercise-tracker-mongodb
pvybhav - https://github.com/Pvybhav/Login-Signup-MERN
These repos were primarily used as a basis for our login/register authentication components. NoobCoder's authservice and context models were used, as well as a combination of NoobCoder's and beaucarnes create user and login components. These were adjusted on a need-base basis. 


