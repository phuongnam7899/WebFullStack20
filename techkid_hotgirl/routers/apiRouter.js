const express = require("express");
const Router = express.Router;
const imagesApiRouter = require("./imagesApiRouter");
const usersApiRouter = require("./usersApiRouter");
const commentsApiRouter = require("./commentsApiRouter");
const apiRouter = Router();


// localhost:6969/api/
apiRouter.use("/images", imagesApiRouter);
apiRouter.use("/users", usersApiRouter);
apiRouter.use("/comments", commentsApiRouter);



module.exports = apiRouter;