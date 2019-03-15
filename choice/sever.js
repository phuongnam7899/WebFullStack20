const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
	//TODO:
	// - Lấy 1 câu hỏi ngẫu nhiên từ file dùng để lưu câu hỏi
	// - Hiển thị ra màn hình như trang mẫu http://quyetde123.herokuapp.com/
	// const questionList = JSON.parse(fs.readFileSync("./questions.json", "utf-8"));
	// const randomQuestion = questionList[Math.floor(Math.random()*questionList.length)];
	// res.send(`<h1>
	// 	${randomQuestion}
	// </h1>`);
	res.sendFile(__dirname + "/home.html");
});

app.get("/randomquestion", (req, res) => {
	const questionList = JSON.parse(fs.readFileSync("question.json", "utf-8"));
	const randomQuestion = questionList[Math.floor(Math.random()*questionList.length)];
	res.send(randomQuestion);
});

app.get("/ask", (req, res) => {
	res.sendFile(__dirname + "/ask.html");
});

app.put("/editquestion", (req, res) => {
	const questionList = JSON.parse(fs.readFileSync("./question.json", "utf-8"));
	const question = req.body;
	questionList[question.id] = question;
	fs.writeFileSync("question.json", JSON.stringify(questionList));
});

app.post("/addquestion", (req, res) => {
	const questionList = JSON.parse(fs.readFileSync("./question.json", "utf-8"));
	const question = {
		content: req.body.question,
		yes: 0,
		no: 0,
		id: questionList.length,
	};
	questionList.push(question);
	fs.writeFileSync("question.json", JSON.stringify(questionList));
	res.redirect("/ask");
});

app.get("/vote/:questionId/yes", (req, res) => {
	const questionList = JSON.parse(fs.readFileSync("question.json", "utf-8"));
	const questionId = req.params.questionId;
	const question =questionList[questionId];
	question.yes += 1;
	fs.writeFileSync("question.json", JSON.stringify(questionList));
	res.redirect(`/question/${questionId}`);
});
app.get("/vote/:questionId/no", (req,res) => {
	const questionList = JSON.parse(fs.readFileSync("question.json","utf-8"));
	const questionId = req.params.questionId;
	const question = questionList[questionId];
	question.no += 1;
	const yesRate = Math.round((question.yes / (question.yes + question.no))*100);
	const noRate = 100 - yesRate;
	fs.writeFileSync("question.json", JSON.stringify(questionList));
	res.redirect(`/question/${questionId}`);
});

app.get("/question/:questionId",(req,res) =>{
	const questionList = JSON.parse(fs.readFileSync("question.json", "utf-8"));
	const quesId = req.params.questionId;
	const ques = questionList[quesId];
	const quesContent = ques.content;
	const yesRate = Math.round((ques.yes / (ques.yes + ques.no))*100);
	const noRate = 100 - yesRate;
	res.send(`Question : ${quesContent},Yes : ${yesRate}%,No : ${noRate}%`);
})



app.listen(6969, (err) => {
	if(err) console.log(err)
	else console.log("Server start!!");
});