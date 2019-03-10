const bodyParser = require("body-parser")
const fs = require("fs")
const express = require("express");
const app = express();


app.get("/",(req,res) => {
    const questions = JSON.parse(fs.readFileSync("question.json"));
    const question = questions[Math.floor(Math.random() * questions.length)]
    res.send(`
    <h1>${question}</h1>
    <button><a href="/">yes</a></button>
    <button><a href="/">no</a></button>
    `);
});
app.use(bodyParser.urlencoded({extended : false}));

app.get("/ask",(req,res) => {
    res.sendFile(__dirname + "/ask.html");
});


app.post("/addquestion", (req,res) => {
    const ques = req.body.question;
    const quesList = JSON.parse(fs.readFileSync("question.json","utf8"));
    quesList.push(ques);
    fs.writeFileSync("question.json",JSON.stringify(quesList));
    res.redirect("/ask")
    })



// app.post("/",(req,res) => {
//     console.log('post');
// })
// app.put("/",(req,res) => {
//     console.log('put');
// })
// app.delete("/",(req,res) => {
//     console.log('delete');
// })

app.listen(6969,(err) => {
    if(err)console.log(err);
    else console.log("ok");
})