const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var articleSchema = new Schema({
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

module.exports = mongoose.model("Article", articleSchema);