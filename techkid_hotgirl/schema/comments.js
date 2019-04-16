const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    image : {type: mongoose.Types.ObjectId, ref: "image"},
    user : {type: mongoose.Types.ObjectId, ref: "user"},
    content : {type: String}, 
})

module.exports = CommentSchema;