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

const sum = add(8,6)
console.log(sum);

// 2. Function Expression: Annonymous Function

const multiply = function(x, y) {
    return x * y;
}

const mul = multiply(5,5)
console.log(mul);

// 3. Arrow function Expression

const divide = (t1, t2) => t1 / t2
const div = divide(10, 2)
console.log(div);

// 4. Function Constructor

const substract = new Function('a', 'b', 'return a - b')
subs = substract(10, 2)
console.log(subs);

// 5. IIFE (Immediately Invoked Function Expression)

(() => {
    console.log('Server is up n running on port 3000');
})

()

// 6 Generator Function
// function* and yield

function* sequenceNumberGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const numbers = sequenceNumberGenerator()
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);

// 7. Anonymous function

const numb = [1,2,3,4,5]

const sqrt = numb.map((e) => e * e)
console.log(sqrt);

// 8. Recursive Function

function factorial(n) {
    if( n === 0 || n === 1 ) {
        return 1
    } else {
        return n * factorial(n-1)
    }
}

// 4! -> 4 * 3 * 2 * 1
console.log(factorial(5));

// 9. Higher Order Function

function addition(a, b) {
    return a + b
}

function multiplication(x, y) {
    return x * y
}

function substraction(c, d) {
    return c - d
}

function operator(m, n, funcName) {
    return funcName(m, n)
}

const sum1 = operator(5, 6, addition)
const subs1 = operator(3, 6, substraction)
const mul1 = operator(5, 9, multiplication)

console.log(sum1);
console.log(subs1);
console.log(mul1);