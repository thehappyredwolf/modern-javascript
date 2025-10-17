let colors = ['red', 'green', 'blue'];

// Basic array destructuring
let [first, second, third] = colors;
console.log(first);  // 'red'
console.log(second); // 'green'
console.log(third);  // 'blue'

// Skipping elements
let [primary, , tertiary] = colors;
console.log(primary);  // 'red'
console.log(tertiary); // 'blue'

// Default values
let [a, b, c, d = 'yellow'] = colors;
console.log(d); // 'yellow' (default value used)

// Swapping variables
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x, y); // 2, 1

let numbers = [1, 2, 3, 4, 5];

// Using rest operator in destructuring
[first, second, ...rest] = numbers;
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

// Rest must be the last element
// let [...allButLast, last] = numbers; // This will cause an error

// Combining arrays using spread operator
let moreNumbers = [...numbers, 6, 7, 8];
console.log(moreNumbers); // [1, 2, 3, 4, 5, 6, 7, 8]

// Creating a copy of an array
let numbersCopy = [...numbers];
console.log(numbersCopy); // [1, 2, 3, 4, 5]