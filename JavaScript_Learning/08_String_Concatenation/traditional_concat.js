let firstName = "John";
let lastName = "Doe";

// Using the + operator
let fullName = firstName + " " + lastName;
console.log(fullName);  // Outputs: John Doe

// Concatenation with non-string values
let age = 30;
let introduction = "My name is " + fullName + " and I am " + age + " years old.";
console.log(introduction);  // Outputs: My name is John Doe and I am 30 years old.

// Concatenation with the += operator
let message = "Hello";
message += " World";
console.log(message);  // Outputs: Hello World