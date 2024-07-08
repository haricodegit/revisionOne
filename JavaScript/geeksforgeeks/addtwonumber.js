// https://www.geeksforgeeks.org/javascript-program-to-add-two-numbers/

// Different ways of adding two numbers in Javascript

// Using (+) operator
// Using function
// Using Arrow function
// Using Addition Assignment (+=) operator

// Using (+) Operator

let num1 = 10
let num2 = 20
let sum = num1 + num2
console.log("Sum is: ", sum);


// Using function

function additionFuntion(a , b) {
    return a + b
}

console.log("Sum using function: ", additionFuntion(6, 6));

// Using Arrow function

let addition = (a, b) => a + b;
console.log("Addition: ", addition(7,5));

