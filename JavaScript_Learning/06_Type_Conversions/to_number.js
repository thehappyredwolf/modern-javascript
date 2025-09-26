// Using Number() function
console.log(Number("123"));   // 123
console.log(Number(""));      // 0
console.log(Number("  "));    // 0
console.log(Number(true));    // 1
console.log(Number(false));   // 0
console.log(Number(null));    // 0
console.log(Number(undefined));// NaN
console.log(Number("hello")); // NaN

// Notice how most falsy values are converted to 0, except undefined and strings which become NaN.

// Using parseInt() and parseFloat()
console.log(parseInt("123"));     // 123
console.log(parseFloat("3.14"));  // 3.14

// Unary plus operator
console.log(+"123");  // 123
console.log(+true);   // 1