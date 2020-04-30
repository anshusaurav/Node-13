const mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Q11. Create a article Schema
//     - insert fields title, description, likes, author(ObjectId of User)
//     - add required validation on title and author field
//     - default likes to 0.
//     - create a model named 'Article'
//     - Insert 2 document using Atricle Model
var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    likes: {
        type: Number,
        default:0
    },
    author: {
        type: String,
        required: true
    }
},{timestamps:true});

module.exports = mongoose.model("User", userSchema);