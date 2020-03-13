//The way to import a package from node modules 
const express = require("express");
const app = express();

//Using express static method call, so there is no need of routing to every single file in the folders public and images
app.use(express.static('public'));
app.use(express.static('images'));

//Routing and getting HTML-files
app.get("/arraysAndLoops", (req, res) => {
    return res.sendfile(__dirname + '/public/arraysAndLoops.html');
 });

app.get("/objectsAndStrings", (req, res) => {
   return res.sendfile(__dirname + '/public/objectsAndStrings.html');
});

 app.get("/commandsAndTools", (req, res) => {
    return res.sendfile(__dirname + '/public/commandsAndTools.html');
 });

 app.get("/jQuery", (req, res) => {
    return res.sendfile(__dirname + '/public/jQuery.html');
 });

 app.get("/routingAndRequests", (req, res) => {
   return res.sendfile(__dirname + '/public/routingAndRequests.html');
});

 app.get("/", (req, res) => {
   return res.sendfile(__dirname + '/public/main.html');
});

//Routing and getting jQuery-js-files
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

app.get("/jQueries/routingAndRequestsjQuery.js", (req, res) => {
   return res.sendfile(__dirname + '/jQueries/routingAndRequestsjQuery.js');
});

app.get("/jQueries/generaljQuery.js", (req, res) => {
   return res.sendfile(__dirname + '/jQueries/generaljQuery.js');
});

//Listens for port number to a given server
var port = 8080;
app.listen(port, error => {
    if (error) {
        console.log("Server error at run", error);
    }
    console.log("Server is running on port", port)
});