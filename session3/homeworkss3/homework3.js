const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname,"homeworkss3.html"));
})
app.get('/web13',function(req,res){
    var li = "";
    var data =  fs.readFileSync(path.resolve(__dirname,"../homeworkss3/data/web13.json"));
    var dataList = JSON.parse(data);
    for (let i = 0;i < dataList.length;i++){
        li += "<li>" + dataList[i] + "</li>" + "\n";
    }
    res.send("<ul>" + "\n" + li + "\n" + "</ul>");
});

app.get('/web14',function(req,res){
    var li = "";
    var data =  fs.readFileSync(path.resolve(__dirname,"../homeworkss3/data/web14.json"));
    var dataList = JSON.parse(data);
    for (let i = 0;i < dataList.length;i++){
        li += "<li>" + dataList[i] + "</li>" + "\n";
    }
    res.send("<ul>" + "\n" + li + "\n" + "</ul>");
});

app.get("/web15",function(req,res){
    var li = "";
    var data =  fs.readFileSync(path.resolve(__dirname,"../homeworkss3/data/web15.json"));
    var dataList = JSON.parse(data);
    for (let i = 0;i < dataList.length;i++){
        li += "<li>" + dataList[i] + "</li>" + "\n";
    }
    res.send("<ul>" + "\n" + li + "\n" + "</ul>");
});

app.get('/web16',function(req,res){
    var li = "";
    var data =  fs.readFileSync(path.resolve(__dirname,"../homeworkss3/data/web16.json"));
    var dataList = JSON.parse(data);
    for (let i = 0;i < dataList.length;i++){
        li += "<li>" + dataList[i] + "</li>" + "\n";
    }
    res.send("<ul>" + "\n" + li + "\n" + "</ul>");
});

app.get('/web17',function(req,res){
    var li = "";
    var data =  fs.readFileSync(path.resolve(__dirname,"../homeworkss3/data/web17.json"));
    var dataList = JSON.parse(data);
    for (let i = 0;i < dataList.length;i++){
        li += "<li>" + dataList[i] + "</li>" + "\n";
    }
    res.send("<ul>" + "\n" + li + "\n" + "</ul>");
});

app.get('/web18',function(req,res){
    var li = "";
    var data =  fs.readFileSync(path.resolve(__dirname,"../homeworkss3/data/web18.json"));
    var dataList = JSON.parse(data);
    for (let i = 0;i < dataList.length;i++){
        li += "<li>" + dataList[i] + "</li>" + "\n";
    }
    res.send("<ul>" + "\n" + li + "\n" + "</ul>");
});

app.get('/web19',function(req,res){
    var li = "";
    var data =  fs.readFileSync(path.resolve(__dirname,"../homeworkss3/data/web19.json"));
    var dataList = JSON.parse(data);
    for (let i = 0;i < dataList.length;i++){
        li += "<li>" + dataList[i] + "</li>" + "\n";
    }
    res.send("<ul>" + "\n" + li + "\n" + "</ul>");
});

app.get('/web20',function(req,res){
    var li = "";
    var data =  fs.readFileSync(path.resolve(__dirname,"../homeworkss3/data/web20.json"));
    var dataList = JSON.parse(data);
    for (let i = 0;i < dataList.length;i++){
        li += "<li>" + dataList[i] + "</li>" + "\n";
    }
    res.send("<ul>" + "\n" + li + "\n" + "</ul>");
});


app.listen(1234,function(err){
    if(err) console.log(err);
    else console.log("success")
})