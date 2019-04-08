const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url : {type : String, require:true},
    views : {type : Number,default: 0},
    like : {type: Number,default: 0},
    description : {type: String},
    title: {type: String},
    userId :{ type: mongoose.Types.ObjectId, ref: "User"},
    

}); 
module.exports = ImageSchema;