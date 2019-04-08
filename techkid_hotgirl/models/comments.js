const mongoose = require("mongoose");
const Model = mongoose.model;
const commentSchema = require("../schema/comments");

const commentModel = new Model("comment", commentSchema);

module.exports = commentModel;