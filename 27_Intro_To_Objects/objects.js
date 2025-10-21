// Numbers have methods - they're objects!
const num = 42;
console.log(num.toString()); // "42"
console.log((42).toFixed(2)); // "42.00"

// Strings have methods too
const str = "hello";
console.log(str.toUpperCase()); // "HELLO"

// Even functions are objects
function greet() {
    console.log('Hi!');
}
console.log(typeof greet); // "function"
console.log(greet instanceof Object); // true

// Arrays are objects
const arr = [1, 2, 3];
console.log(typeof arr); // "object"

// The only primitives that aren't objects are:
// - null
// - undefined
// - numbers (they're automatically converted to Number objects when needed)
// - strings (they're automatically converted to String objects when needed)
// - booleans (they're automatically converted to Boolean objects when needed)
// - symbols

// JavaScript automatically "wraps" primitives when needed
const primitive = "hello";
console.log(primitive.length); // 5 - JavaScript temporarily converts to String object


const car = {
    brand: 'Toyota'
};

// Let's look at car's prototype
console.log(Object.getPrototypeOf(car));
/* You'll see something like:
{
    constructor: ƒ Object()
    hasOwnProperty: ƒ hasOwnProperty()
    toString: ƒ toString()
    ...and more methods
}
*/

// This is why we can call methods like toString() on any object
console.log(car.toString()); // "[object Object]"

// But where did toString() come from? The car object doesn't have it!
console.log(car.hasOwnProperty('toString')); // false


const myString = "Hello";

// myString's prototype chain:
// myString -> String.prototype -> Object.prototype -> null

console.log(myString.toUpperCase()); // From String.prototype
console.log(myString.toString());    // From Object.prototype

// This is a constructor function - note the capital letter
function Person(name, age) {
    // 'this' will refer to the new object being created
    this.name = name;
    this.age = age;
}

// Adding a method to Person's prototype
Person.prototype.greet = function() {
    console.log(`Hello, I'm ${this.name}`);
};

// Creating new Person objects using the 'new' keyword
const john = new Person('John', 30);
const jane = new Person('Jane', 25);

john.greet(); // "Hello, I'm John"
jane.greet(); // "Hello, I'm Jane"


console.log(john.hasOwnProperty('name')); // true - directly on john
console.log(john.hasOwnProperty('greet')); // false - on the prototype

// Check john's prototype
console.log(Object.getPrototypeOf(john) === Person.prototype); // true

// Check the prototype chain
console.log(john instanceof Person); // true
console.log(john instanceof Object); // true

// Adding a new method to Person.prototype
Person.prototype.introduce = function() {
    console.log(`I am ${this.age} years old`);
};

// Both existing objects get the new method!
john.introduce(); // "I am 30 years old"
jane.introduce(); // "I am 25 years old"

// Compare memory usage
console.log(john.greet === jane.greet); // true - same function!