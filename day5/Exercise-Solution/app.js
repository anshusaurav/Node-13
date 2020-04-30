const mongoose = require('mongoose');
var User = require("./models/user");
var Address = require("./models/address");
var Article = require("./models/article");
var Comment = require("./models/comment");
mongoose.connect('mongodb://localhost:27017/Day5-exercise', 
{useNewUrlParser: true, useUnifiedTopology: true},
(err) =>{
    console.log(err);
});

// var articleObj = {title: "Morgan Library", description: "Interesting library", likes: 18, author: "5eab1cf107d75d377076c69c"};

// Article.create(articleObj, (err, data) => {
//     if(err) {console.log({err}); return;}
//     console.log('Article added');
// });

var commentObj1 = {name: "Hello world", user: "5eab1cf107d75d377076c69c", article: "5eab1ef58db5b61b7ccdaf5b"};
var commentObj2 = {name: "Good work", user: "5eab1cf107d75d377076c69c", article: "5eab1ef58db5b61b7ccdaf5b"};

Comment.create(commentObj1, (err, data) => {
    if(err) {console.log({err}); return;}
    console.log('Comment added');
});

Comment.create(commentObj2, (err, data) => {
    if(err) {console.log({err}); return;}
    console.log('Comment added');
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
// var addressObj = {user_object_id: "5eab1545bdf5a6408c62be7e", street: "Preet Vihar", city: "New Delhi", state: "Delhi", pin: 110006 };
// Address.create(addressObj, (err, data) => {
//     if(err) {console.log({err}); return;}
//     console.log('Address added');
// });

