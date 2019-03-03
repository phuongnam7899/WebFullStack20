// console.log('hlw');
// require("fs").writeFile("text.txt","hlw", function(err){
//     if(err) console.log(err);
//     else console.log("success!");
// })
// console.log('hlw2');
// require("fs").writeFileSync("text.txt","hlw");


const fs = require('fs');

const data = fs.readFile("web13.json","utf-8",function(err,data){
    if(err) console.log(err);
    else console.log(data);
});