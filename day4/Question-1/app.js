const express = require('express');
const http = require('http');
var app = express();

app.get('/', function(req, res){
    res.end('Hello World');
});

http.createServer(app).listen(3000);