const express = require('express');
var app = express();
// app.use(logger("short"));
app.use((req, res)=>{
    console.log("In comes a " + req.method + " to " + req.url);
    res.send('Welcome Home');
});

app.listen(3000, ()=>console.log('Server is running'));