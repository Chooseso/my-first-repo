// Custom map function
// this function works as a custom map where it creates another array with the value of multiple by 2
function customMap(arr, callback){
    // Initiaized an empty array, this will hold the new array and its value
    let newNumbers = []
    // Iterate arr parameter to identify how many loops it needs to get the output and retrieve values
    for(let i = 0; i < arr.length; i++){
        // Push the callback ruturn value to the empty array
        newNumbers.push(callback(arr[i]))
    }
    // return the new array
    return newNumbers
}

let numbers = [1, 2, 3];
let doubled = customMap(numbers, function(num) { return num * 2; });
console.log(doubled); // Should output: [2,4,6]

// filter function
// this function works as a filter where it create new array with filtered value base on the callback function
function filter(arr, callback){
    // Initialized empty array, this will hold the filter value
    let filteredNumber = []
    // iterate arr parameter to identify how many loops and what value should be retrieve for filtering
    for(let i = 0; i<arr.length; i++){
        // create a conditional statement where in the callback function should return true
        if(callback(arr[i])){
            // push arr values base on the callbacks return
            filteredNumber.push(arr[i])
        }
    }
    // return the new array
    return filteredNumber
}

let result = filter([1,2,3,4,15], function(val) { return val<10; });
console.log(result); // Should output: [1,2,3,4]

// Some function
// this function works as a number identifier where in it should return a boolean value base on the callback function return
function some(arr, callback){
    // iterate to the arr parameter to identify what value is met in specified callback
    for(let i = 0; i<arr.length; i++){
        // creates a conditional statement where it checks if the callback function return true
        if(callback(arr[i])){
            // return true if the condition is true
            return true
        }
    }
    // then return false if callback function is false
    return false
}


let result1 = some([1,2,3,4], function(val) { return val>5; });
console.log(result1); // Should output: false

// every function
// this function works as a number identifier where in it should return a boolean value base on the callback function return
function every(arr, callback){
    // iterate to the arr parameter to identify what value is met in specified callback
    for(let i = 0; i<arr.length; i++){
        // creates a conditional statement where it checks if the callback function return true
        if(callback(arr[i])){
            // return true if the condition is true
            return true
        }
    }
    // then return false if callback function is false
    return false
    }

let result2 = every([1,2,3], function(val) { return val>0; });
console.log(result2); // Should output: true


// Reduce function
// this function works as accumulator where in it accumulates the value return by the callback function
function reduce(arr, callback){
    // initilized sum variable for accumulation purpose and set the value to 0
    let sum = 0
    // creates a loop to retrieve arr value
    for(let i =0; i<arr.length; i++){
        // invoke callback function and passed the arguments needed, accumulates callback return value into the sum
        sum = callback(sum, arr[i])
    }
    // return sum
    return sum
}

let sum = reduce([1,2,3,], function(acc, num) { return acc + num; });
console.log(sum); // Should output: 6


// Includes function
// this function works as checker of the array if it mets the callback function specified value
function includes(arr, callback){
    // creates a loop to identify how many loop should needed base on the length of the array
    for(let i =0; i<arr.length; i++){
        // creates a conditional statement where it check if the callback function return boolean value true
        if(callback(arr[i])){
            // return true if the condition is correct
            return true
        }
    }
    // return false if the condition does not met
    return false
}

let result3 = includes([1,2,3], function(val) { return val===2; });
console.log(result3); // Should output: true