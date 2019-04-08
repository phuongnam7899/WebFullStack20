const express = require("express");
const router = express.Router;
const commentsApiRouter = router();
const commentModel = require("../models/comments");

commentsApiRouter.post("/", (req,res) => {
    const commentData = req.body;
    const newComment = new commentModel({
        url :commentData.url,
        description : commentData.description,
        title: commentData.title,
        userId : commentData.userId,
    });
    newComment.save((err) => {
        if(err) res.send(err);
        else res.send(newComment);
    })
});

commentsApiRouter.get("/", (req,res) => {
    commentModel.find({}, (err,commentData) => {
        if(err) console.log(err);
        else res.send(commentData)
    })
});

commentsApiRouter.get("/:id", (req,res) => {
    commentModel.findById(req.params.id, (err,commentData) => {
        if(err) console.log(err);
        else res.send(commentData);
    })
});

commentsApiRouter.put("/:id", (req,res) => {
    commentModel.updateOne({_id : req.params.id}, {
        url : req.body.url ,
        views : req.body.views ,
        like : req.body.like,
        description : req.body.description,
        title: req.body.title,
    }
)});

commentsApiRouter.delete("/:id", (req,res) => {
    commentModel.deleteOne({_id : req.params.id}, (err) = {
        if(err) {
            res.send(err);
        }
    })
});


module.exports = commentsApiRouter;