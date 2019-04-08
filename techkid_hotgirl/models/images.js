const mongoose = require("mongoose");
const model = mongoose.model;

const ImageSchema = require("../schema/images");

const ImageModel = model("image", ImageSchema);

module.exports = ImageModel;