

const arrow = () => {
    console.log("Hello geekforgeeks");
}

arrow()


function hello() {
    console.log("Hello");
}

hello()


const square = (x) => x*x
console.log(square(4));

const addition = (a, b) => a + b
console.log(addition(5, 2));



() => {
    console.log("arrow function without a variable assigned");
}


// arrow functions with default parameters

const defaultparm = (a, b, c = 5) => {
    let sum = a + b + c
    console.log(sum);
}

defaultparm(5, 5)

const makePerson = (firstName, lastName) => 
({first: firstName, last: lastName})
console.log(makePerson("Kiran", "Kumar"));


// Promises
console.log("Promises");

function myData() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            // data = {name: "Ashok", age: 27}
            reslove(data)
        }, 3000);
    })
}

myData()
.then((data) => {
    console.log(data);
}).catch((error) => {
    console.error("Error: ", error);
})