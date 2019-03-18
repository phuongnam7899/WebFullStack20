const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();
const schema = mongoose.Schema;
const questionModel = require("../choice/models/question")

mongoose.connect("mongodb://localhost:27017/web20-quyetde",
{ useNewUrlParser : true},
(err) => {
	if(err) console.log(err);
	else console.log("connected");
	questionModel.find({}, (err,docs) => {
		if(err) console.log(err);
		else console.log(docs);
	})
}
);

app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/home.html");
});

app.get("/randomquestion", (req, res) => {
	questionModel.find({},(err,data) => {
		if(err) console.log(err);
		else{
			const questionList = data;
			const randomQuestion = questionList[Math.floor(Math.random()*questionList.length)];
			res.send(randomQuestion);
		}
	});
});

app.get("/ask", (req, res) => {
	res.sendFile(__dirname + "/ask.html");
});

app.post("/addquestion", (req, res) => {
	const question = new questionModel( {
		content: req.body.question,
	});
	question.save((err) =>{
		if(err) console.log(err);
		else console.log("saved")
	});
	res.redirect("/ask");
});

app.get("/vote/:questionId/yes", (req, res) => {
	const questionId = req.params.questionId;
	questionModel.findOne({_id : questionId}, (err,ques) => {
		if(err) console.log(err);
		else {
			questionModel.updateOne({_id : questionId},{yes : ques.yes + 1},(err,raw) => {
				res.redirect(`/question/${questionId}`);
			});
			
		};
	});
});
app.get("/vote/:questionId/no", (req,res) => {
	const questionId = req.params.questionId;
	questionModel.findOne({_id : questionId}, (err,ques) => {
		if(err) console.log(err);
		else {
			questionModel.updateOne({_id : questionId},{no : ques.no + 1}, (err,raw) => {
				res.redirect(`/question/${questionId}`);
			});
		};
	});
});

app.get("/question/:questionId",(req,res) =>{
	res.sendFile(__dirname + "/result.html");
});
app.get("/detail/:questionId", (req,res) =>{
	questionModel.findOne({_id : req.params.questionId},(err,question) => {
		if(err) console.log(err);
		else res.send(question);
	});
})



app.listen(6969, (err) => {
	if(err) console.log(err)
	else console.log("Server start!!");
});