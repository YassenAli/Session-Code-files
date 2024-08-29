

// 3 types of functions in JavaScript
// 1. function declaration
// 2. function expression
// 3. arrow function

// function declaration
// function declaration is used to create a function
// Syntax:
// function function_name(parameters) {
//     // code block to be executed
// }
// Example:

function greet() {
    console.log('Hello, World!');
    
}
// greet(); // Hello, World!


// function expression
// function expression is used to create a function
// Syntax:
// const function_name = function(parameters) {
//     // code block to be executed
// }
// Example:
const greet2 = function() {
    console.log('Hello, World!');
}
// greet2(); // Hello, World!


// arrow function
// arrow function is used to create a function
// Syntax:
// const function_name = (parameters) => {
//     // code block to be executed
// }
// Example:
const greet3 = () => {
    console.log('Hello, World!');
}
// greet3(); // Hello, World!


// function with parameters
// Example:
function greet4(name) {
    console.log(`Hello, ${name}!`);
}
// greet4('John'); // Hello, John!


// function with multiple parameters
// Example:
function greet5(name, age) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
// greet5('John', 25); // Hello, John! You are 25 years old.


// function with return statement
// Example:
function add(a, b) {
    return a + b;
}

const result = add(5, 3);
// console.log(result); // 8

// function with multiple return statements
// Example:
function getBiggestNumber(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

const biggestNumber = getBiggestNumber(5, 3);
// console.log(biggestNumber); // 5



function myFunc(a, b) {
    return a + b;
}
myFunc(3,5,4,8) // no error
myFunc(3) // no error
