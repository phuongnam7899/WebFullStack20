'use strict'

function search(input, target) {
  var index = -1;
  var evaluating = 0.5;
  var start = 0;
  var end = input.length - 1;
  var maxLoop = (Math.log2(input.length)).toFixed(0) + 1;
  for (var i = 0;i <= maxLoop; i++ ){
    if(start === 0 && end === 1){
      if(input[start] === target){
        index = start;
        break;
      } else if(input[end] === target){
        index = end;
        break;
      } else{
        index = -1;
        break;
      }
    }
    let evaluateIndex = ((end + start)/2).toFixed(0);
    evaluating = input[evaluateIndex];
    console.log(start + "  " + end + "  " + evaluating);
    if(evaluating === target){
      index = evaluateIndex;
      break;
    }
    if(evaluating > target){
      end = input.indexOf(evaluating);
    }
    if(evaluating < target){
      start = input.indexOf(evaluating);
    }

  }
  return Number(index);
}
console.log(search([-4784,2585,7828],-4784));
module.exports = search;