// Modify the following function to return the number of arguments passed to it using the rest parameter syntax

function returnHowManyArguments(...arguments) {
    return arguments.length
}

console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));
