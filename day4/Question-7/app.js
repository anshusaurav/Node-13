const express = require('express');
const path = require('path');
const morgan = require('morgan')
const cookieParser = require('cookie-parser');
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
app.use(cookieParser());

app.get("/", (req,res,next) => {
    //console.log('Cookies: ', req.cookies);
 
    // Cookies that have been signed
   // console.log('Signed Cookies: ', req.signedCookies);
    res.send('Just logging cookies');
});
app.listen(3000, ()=>console.log('Server is running'));
