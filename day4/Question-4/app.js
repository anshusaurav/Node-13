const express = require('express');
const http = require('http');
var app = express();

app.use(express.json());
app.post('/', (req, res,next )=>{

    res.json(req.body);
});

app.listen(3000, ()=>console.log('Server is running'));