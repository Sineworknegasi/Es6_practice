//Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

function concatArrays(array1,array2, string) {
    return [...array1, ...array2 + string];
}

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));