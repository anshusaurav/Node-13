const express = require('express');
var app = express();
app.use((req, res)=>{
    console.log(new Date().toString());
});

app.listen(3000, ()=>console.log('Server is running'));