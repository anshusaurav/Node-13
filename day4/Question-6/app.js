const express = require('express');
const path = require('path');
const fs = require("fs");
// 6. Handle a GET request on route '/static'.
//     1. send a file called 'index.html'
//     2. attach some images and css into index.html
//     3. add express.static middleware in app middleware
//     4. put all images and css into `public` folder created by static.
//     5. check whether static path is rendering correctly or not?
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false})); 


app.use(express.static(path.join(__dirname, "/public")));

app.get("/static", (req,res,next) => {
    res.sendFile(path.join(__dirname, './public','./index.html'));
});
app.listen(3000, ()=>console.log('Server is running'));
