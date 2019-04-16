const express = require("express");
const Router = express.Router;
const imagesApiRouter = Router();
const ImageModel = require("../models/images");

imagesApiRouter.post("/", (req, res) => {
    const imageData = req.body;
    const newImage = new ImageModel({
        url: imageData.url,
        description: imageData.description,
        title: imageData.title,
        user: imageData.user,
    });
    newImage.save()
        .then((imageSaved) => {
            res.send(imageSaved);
        })
        .catch((err) => {
            res.send(err);
        })
});

imagesApiRouter.get("/", (req, res) => {
    const limit = req.query.perPage || 5;
    const page = req.query.page || 1;
    const skip = limit * (page - 1);
    ImageModel.find({})
        .populate({
            path: "user",
            select: "name account"
        })
        .limit(limit)
        .skip(skip)
        .then( (images) => {
            res.send(images);
        })
        .catch( (err) => {
            res.send(err);
        })
});

imagesApiRouter.get("/:id", (req, res) => {
    ImageModel.findById(req.params.id)
        .populate({
            path: "user",
            select: "name account"
        })
        .then( (image) => {
            res.send(image);
        })
        .catch((err) => {
            res.send(err);
        })
});

imagesApiRouter.put("/:id", (req, res) => {
    ImageModel.findById(req.params.id)
        .then((imageFound) => {
            for (let key in req.body) {
                if (imageFound[key] !== undefined) {
                    imageFound[key] = req.body[key];
                }
            }
            return imageFound.save()
        }).then((imageSaved) => {
            res.send(imageSaved);
        }).catch((err) => {
            res.send(err);
        })
});

imagesApiRouter.delete("/:id", (req, res) => {
    ImageModel.deleteOne({ _id: req.params.id })
        .then(() => {
            res.send("deleted");
        })
        .catch((err) => {
            res.send(err);
        })
});

module.exports = imagesApiRouter;