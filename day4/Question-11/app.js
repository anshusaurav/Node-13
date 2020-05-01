const express = require('express');
const path = require('path');
const morgan = require('morgan')
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
app.use(morgan('tiny'));


app.get("/users/:name", (req,res,next) => {
   let name = req.params.name;
   console.log(name);
  res.send(`name: ${req.params.name}`);
});
app.listen(3000, ()=>console.log('Server is running'));
