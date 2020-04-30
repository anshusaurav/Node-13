const express = require('express');
const http = require('http');
var app = express();
// app.use(logger("short"));
app.get((req, res,next)=>{
    console.log("In comes a " + req.method + " to " + req.url);
    res.send('Welcome Home');
});

app.listen(3000, ()=>console.log('Server is running'));