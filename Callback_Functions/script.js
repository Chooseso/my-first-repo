// Custom Array Filter

function customFilter(arr, callback) {
    // First Create a empty array that will hold the filtered results, in my case I used filteredResult as variable. 
    // after that I create a loop where in it loops base on array's length, this will determine how many times the loop will occur. 
    // Lastly I create a conditional statement where in I invoke the callback function, if the callback function returns true the block of code is executed, 
    // inside the if statement I retrieve the true values and push it to the empty array. after that I return the array.
    
    let filteredReult = [];
    for(let i =0; i < arr.length; i++){
        if(callback(arr[i])){
            filteredReult.push(arr[i]);
        }
    }
    return filteredReult;
}

function isEven(num) {
    return num % 2 === 0;
}

var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = customFilter(numbers, isEven);
console.log(evenNumbers);  // Output: [2, 4, 6]


// Countdown timer

function countdown(start, callback) {
    // First I created a for loop to create a countdown effect by displaying the parameter start 5 to 1, 
    // after the I set a delay using the setTimeout function, where in I invoke the callback function and passed the i variable as 
    // arguments this will lead to passing unique i value on callback function during loop, then I set up a delay of 1 second every loop for each value.
    
    for(let i = start; i >= 1; i--){
        setTimeout(() => {
            callback(i)
        }, 1000)
    }
}

function displayNumber(num) {
    console.log(num);
}

countdown(5, displayNumber);  // Output: 5 4 3 2 1 0 (with 1-second delay between each)

// Simple Event Listener

function createButton(buttonText, callback) {
    // First create a button variable that will hold the value/id of html button using document.getElementById.
    // after that I set the textContent of the html button in to buttonText parameter of createButton, then I added a eventlistener and passed parameters
    // click to determine that it is a click event, and invoke the callback function to displaye Button Clicked.

    let button = document.getElementById("button");
    button.textContent = buttonText;
    document.getElementById("button").addEventListener("click", callback);
}

function buttonClicked() {
    console.log("Button Clicked!");
}

createButton("Click Me", buttonClicked);

// Task Runner

function runTasks(tasks) {
    // Create a for loop where in it loops based on the length of array of functions, then create a task variable to hold each function every loop,
    // create a setTimeout function to determine the task as a callback and add delays of each callback.
    
    for(let task of tasks){
        setTimeout(() => {
            task()
        }, 1000);
    }
}

function task1() {
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 completed");
}

runTasks([task1, task2, task3]);

// Interactive Quiz Ganme

function askQuestion(question, choices, correctAnswer, callback) {
    // first I created a user input to handle user responses using the prompt function, 
    // after that I passed the question and choices parameter to visualize the prompt, then I created a conditional statement to compare the user response 
    // and the correct answer, the if statements determine if the comparison of the user response if the response is same the invoke the call back and give the 
    // argument true, else false.
    
    let userAnswer = prompt(question + ": " + "\n" + "Choices: " + choices);
    if(userAnswer === correctAnswer){
        callback(true);
    }
    else{
        callback(false)
    }
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
}

askQuestion("What is 2 + 2?", ["1", "2", "3", "4"], "4", checkAnswer);