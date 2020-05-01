const express = require('express');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false})); 


app.post('/', (req, res,next )=>{
    res.json(req.body);
});

app.listen(3000, ()=>console.log('Server is running'));