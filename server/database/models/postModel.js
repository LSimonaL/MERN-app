const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
    // images: {
    //     type: Array,
    //     default: []
    // }

});

module.exports = mongoose.model("posts", postSchema);