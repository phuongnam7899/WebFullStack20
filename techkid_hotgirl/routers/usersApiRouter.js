const express = require("express");
const router = express.Router;

const usersApiRouter = router();
const userModel = require("../models/users");

//CR(O)UD

usersApiRouter.post("/", (req, res) => {
    const userData = req.body;
    const newUser = new userModel({
        name: userData.name,
        password: userData.password,
        account: userData.account
    });
    newUser.save((err) => {
        if(err) res.send(err);
        else res.send(newUser);
    })
});

usersApiRouter.get("/", (req, res) => {
    userModel.find({}, (err, usersInfo) => {
        if (err) res.send(err);
        else res.send(usersInfo);
    })
});

usersApiRouter.get("/:id", (req, res) => {
    userModel.findById(req.params.id, (err, userInfo) => {
        if (err) res.send(err);
        else res.send(userInfo);
    })
});

usersApiRouter.put("/:id", (req, res) => {
    const { name, dob, gender, password, location, account } = req.body;
    userModel.updateOne({
        _id: req.params.id
    },
        {
            name: name,
            gender: gender,
            password: password,
            dob: dob,
            location: location,
            account: account
        }, (err, doc) => {
            if (err) res.send(err);
            else res.send(doc);
        })
});

usersApiRouter.delete("/:id", (req,res) => {
    userModel.deleteOne({_id : req.params.id},(err) => {
        if(err) res.send(err);
        else res.send("ok");
    })
})



module.exports = usersApiRouter;