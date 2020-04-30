const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var addressSchema = new Schema({
        user_object_id: {
            type: String,
            required: true
        },
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

},{timestamps:true});

module.exports = mongoose.model("Address", addressSchema);