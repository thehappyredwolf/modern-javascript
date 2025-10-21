// Without constructors, creating multiple similar objects is repetitive
let user1 = {
    name: 'John',
    age: 30,
    greet() { console.log(`Hi, I'm ${this.name}`) }
};

let user2 = {
    name: 'Jane',
    age: 25,
    greet() { console.log(`Hi, I'm ${this.name}`) }
};

// Notice how the greet method is duplicated!
console.log(user1.greet === user2.greet); // false - memory inefficient!

function User(name, age) {
    // 'this' will be the new object being created
    this.name = name;
    this.age = age;

    // We'll move this to the prototype soon!
    this.greet = function() {
        console.log(`Hi, I'm ${this.name}`);
    };
}

// Creating objects using the constructor
user1 = new User('John', 30);
user2 = new User('Jane', 25);

console.log(user1); // User {name: "John", age: 30, greet: ƒ}
console.log(user2); // User {name: "Jane", age: 25, greet: ƒ}

// The constructor name is saved
console.log(user1.constructor.name); // "User"

// Without 'new'
const badUser = User('John', 30); // Oops!
console.log(badUser); // undefined
// console.log(window.name); // "John" - accidentally set on global object!

// Best practice: Prevent this mistake
function SafeUser(name, age) {
    if (!(this instanceof SafeUser)) {
        return new SafeUser(name, age);
    }
    this.name = name;
    this.age = age;
}


function User(name, age) {
    this.name = name;
    this.age = age;
}

// Add methods to the prototype, not the constructor
User.prototype.greet = function() {
    console.log(`Hi, I'm ${this.name}`);
};

User.prototype.isAdult = function() {
    return this.age >= 18;
};

user1 = new User('John', 30);
user2 = new User('Jane', 25);

// Now the methods are shared!
console.log(user1.greet === user2.greet); // true - memory efficient!

// We can still add unique properties to individual objects
user1.hobby = 'reading';
console.log(user1.hobby); // "reading"
console.log(user2.hobby); // undefined


function Car(make, model) {
    // Instance properties (unique to each car)
    this.make = make;
    this.model = model;
    this.isRunning = false;
}

// Prototype methods (shared by all cars)
Car.prototype.start = function() {
    this.isRunning = true;
    console.log('Vroom!');
};

Car.prototype.stop = function() {
    this.isRunning = false;
    console.log('Stopping...');
};

const car1 = new Car('Toyota', 'Camry');
const car2 = new Car('Honda', 'Civic');

car1.start();
console.log(car1.isRunning); // true
console.log(car2.isRunning); // false

const car = new Car('Toyota', 'Camry');

// Check if property exists on object itself
console.log(car.hasOwnProperty('make')); // true
console.log(car.hasOwnProperty('start')); // false

// Check if property exists anywhere in prototype chain
console.log('start' in car); // true

// Get the prototype
console.log(Object.getPrototypeOf(car) === Car.prototype); // true

// Check if object is instance of constructor
console.log(car instanceof Car); // true
console.log(car instanceof Object); // true