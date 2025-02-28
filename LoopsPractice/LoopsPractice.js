// Task #1  Multiplication Table Generator
let number = 9;

for(let i = 1; i <= 10; i++){
    console.log(`${number} x ${i} = ${number * i}`);
}

// Task #2  Sum of First N Natural Numbers

let n = 7;
let sum = 0;

for(let i = 1; i <= n; i++){
    sum = sum + i;
}
console.log(`The sum of the first ${n} numbers is: ${sum}`);

// Task #3  Array Elements Printer

let numbers = [1,3,5,7,9];

for(let i=0; i<numbers.length; i++){
    console.log(`Array Element: ${numbers[i]}`);
}

// Task #4 Pattern Printer

let numbersOfPattern = 5;

for(let row = 1; row <= numbersOfPattern; row++){
    let stars = "";
    for(let col = 1; col <= row; col++){
        stars += "*";
    }
    console.log(stars)
}

// TAsk #5 Reverse Array Elements

let arraynum = [2,4,6,8,10];

for(let i = arraynum.length - 1; i >= 0; i--){
    console.log(`Reversed Element: ${arraynum[i]}`);
}