// Different ways of declaring function in JavaScript

// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Function Expression
// 4. Function Constructor
// 5. IIFE (Immediately Invoked Function Expression)
// 6. Generator Function
// 7. Anonymous Function
// 8. Recursive Function
// 9. Higher Order Function

// 1. Function Declaration

function add(a, b) {
    return a + b
}

const addition = add(8,6)
console.log(addition);

// 2. Function Expression

let multiplication = function(a, b) {
    return a * b
}

let mul = multiplication(5,9)
console.log(mul);

// 3. Arrow function Expression

const numbers = [1,2,3,4,5]

let doubleNum = numbers.map((e) => e * e)
console.log(doubleNum);
