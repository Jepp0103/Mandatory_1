//the way to import a package from node modules 
var express = require("express");
var app = express();
const request = require("request");

//getting html files
app.get("/main", (req, res) => {
   return res.sendfile(__dirname + '/resources/main.html');
});

app.get("/documentation", (req, res) => {
   return res.sendfile(__dirname + '/resources/docOne.html');
});

//listens for port number to a given server
var port = 8080;
app.listen(port, error => {
    console.log(error);
    if (error) {
        console.log("Server error at run", error);
    }
    console.log("Server is running on port", port)
});