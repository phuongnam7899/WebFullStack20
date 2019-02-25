'use strict'

function sort(input) {

  for (let i = 1; i <= input.length; i++){
    var evaluating = input[i];
    var evaluateIndex = i;
    while(evaluateIndex > 0 && input[evaluateIndex -1] > evaluating){
      input[evaluateIndex] = input[evaluateIndex -1];
      evaluateIndex--;
      input[evaluateIndex] = evaluating;
    }
  }

  return input;
}
module.exports = sort
