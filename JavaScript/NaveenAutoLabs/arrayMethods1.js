// 1. every method - every element in the array must satisfy the condition and returns boolean value
let num = [1,2,3,4,51]
let flag = num.every((e) => e < 10)
console.log(flag);

// 2. some method - atleast 1 element in the array must satisfy the condition and returns boolean value
let flag1 = num.some((e) => e > 50)
console.log(flag1);

// 3 find method - finds the element in the array that matches the condition and return its

let numbers = [ 1,3,5,7,9,6 ]
let evenNum = numbers.find((e) => e%2 === 0)
console.log("evenNum ", evenNum);

// 4. indexOf method - return the index of the value provided
let fruits = ["apple", 'orange', 'bannana', 'kiwi', 'apple']

let indexOfKiwi = fruits.indexOf('kiwi1')
console.log("indexOfKiwi", indexOfKiwi);

// 5. lastindexOf method finds the last occurence of the search value

let lastApple = fruits.lastIndexOf('apple1')
console.log('lastApple', lastApple);

// 6. reverse method - reverse the array and return a new array with reversed values
let frts = ["apple", 'orange', 'bannana', 'kiwi']
let reversefrts = frts.reverse()
console.log('reversefrts', reversefrts);

// 7. sort method - sort the values in the array in ascending order
let produts = ['iphone', 'T-Shirt', 'samsumg', 'apple', 'canon', '123test']
// let produts = [ 'apple', 'canon', 'iphone', 'samsumg' ]
// let produts = ['iphone', 'apple']
let sortedproducts = produts.sort()
// console.timeLog()
console.log('sortedproducts', sortedproducts);

// time

console.time('test1')
let res = 1;
numbers.forEach(e => {
    if(res < 100000) {
        res = e * res
        console.log(res);
    }
})
console.log('res', res);
console.timeEnd('test1')



