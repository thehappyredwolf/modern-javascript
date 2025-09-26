let integer = 42;
let float = 3.14;
let negative = -10;
let exponent = 2.998e8; // Scientific notation: 2.998 × 10^8

// The typeof operator returns a string indicating the type of a given value.

console.log(typeof integer); // Outputs: number
console.log(typeof float);   // Outputs: number
console.log(typeof negative);// Outputs: number
console.log(typeof exponent);// Outputs: number

// Special numeric values
console.log(1 / 0);  // Outputs: Infinity
console.log(-1 / 0); // Outputs: -Infinity
console.log("not a number" / 2); // Outputs: NaN (Not a Number)