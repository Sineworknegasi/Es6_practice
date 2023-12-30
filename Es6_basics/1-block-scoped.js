// Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock 
//so that the variables aren’t overwritten inside the conditional block

function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}

console.log(taskBlock(true));
console.log(taskBlock(false));
