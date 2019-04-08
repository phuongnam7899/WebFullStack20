const mongoose = require("mongoose");
const model = mongoose.model;

const GameSchema = require("../schema/games");

const GameModel = model("game", GameSchema);

module.exports = GameModel;