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

 app.get("/jQuery.js", (req, res) => {
   return res.sendfile(__dirname + '/jQuery.js');
});

 app.get('/public/stylesheet.css', (req, res) => {
    return res.sendfile(__dirname + '/public/stylesheet.css');
 });

 app.get("/", (req, res) => {
    return res.sendfile(__dirname + '/resources/main.html');
 });

//Listens for port number to a given server
var port = 8080;
app.listen(port, error => {
    if (error) {
        console.log("Server error at run", error);
    }
    console.log("Server is running on port", port)
});