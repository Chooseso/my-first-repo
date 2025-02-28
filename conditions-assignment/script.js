// Task #1 Grading System

const score = 59;

if (score >= 90 && score <= 100) {
    console.log("Grade A");
}
else if (score >= 80 && score <= 89) {
    console.log("Grade B")
}
else if (score >= 70 && score <= 79) {
    console.log("Grade C");
}
else if (score >= 60 && score <= 69) {
    console.log("Grade D");
}
else {
    console.log("Grade F")
}


// Task #2 Weather Advisor

const temperature = 16;

if (temperature === 0) {
    console.log("It's freezing outside! Bundle up!");
}
else if (temperature > 0 && temperature <= 15) {
    console.log("It's cold outside. Wear a jacket.");
}
else if (temperature > 15 && temperature <= 30) {
    console.log("The weather is nice. Enjoy your day!");
}
else {
    console.log("It's hot outside. Stay hydrated!");
}


// Task #3 Eligibility Checker

let age = 17;


if (age < 13) {
    console.log("You are too young for this activity.");
}
else if (age >= 13 && age <= 17) {
    console.log("You need parental permission.");
}
else{
    console.log("You are eligible for this activity.");
}

// Task #4 Ticket Price Calculator

age = 15;
const isMember = false;

if(age < 12){
    console.log("The ticket is free");
}
else if(age >= 12 && isMember){
    console.log("The ticket costs $10.");
}
else{
    console.log("the ticket costs $15")
}

// Task #5 Leap Year Checker

function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isLeapYear(2028));