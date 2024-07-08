// JavaScript program to illustrate if else statement

function checkAge(age) {
    if(age >= 18) {
        console.log("You are eligible to vote");
    }
    else {
        console.log("You are not eligile to vote");
    }
}

checkAge(21)
checkAge(0)


// JavaScript program to check if a given number is positive or negative

function checkNumber(num) {
    if(num > 0) {
        console.log(num+" number is positive");
    }
    else if(num < 0) {
        console.log(num+ " number is negative");
    } 
    else {
        console.log(num+ " number is zero");
    }
}

checkNumber(0)
checkNumber(100)
checkNumber(-1)