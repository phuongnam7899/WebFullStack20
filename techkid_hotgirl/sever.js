const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const app = express();
const bodyParser = require("body-parser")
const apiRouter = require("./routers/apiRouter");


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

app.use(session({
	secret: "sfgsfgfdfghsgsfghdfghdfg",
	resave: false,
	saveUninitializes: false,
	cookie: {
		maxAge: 7*24*60*60*1000,
	}
}));

app.use((req,res,next) => {
	req.session.user = "aaaaaa";
	console.log("sessionID", req.sessionID);
	next();
})

app.use("/api", apiRouter);



app.listen(6969, (err) =>{
    if(err) console.log(err);
    else console.log("sever");
})