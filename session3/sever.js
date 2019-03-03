const express = require('express');
const app = express();
const path = require("path");


app.use(express.static('public'));

app.get("/",function(request,respond){
    console.log("hello");
    // respond.send("<h1>hello boy</h1>");
    respond.sendFile(path.resolve(__dirname, "../session2/index.html"));
});
// app.get("/style.css",function(request,respond){
//     console.log(__dirname);
//     console.log("hello");
//     // respond.send("<h1>hello boy</h1>");
//     respond.sendFile(__dirname + "/style.css");
// })

//param
//https://localhost:6969/hth/abc
app.get("/:name/a",function(req,res){
    console.log(req.params.name);
})

//query
//https://localhost:6969/query?name=hth&age=18&key=value
app.get("/query",function(req,res) {
    console.log(req.query);
    res.send("<h1>" + req.query.name + "</h1>" )
})


app.listen(6969,function(err){
    if(err) console.log(err);
    else console.log("sucess");
});
// http://localhost:6969