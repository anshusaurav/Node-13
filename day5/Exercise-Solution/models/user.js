const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        default: 18
    },//fields street, city, state and pin.
    address: {
        street: {
            type: String
        },
        city:{
            type: String
        },
        state: {
            type: String
        },
        pin:{
            type: Number
        }


    }
},{timestamps:true});

module.exports = mongoose.model("User", userSchema);