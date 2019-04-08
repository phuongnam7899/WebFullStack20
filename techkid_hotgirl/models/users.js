const mongoose = require("mongoose");
const model = mongoose.model;

const UserSchema = require("../schema/users");

const UserModel = model("user", UserSchema);

module.exports = UserModel;