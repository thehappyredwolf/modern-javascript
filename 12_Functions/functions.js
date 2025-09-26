function sayHello() { // Has no parameters.
    console.log("Hello, World!");
}

sayHello(); // Outputs: Hello, World!

// **********************************

function greet(name, time) { // Has two parameters.
    console.log("Good " + time + ", " + name + "!");
}

greet("Alice", "morning"); // Good morning, Alice! Both "Alice" and "morning" are called arguments.
greet("Bob", "evening");   // Good evening, Bob!

// **********************************

function greetWithDefault(name = "Guest") { // Setting default value for parameter.
    console.log("Welcome, " + name + "!");
}

greetWithDefault();        // Welcome, Guest!
greetWithDefault("David"); // Welcome, David!

// **********************************

function add(a, b) {
    return a + b;
}

let result = add(3, 5);
console.log(result); // Outputs: 8

// **********************************


// Any code after the return statement in a function will not be executed:

function gradeScore(score) {
    if (score >= 90) {
        return "A";
    }
    if (score >= 80) {
        return "B";
    }
    return "C";
}

console.log(gradeScore(95)); // Outputs: A
console.log(gradeScore(85)); // Outputs: B
console.log(gradeScore(75)); // Outputs: C

// In the last function only a single return statement will be executed.

// ***************************************

function noReturn() {
    console.log("This function doesn't return anything");
}

result = noReturn(); // Since the function has no return value, result is set to undefined by default.
console.log(result); // Outputs: undefined 


// ***************************************

// Function Expression

greet = function(name) {
    console.log("Hello, " + name);
};

greet("Alice"); // Outputs: Hello, Alice

// ***************************************

// Arrow function

greet = (name) => {
    console.log("Hello, " + name);
};

greet("Bob"); // Outputs: Hello, Bob


// This can be written even more concisely for functions that return a value.

let square = x => x * x;

console.log(square(4)); // Outputs: 16