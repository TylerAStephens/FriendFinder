// NPM packages used 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Setting app to use Express
var app = express();
//Setting server to environment port or local port 3000 so it can run in heroku
var PORT = process.env.PORT || 3000

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Created route to html files
require("./app/routing/htmlRoutes")(app);


// Setting up listener for the express app
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  }); 