const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const GameModel = require('./models/game');

mongoose.connect("mongodb://localhost:27017/web20-score", {
    useNewUrlParser: true
}, (err) => {
    if (err) console.log(err);
    else {
        console.log("connected to mongodb");
        GameModel.find({}, (err,doc) => {
            if(err) console.log(err);
            else console.log(doc);
        });
    };
});

app.use(bodyParser.urlencoded({
	extended: false
}));

app.get("/", (req,res) =>{
    res.sendFile(__dirname +"/home.html");
})

app.get("/saveplayer/query", (req,res) => {
    const game = new GameModel({
        player1 : {
            name : req.query.pl1,
        },
        player2 : {
            name : req.query.pl2,
        },
        player3 : {
            name : req.query.pl3,
        },
        player4 : {
            name : req.query.pl4,
        }
    });
    game.save( (err) => {
        if(err) console.log(err);
        else {
            res.redirect(`/rounds/${game._id}`)
        };
    });
    
});

app.get("/rounds/:id", (req,res) => {
    res.sendFile(__dirname + "/rounds.html")
});

app.get("/gameInfo/:id", (req,res) => {
    GameModel.findById(req.params.id,(err,gameInfo) => {
        if(err) console.log(err);
        else {
            res.send(gameInfo)
        }
    });
});
app.post("/saveGame/:gameId", (req,res) => {
    const gameInfo = JSON.parse(JSON.stringify(req.body));
    GameModel.findOne({_id : req.params.gameId}, (err,data) => {
        if(err) console.log(err);
        else{
            data.player1.roundScore = gameInfo["p1[]"];
            data.player2.roundScore = gameInfo["p2[]"];
            data.player3.roundScore = gameInfo["p3[]"];
            data.player4.roundScore = gameInfo["p4[]"];
            data.save((err,docs) => {
                if(err) console.log(err);
                else console.log("saved");
            })
        }
    })
});
app.listen(6969,(err) => {
    if (err) console.log(err);
    else console.log("ok");
})