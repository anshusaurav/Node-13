const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var commentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    article: {
        type: String,
    }
},{timestamps:true});

module.exports = mongoose.model("Comment", commentSchema);


// insert name, timestamps, user(ObjectId of user), article(ObjectId of Article)
//     - add required validator to name and user
//     - create a Comment model
//     - insert 2 documents each for an article created in Q11. 
