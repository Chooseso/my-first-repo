// Task #1 Inventory Tracker

let inventory = ["apple", "banana", "cherry", "date", "elderberry"];
let inventoryCount = [10, 15, 5, 20, 7];

for (let i = 0; i < inventory.length; i++) {
    console.log(`${inventory[i]}: ${inventoryCount[i]}`);
}

// Output and Explanation
// Running this line of codes about Inventory Tracker this will be the expected output:
// apple: 10
// banana: 15
// cherry: 5
// date: 20
// elderberry: 7
// the outputs shown explain the relationships of the 2 different arrays, by using the for loop to iterate inside array we
// retrieve datas of 2 arrays and shows each others equivalent data. First we initialized a counter for the loop to iterate how many times,
// then by using the .length function we initialized what number of times the loop will loop before stopping, i++ indicates that each loop the
// i variable will increment as long the condition is being met.

//  Task #2 Alphabetical Sorting

let words = ["zebra", "apple", "mango", "cherry", "banana"];

for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
        if (words[i] > words[j]) {
            let temp = words[i];
            words[i] = words[j];
            words[j] = temp;
        }
    }
}

console.log(words);

// Output and Explanation
// The Task #2 expected output upon running the line of codes is:
// ["apple","banana","cherry","mango","zebra"]
// So how the process happen? the explanation is the line of code is utilized to sort the data base on the alphabet,
// like A-Z approach. the sorting type the loop used is bubble sort, a bubble sort is a sorting type where we search or compare
// index values to one another. here they used nested loop to do the searching or comparison of value, the first loop or the outerloop is utilized
// to know how many times inner loop will need to fully sort the array, the second loop or the inner loop identifies the number of times needed to sort
// the array alphabetically. the used of if statement is to validate the sorting like for instance is letter Z greater than Letter A, which is true, after the
// validation sorting temp variable is initialized to hold the value of word[i] where word[i] is equialent to zebra and passed it to the word[j] which is apple,
// then the sorting begun with every inner loops done and condition is being met. after that the array is sorted now and we can log/display the output to the console.

// Task #3 Unique Array Builder

let uniqueNumbers = [];

while (uniqueNumbers.length < 10) {
    let randomNumber = Math.floor(Math.random() * 20) + 1;

    // Check if the randomNumber already exists in the array
    let exists = false;
    for (let i = 0; i < uniqueNumbers.length; i++) {
        if (uniqueNumbers[i] === randomNumber) {
            exists = true;
            break;
        }
    }

    // If it doesn't exist, add it to the array
    if (!exists) {
        uniqueNumbers.push(randomNumber);
    }
}

console.log(uniqueNumbers);

// Output and Explanation
// The expected output is:
// a random series of 10 numbers like for instance [18,2,9,3,13,8,12,11,15,14]
// the line of codes explained the process of having a unique numbers inside the empty array named uniqueNumbers,
// the numbers are retrieve using the math.random, math.random generates a decimal numbers like for instance 0.10 or .19,
// the used of math.floor is to round down the decimal values, the +1 is utlized to select randomly between 1-20. next validating the uniqueness
// of the number inside the array, used if statement to validate the random value, if the generated random value is equal to the value inside the
// array the value of exist will be change to true, the statement is utilized inside a loop to search the value inside the array. if outside loop holds
// the push function so that unique number will be added to the array

// Task #4 Triangle Checker

let sideA = 7;
let sideB = 10;
let sideC = 5;

if (sideA + sideB > sideC && sideB + sideC > sideA && sideA + sideC > sideB) {
    console.log(`The sides ${sideA}, ${sideB}, and ${sideC} form a valid triangle.`);
} else {
    console.log(`The sides ${sideA}, ${sideB}, and ${sideC} do not form a valid triangle.`);
}

// Output and Explnation
// the output result of this line of codes is:
// The sides 7, 10, and 5 form a valid triangle
// First initialized sides value for example sideA: 7, sideB: 10, sideC: 5, after initializing it utilized conditional statement 
// specifically if else statement, using if else statement it validates/check the triangle, here the code utilized logical operators, 
// logical operators consist of OR(||), AND(&&), and lastly NOT(!), here AND operator is used it means all of the comparison operators 
// used should be equivalent to true value.