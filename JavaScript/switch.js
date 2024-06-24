// Javascript program to illustrate switch case

function checkDayofWeek(dayNumber) {
    let day;

    switch (dayNumber) {
        case 1:
            day = "Sunday"
            break;
        case 2:
            day = "Monday"
            break;
        case 3:
            day = "Tuesday"
            break;
        case 4:
            day = "Wednesday"
            break;
        case 5:
            day = "Thursday"
            break;
        case 6:
            day = "Friday"
            break;
        case 7:
            day = "Saturday"
    
        default:
            console.log("Enter a valid dayNumber");
            day = "Invalid Input"
            break;
    }
    return day;
}

let result = checkDayofWeek(10)
console.log("Results: ",result);