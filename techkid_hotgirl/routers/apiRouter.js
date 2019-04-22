const express = require("express");
const Router = express.Router;
const imagesApiRouter = require("./imagesApiRouter");
const usersApiRouter = require("./usersApiRouter");
const commentsApiRouter = require("./commentsApiRouter");
const authRouter = require("./authRouter");
const apiRouter = Router();

apiRouter.use("/auth",authRouter);

apiRouter.use((req,res,next) => {
    if(req.session.userAccount) {
        next();
    }else{
        res.status(401).send({success: 0, message:"chua dawng nhap"})
    }
})
// localhost:6969/api/
apiRouter.use("/images", imagesApiRouter);
apiRouter.use("/users", usersApiRouter);
apiRouter.use("/comments", commentsApiRouter);




module.exports = apiRouter;