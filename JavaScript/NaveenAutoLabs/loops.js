// Normal for loop

for(let i = 1; i<=10; ++i) {
    console.log(i);
}

console.log("-----------------");
// for...of loop

let array = [1,2,3,4,5]
for(const e of array) {
    console.log(e);
}

console.log("-----------------");
for(i=0; i<array.length; i++){
    console.log(array[i]);
}

console.log("While loop example");
let p = 1
while (p<=10) {
    console.log(p);
    p++;
}

console.log("-----------------");
let l = 2;
while(l <= 10) {
    console.log(l);
    l = l + 2
}


console.log("do-while loop example");

let m = 5
do {
    console.log(m);
    m++
} while (m <= 1);


// using break statement in loop
// print Hi when number is divisible by 5

let num = 1
while (num <= 100) {
    console.log(num);
    if(num % 5 == 0) {
        console.log("Hi hello");
        break;
    }
    num++
}

console.log("--------------");

let browser = ["chrome", "firefox", "edge", "IE"]

for(const e of browser) {
    console.log(e);
    if(e == "edge") {
        console.log("launch edge browser...");
        break;
    }
}


//for in loop on javascript objects
console.log("for in loop on javascript objects");

const user = {
    name: "John Doe",
    age: 30,
    city: "New York"
}

for(const key in user) {
    console.log(key, ":" , user[key]);
}

let br = ["chrome", "firefox", "edge", "IE"]

for(const ele in br ) {
    console.log(ele, ":", br[ele]);
}