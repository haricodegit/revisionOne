

// reduce function

let numb = [1,2,3,4,5]
// let acc = 1
let sum = numb.reduce((acc, num) => acc + num, 0)
console.log(sum);

// find out max number in the array using reduce method
console.log("find out max number in the array using reduce method");

let numbr = [1000,20,300,4,5]
let maxi = numbr.reduce((max, n) => (max > n) ? max : n , 0)
console.log(maxi);

console.log("----------DONE------------");

let maxNum = numbr.reduce((max, num) => {
    if(num > max) {
        return num
    } else {
        return max
    }
}, numbr[0])

console.log(maxNum);
console.log("------------------------------------");

// reduce method to find out Min number in the array
console.log("reduce method to find out Min number in the array");

let minArray = [-100,2,-3,4,-5]

const TernaryMin = minArray.reduce((min, n) => (min < n) ? min : n, 0)
console.log("TernaryMin", TernaryMin);
console.log("-----------------------");

let minNum = minArray.reduce((min, num) => {  // min = 1, num = 1
    if(num < min){
        return num
    } else {
        return min
    }
}, minArray[0])

console.log(minNum);

console.log("------------------------------------");

// console.log("1");
// setTimeout(() => {
//     console.log("2");
// }, 3000)
// console.log("3");

console.log("--------------number1----------------------");
let number1 = [1,2,3,4,-5,-6]
let minnew = number1.reduce((min, curr) => curr < min ? curr: min, number1[0])
console.log(minnew);


cartItems = [
    { name: "Shirt", price: 400 },
    { name: "Jeans", price: 500 },
    { name: "Hat", price: 200 },
    { name: "Shoes", price: 700 },
    { name: "T-Shirt", price: 400 }
]

const totalPrice = cartItems.reduce((tol, item) => item.price + tol, 0)
console.log(totalPrice);

// cartItems.reduce()
// number1.reduce()

// 1. map

let numeric = [1,2,3]
let doubleNumbers = numeric.map((e) => e * 2)
console.log(doubleNumbers);

// F to C formula = (32°F − 32) × 5/9

fahrenheits = [100, 200, 300, 400]

function f2c(fah) {
    return (fah - 32) * (5/9)
}

// let results = fahrenheits.map((f) => f2c(f))
let results = fahrenheits.map(f2c)
console.log(results);

// 2. filter

let num = [1,2,3,4,5,6,7,8,9,10]
let evenNum = num.filter((e) => e % 2 == 0)
console.log("evenNum filter ",evenNum);

let eveNumMap = num.map((e) => (e % 2 == 0)? e : null)
console.log("eveNumMap", eveNumMap);

let eveNumMap1 = num.map((e) => e % 2 == 0)
console.log("eveNumMap", eveNumMap1);

employee = [
    {name: "Arun", age: 34, sex: "male"},
    {name: "Santhosh", age: 34, sex: "male"},
    {name: "Priya", age: 21, sex: "female"},
    {name: "Lisa", age: 39, sex: "female"},
]

let WomenEmpOver30 = employee.filter((emp) => emp.age > 30 && emp.sex === "female")
console.log(WomenEmpOver30);