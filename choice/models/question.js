const mongoose = require("mongoose");
const model = mongoose.model;

const QuestionSchema = require("../schema/question");

const QuestionModel = model("question", QuestionSchema);

module.exports = QuestionModel;