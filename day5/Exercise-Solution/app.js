const mongoose = require('mongoose');
var User = require("./models/user");
var Address = require("./models/address");
mongoose.connect('mongodb://localhost:27017/Day5-exercise', 
{useNewUrlParser: true, useUnifiedTopology: true},
(err) =>{
    console.log(err);
});

// var obj = {name: "Tim Collins", email: "timc@america.com", age: 29};

// User.create(obj, (err, data) => {
//     if(err) return console.log({err});
//     console.log('User added');
// });

// var obj2 = {name: "Rishabh", email: "timc@america.com",};

// User.create(obj2, (err, data) => {
//     if(err) return console.log({err});
//     console.log('User added');
// });

// var obj5 = {name: "prateek", email:"nav@gmail.com", address:{street: "Downing", city: "Kolkata", state: "West-Bengal", pin:201452}};

// User.create(obj5, (err, data) => {
//     if(err) {console.log({err}); return;}
//     console.log('User added');
// });
var addressObj = {user_object_id: "5eab1545bdf5a6408c62be7e", street: "Preet Vihar", city: "New Delhi", state: "Delhi", pin: 110006 };
Address.create(addressObj, (err, data) => {
    if(err) {console.log({err}); return;}
    console.log('Address added');
});