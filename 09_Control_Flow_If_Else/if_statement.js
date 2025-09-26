let temperature = 35;

if (temperature > 30) {
    console.log("It's a hot day!"); // This runs because the condition is true.
}

console.log("End of program");

// *******************************

let hour = 14;

if (hour < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!"); // Will be printed.
}

// *******************************

let score = 85;

if (score >= 90) {
    console.log("A grade");
} else if (score >= 80) {
    console.log("B grade"); // Will be printed, since 85 >= 80.
} else if (score >= 70) {
    console.log("C grade");
} else {
    console.log("Needs improvement");
}

// *******************************


let num = 15;

if (num > 0) {
    console.log("Number is positive"); // This will be printed.
    if (num % 2 === 0) {
        console.log("Number is even");
    } else {
        console.log("Number is odd"); // This will be printed.
    }
} else {
    console.log("Number is zero or negative");
}

// *******************************

// Ternary Operator

let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote:", canVote);

// Which is equivalent to: 

if (age >= 18) {
    canVote = "Yes";
} else {
    canVote = "No";
}
console.log("Can vote:", canVote);

// ********************************

// Multiple Ternary Operators

age = 15;
let category = age < 13 ? "Child" : age < 18 ? "Teenager" : "Adult";
console.log("Age category:", category); // Will print Teenager.

// While multiple ternary operators can make your code more concise, they can also make it less readable. 