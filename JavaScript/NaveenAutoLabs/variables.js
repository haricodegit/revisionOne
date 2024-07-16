// Variables - var, let, const

//1. var is old way of declaring variables
// ES6 - we use let instead of var due to its some of the limitations

// scope of var -- functionally/locally scoped + global scope

var x = 10
function test() {
    var y = 20;
    console.log(y);
}

test()
console.log(x);

var pop = "hello js"
function rel() {
    var top = 'hi js'
    console.log(top);
}
console.log(pop);
rel()

// var flag = "hey naveen"
// var t1 = 4
// if(t1 > 3) {
//     var flag = "hi tom"
// }
// console.log(flag);

console.log("-------------------------------");
let flag = "hey naveen"
let t1 = 4
if(t1 > 3) {
    let flag = "modified ?"
    console.log(flag);
}
console.log(flag);

console.log("-------------------------------");

var browser = 'chrome'
var browser = 'firefox'
browser = 'edge'
console.log(browser);


// let variable
// scope -- block scoped
// {}

let f1 = 'hey naveen'
let tmp = 4
if(tmp > 3) {
    let f1 = 'hey tom'
}
console.log(f1);

var a;
console.log(a);

let b;
console.log(b);

const c=10;
console.log(c);

let len = 4
len = 5
console.log(len);


// const - constants

const days = 7
// days = 10
console.log('Salary: ', days * 100);