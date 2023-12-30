// modified
// 1. function taskFirst to instantiate variables usign const
// 2. function taskNext to instantiate variables usign let

function taskFirst() {
  const task = "I prefer const when I can.";
  return task;
}

function getLast() {
  return " is okay";
}

function taskNext() {
  let combination = "But sometimes let";
  combination += getLast();

  return combination;
}

console.log(`${taskFirst()} ${taskNext()}`);
