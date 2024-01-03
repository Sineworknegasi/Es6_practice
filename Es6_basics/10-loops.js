//Rewrite the function appendToEachArrayValue to use ES6’s for...of operator. And
//don’t forget that var is not ES6-friendly.

function appendToEachArrayValue(array, appendString) {
    var arr = []
  for (var idx of array) {
    var value = idx
    arr.push(appendString + value)
  }

  return arr;
}

console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));