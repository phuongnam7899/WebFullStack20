const express = require("express");
const Router = express.Router;
const imagesApiRouter = Router();
const ImageModel = require("../models/images");

imagesApiRouter.post("/", (req,res) => {
    const imageData = req.body;
    const newImage = new ImageModel({
        url : imageData.url,
        description : imageData.description,
        title: imageData.title,
        userId : imageData.userId,
    });
    newImage.save((err) => {
        if(err) res.send(err);
        else res.send(newImage);
    })
});

imagesApiRouter.get("/", (req,res) => {
    ImageModel.find({}, (err,imagesData) => {
        if(err) console.log(err);
        else res.send(imagesData)
    })
});

imagesApiRouter.get("/:id", (req,res) => {
    ImageModel.findById(req.params.id, (err,imageData) => {
        if(err) console.log(err);
        else res.send(imageData);
    })
});

imagesApiRouter.put("/:id", (req,res) => {
    ImageModel.updateOne({_id : req.params.id}, {
        url : req.body.url ,
        views : req.body.views ,
        like : req.body.like,
        description : req.body.description,
        title: req.body.title,
    }
)});

imagesApiRouter.delete("/:id", (req,res) => {
    ImageModel.deleteOne({_id : req.params.id}, (err) = {
        if(err) {
            console.log(err);
        }
    })
});

module.exports = imagesApiRouter;