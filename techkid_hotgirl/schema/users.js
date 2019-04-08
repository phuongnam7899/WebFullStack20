const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : {type: String, require:true},
    dob : {type: Date},
    gender: {type: String},
    password : {type: String},
    loaction : {type: String},
    account : {type:String, unique:true, require:true}
})

module.exports = UserSchema;