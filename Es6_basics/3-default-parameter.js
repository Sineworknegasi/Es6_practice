//Condense the internals of the following function to 1 line - without changing the name of each function/variable.

// Hint: The key here to define default parameter values for the function parameters.

const getSumOfHoods = (initialNumber, expansion1989 = 89, expansion2019 = 19) => initialNumber + expansion1989 + expansion2019;

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));