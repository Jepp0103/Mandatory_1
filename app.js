//The way to import a package from node modules 
var express = require("express");
var app = express();
const request = require("request");

//Getting html files
app.get("/arraysAndLoops", (req, res) => {
    return res.sendfile(__dirname + '/resources/arraysAndLoops.html');
 });

app.get("/basicsStringsObjects", (req, res) => {
   return res.sendfile(__dirname + '/resources/basicsStringsObjects.html');
});

 app.get("/commandsAndTools", (req, res) => {
    return res.sendfile(__dirname + '/resources/commandsAndTools.html');
 });

 app.get("/jQueryAndRouting", (req, res) => {
    return res.sendfile(__dirname + '/resources/jQueryAndRouting.html');
 });

 app.get("/", (req, res) => {
    return res.sendfile(__dirname + '/resources/main.html');
 });

//Listens for port number to a given server
var port = 8080;
app.listen(port, error => {
    console.log(error);
    if (error) {
        console.log("Server error at run", error);
    }
    console.log("Server is running on port", port)
});