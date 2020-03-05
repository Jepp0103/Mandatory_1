//The way to import a package from node modules 
const express = require("express");
const app = express();
const request = require("request");

//Routing and getting HTML-files
app.get("/arraysAndLoops", (req, res) => {
    return res.sendfile(__dirname + '/resources/arraysAndLoops.html');
 });

app.get("/objectsAndStrings", (req, res) => {
   return res.sendfile(__dirname + '/resources/objectsAndStrings.html');
});

 app.get("/commandsAndTools", (req, res) => {
    return res.sendfile(__dirname + '/resources/commandsAndTools.html');
 });

 app.get("/jQuery", (req, res) => {
    return res.sendfile(__dirname + '/resources/jQuery.html');
 });

 app.get("/", (req, res) => {
   return res.sendfile(__dirname + '/resources/main.html');
});

 //Routing css file
 app.get('/public/stylesheet.css', (req, res) => {
   return res.sendfile(__dirname + '/public/stylesheet.css');
});

//Routing jQuery-files
 app.get("/jQueries/jQueryjQuery.js", (req, res) => {
   return res.sendfile(__dirname + '/jQueries/jQueryjQuery.js');
});

app.get("/jQueries/commandsAndToolsjQuery.js", (req, res) => {
   return res.sendfile(__dirname + '/jQueries/commandsAndToolsjQuery.js');
});

app.get("/jQueries/arraysAndLoopsjQuery.js", (req, res) => {
   return res.sendfile(__dirname + '/jQueries/arraysAndLoopsjQuery.js');
});

app.get("/jQueries/objectsAndStringsjQuery.js", (req, res) => {
   return res.sendfile(__dirname + '/jQueries/objectsAndStringsjQuery.js');
});

app.get("/jQueries/generaljQuery.js", (req, res) => {
   return res.sendfile(__dirname + '/jQueries/generaljQuery.js');
});


//Routing image files
app.get("/images/selectors.PNG", (req, res) => {
   return res.sendfile(__dirname + '/images/selectors.PNG');
});

app.get("/images/adders.PNG", (req, res) => {
   return res.sendfile(__dirname + '/images/adders.PNG');
});



//Listens for port number to a given server
var port = 8080;
app.listen(port, error => {
    if (error) {
        console.log("Server error at run", error);
    }
    console.log("Server is running on port", port)
});