// call back function in javascript

// callback = a function that is passed as an augument to another function.

// Callbacks are functions passed as arguments to be executed after an asynchronous operation completes.
// They are used in asynchronous JavaScript to handle responses and ensure non-blocking execution,

        // used to handle asynchronous functions
        // 1. Reading a File
        // 2. Network request
        // 3. Interacting with databases
        
        // "Hey, when your are done call this"


hello(goodbye)
// goodbye()


async function hello(callback){
    console.log("Hello");
    await wait()
    callback()
    
}

async function wait() {
    setTimeout(() => {
        console.log("wait");
    }, 3000);
    
}

function goodbye() {
    console.log("goodbye");
}

function leave() {
    console.log("Leave");
}


// add two numbers and display the results in a seperate function as callback

add(displayConsole, 1, 4)

function add(callback, x, y) {
    let result = x + y
    callback(result)
}

function displayConsole(results) {
    console.log(results);
}

function myFunction(callback) {
    setTimeout(() => {
        const data = {name: "Ramesh", age: 30}
        callback(data)
    }, 3000);
}

myFunction((data) => {
    console.log("Data: ",data);
})

console.log("Check from here");
function hello1(callback) {
    console.log("Hello");
    setTimeout(() => {
        const data = "goodbye"
        callback(data)
    }, 3000);
}

hello1((data) => {
    console.log(data);
})