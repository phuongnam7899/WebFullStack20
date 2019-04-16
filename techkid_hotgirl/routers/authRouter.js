const express = require("express");
const Router = express.Router;
const authRouter = Router();
const userModel = require("../models/users")

authRouter.post("/login", (req,res) => {
    const {account, password} = req.body;
    if (!account || !password){
        res.status(401).send({success:0, message: "account/password missing"})
    }
    else{
        userModel.findOne({account})
        .then( (userFound) => {
            if (!userFound || !userFound_id) res.status(404).send({success:0, message: "user not found"});
            else res.send({success:0, message : "sai mk"});
        }).catch( (err) => {
            res.status(400).send({success:0 ,message:err});
        })
    }
}
)



module.exports = authRouter;