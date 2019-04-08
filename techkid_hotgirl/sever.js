const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser")
const apiRouter = require("./routers/apiRouter")

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost:27017/techkid-hotgirl", {
		useNewUrlParser: true
	},
	(err) => {
		if (err) console.log(err);
		else {
			console.log("connected");
		};
	}
);

app.use("/api", apiRouter);



app.listen(6969, (err) =>{
    if(err) console.log(err);
    else console.log("sever");
})