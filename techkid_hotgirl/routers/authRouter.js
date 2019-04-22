const express = require("express");
const Router = express.Router;
const authRouter = Router();
const userModel = require("../models/users");
const bcrypt = require("bcryptjs");




authRouter.get("/me", (req,res) => {
    const account =req.session.userAccount
    if(account){
        userModel.findOne({account},'-password')
        .then((userFound) => {
            res.send(userFound);
        })
    }else{
        res.status(401).send({success:0,message:"chuwa dawng nhap"})
    }
})

authRouter.post("/login", (req,res) => {
    const {account, password} = req.body;
    if (!account || !password){
        res.status(401).send({success:0, message: "account/password missing"})
    }
    else{
        userModel.findOne({account})
        .then( (userFound) => {
            if (!userFound) res.status(404).send({success:0, message: "user not found"});
            else {
                if(bcrypt.compareSync(password, userFound.password)) {
                    req.session.userAccount = account;
                    res.send({sucess:0, message:userFound})
                }else{
                    res.status(401).send({success:0,message: 'wrong pass'})
                }
            };
        }).catch( (err) => {
            res.status(400).send({success:0 ,message:"sthg err"});
        })
    }
}
)



module.exports = authRouter;