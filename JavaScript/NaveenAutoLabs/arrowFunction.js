
// single parameter arrow function
const square = num => num * num
const results = square(5)
console.log(results);

// multiple parameter arrow function
const addition = (a, b) => a + b
const sum = addition(5, 9)
console.log(sum);

// no parameter arrow function
const mesg = () => 'Hello JavaScript'
console.log(mesg());

const msg = () => {
    console.log("Hello TypeScript");
}
// console.log(msg());
msg()

// JavaScript objects as parameter to arrow function

person = {
    firstName: 'Naveen',
    lastName: 'Automation Labs'
}

const getFullName = javaObject => `${javaObject.firstName} ${javaObject.lastName}`
const fullName = getFullName(person)
console.log(fullName);

// using default parameter to arrow function

const greet = (username= 'guest', age= 0) => `Hello ${username}! , you are ${age} years old`
// greet()
console.log(greet());
console.log(greet('Ramesh', 25));

// rest parameters or 3 dots parameters or varargs parameter in arrow function
const sumReduce = (...numbers) => numbers.reduce((acc, num) => acc+num, 0)
const total = sumReduce(1,2,3,4,5)
console.log(total);

// default parameters and rest parameter, 3 dot parameter, varagrs parameter in arrow function

const browserInfo = (browser = 'chrome', ...details) => `Browser: ${browser}, Details: ${details}`
// const browserInfo = (browser = 'chrome', ...details) => {
//     console.log('Browser: ', browser);
//     console.log("Details", details);
// }

console.log(browserInfo());

console.log(browserInfo('firefox', 11.15, 'headless', 'mozilla'));

// find Max number using math library
const findMax = (a, b, c) => {
    return Math.max(a,b,c)
}

const maxNum = findMax(10, 500, -500)
console.log(maxNum);
