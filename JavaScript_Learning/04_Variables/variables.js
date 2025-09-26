'use strict'; // It’s good practice to add this line at the top of all programs.

let age = 25;
console.log(age); // Outputs: 25

age = 26; // We can change the value.
console.log(age); // Outputs: 26

let name = "Alice";
console.log(name); // Outputs: Alice

name = "Bob"; // We can also change string values.
console.log(name); // Outputs: Bob

// **************************************************************************

const PI = 3.14159;
console.log(PI); // Outputs: 3.14159

// PI = 3.14; // This would cause an error: Assignment to a constant variable.

const person = {name: "Charlie", age: 30};
person.age = 31; // We can modify properties of a const object.
console.log(person); // Outputs: {name: "Charlie", age: 31}

// person = {name: "David", age: 25}; // This would cause an error: Assignment to a constant variable.


// ***************************************************************************

let globalVar = "I'm visible everywhere"; // Example of using a global variable.

function scopeExample() {
    let functionVar = "I'm only visible in this function"; // Example of using a function var.
    if (true) {
        let blockVar = "I'm only visible in this block"; // Example of using a block var.
        console.log(globalVar, functionVar, blockVar); // This works fine.
    }
    console.log(globalVar, functionVar); // This works fine.
    // console.log(blockVar); // This would cause an error
}

scopeExample();
console.log(globalVar); // This works fine.
// console.log(functionVar); // This would cause an error.
// As a rule of thumb, always make sure to use variables only within their accessible scope.


// ****************************************************************************

// For constants that are known before execution and don't change, it's common to use uppercase names.

const MAX_USERS = 100;
const DEFAULT_LANGUAGE = 'English';
const COMPANY_NAME = 'Acme Corporation';

// function createUser(username) {
//     if (getCurrentUserCount() < MAX_USERS) {
//         // Create user logic here
//         console.log(`Creating user ${username} with default language ${DEFAULT_LANGUAGE}`);
//     } else {
//         console.log(`Cannot create user. ${COMPANY_NAME} has reached the maximum user limit.`);
//     }
// }

 // createUser('Alice');

// But why? This indicates that these values shouldn’t be changed throughout the entire program.

// ****************************************************************************

// Using descriptive names for variables.

// Bad
let d = new Date().getTime(); 
// let x = userList.find(u => u.id === 123);

// Good
let currentTimestamp = new Date().getTime();
// let targetUser = userList.find(user => user.id === 123);

// ****************************************************************************

// Using camelCase for variable names.

let firstName = "John";
let lastLoginDate = new Date();

// ****************************************************************************

// Using consistent naming conventions.

// Inconsistent
let user_name = "Alice";
// let userAge = 30;
let UserEmail = "alice@example.com";

// Consistent
let userName = "Alice";
let userAge = 30;
let userEmail = "alice@example.com";

// ****************************************************************************

// Declaring variables at the top of their scope.

function calculateCircleProperties(radius) {
    let diameter, circumference, area;

    diameter = radius * 2;
    circumference = 2 * Math.PI * radius;
    area = Math.PI * radius * radius;

    return { diameter, circumference, area };
}

// ****************************************************************************

// Using const by default and let when you know the value will change.

// const PI = 3.14159;
const BASE_URL = '<https://api.example.com>';

let currentUser = 'Alice';
let score = 0;

function updateScore(newScore) {
    score = newScore;  // We use let for score because it changes
}



