if (true) { // Start of block.
    let blockScoped = "I'm inside the block";
    console.log(blockScoped);
} // End of block.

// Generally speaking, in JavaScript, a block is everything enclosed within curly braces {}.
// console.log(blockScoped);  This would cause an error because the variable was created inside the block scope, not in the global scope.

for (let i = 0; i < 3; i++) {
    console.log("Loop iteration: " + i);
}


// The next example shows how JavaScript ignores spaces, newlines, and tabs.
// Why should I care? Because this greatly improves the readability of my code.

let sum =
    1 +
    2 +
    3;
// let sum = 1 + 2 + 3; This yields the exact same result, but all in one line.
console.log(sum); // Outputs: 6