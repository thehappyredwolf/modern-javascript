'use strict';

// x = 3.14; This will cause an error because we didn’t use a keyword (let, const, or var) to declare the variable.
// Strict mode requires all variables to be declared before use.
let x = 3.14; // This works without errors.
console.log(x);


function strictFunction() {
    'use strict'; // Instead of enabling strict mode globally, we can also enable it inside functions.
    let y = 3.14;  // This is fine.
    z = 42;  // This will cause an error.
}

strictFunction();