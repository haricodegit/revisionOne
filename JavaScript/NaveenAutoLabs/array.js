// JavaScript program to illustrate array concept


let emptyArray = []
let numbers = [1,2,3,4,5]


// array.push()
// array.pop()
// array.shift()
// array.unshift()

// array.push()

let colours = ["White", "Blue", "Green", "Yellow", "Red"]

let newLen = colours.push("Pink", "Orange")
console.log(newLen);
console.log(colours);

// array.pop()

let fruits = ["Apple", "Orange", "Kiwi", "Pomegranate", "Papaya"]
let lastelement = fruits.pop()
console.log(lastelement);
console.log(fruits);

// array.shift
let carBrands = ['Toyota', 'BMW', 'Audi', 'Volvo']
let firstElement = carBrands.shift()
console.log(firstElement);
console.log(carBrands);

// array.unshift
let bikeBrands = ['Honda', 'KTM', 'Bajaj', 'Hero']
let newLength = bikeBrands.unshift('TVS', 'Yamaha')
console.log(newLength);
console.log(bikeBrands);


// splice
let animals = ['dog', 'cat', 'mouse', 'cow']
let removedElement = animals.splice(1, 2, 'elephant', 'deer', 'bear')
console.log("removedElement ",removedElement);
console.log("animals ", animals);

// slice method

let num = [ 1,2,3,4,5,6 ]
let newNumb = num.slice(1, -2)
console.log(newNumb);

// concat method

let fr = ["Apple", "Orange"]
let numbr = [1,2,3]

let mixedArray = fr.concat(numbr)
console.log(mixedArray);

let check = fr.concat('check')
console.log('check ',check);

// indexOf

let color = ["Orange","Red", "Green", "Yellow", "Pink", "Red"]
let redIndex = color.indexOf("Red")
console.log(redIndex);

let hariIndex = color.indexOf("hari")
console.log(hariIndex);

// 2nd index of red

let redSecondIndex = color.indexOf("Red", color.indexOf("Red")+1)
console.log(redSecondIndex);

let roles = ["admin", "customer", "seller", "vendor"]
let flag = roles.includes("admin", 1)
console.log(flag);

// foreach loop

let n = [1,2,3,4,5,6,7]

for(e of n) {
    console.log(e);
}

console.log("-------------------------------");
for(key in n) {
    console.log(n[key]);
}

console.log("-------------------------------");

n.forEach((fe) => {
    console.log(fe * 2);
})