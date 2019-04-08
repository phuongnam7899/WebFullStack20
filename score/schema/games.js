const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const GameSchema = new Schema({
    player1 : {
        name: {type : String,},
        roundScore : {type: Array, default: [0]}
    },
    player2 : {
        name: {type : String,},
        roundScore : {type: Array, default: [0]}
    },
    player3 : {
        name: {type : String,},
        roundScore : {type: Array, default: [0]}
    },
    player4 : {
        name: {type : String,},
        roundScore : {type: Array, default: [0]}
    },
});

module.exports = GameSchema;