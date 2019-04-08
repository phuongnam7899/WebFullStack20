const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    imageId : {type: mongoose.Types.ObjectId, ref: "Image"},
    userId : {type: mongoose.Types.ObjectId, ref: "User"},
    content : {type: String}, 
})

module.exports = CommentSchema;