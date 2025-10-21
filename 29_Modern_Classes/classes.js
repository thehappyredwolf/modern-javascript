// Our old constructor way
// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
// User.prototype.greet = function() {
//     console.log(`Hi, I'm ${this.name}`);
// };

// The new class way - same functionality!
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
}

// They work the same way
const user = new User('John', 30);
user.greet(); // "Hi, I'm John"


class Dog {
    constructor(name) {
        this.name = name;
    }
    bark() {
        console.log('Woof!');
    }
}

const dog = new Dog('Rex');

// These all return true
console.log(typeof Dog); // "function"
console.log(dog instanceof Dog); // true
console.log(dog.bark === Dog.prototype.bark); // true


class Car {
    // Constructor runs when we create a new Car
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.speed = 0;
    }

    accelerate() {
        this.speed += 10;
        console.log(`Speed: ${this.speed}`);
    }
}

const car = new Car('Toyota', 'Camry');
car.accelerate(); // "Speed: 10"


class Calculator {
    constructor() {
        this.value = 0;
    }

    // These methods are automatically added to Calculator.prototype
    add(x) {
        this.value += x;
        return this;  // Allows method chaining
    }

    subtract(x) {
        this.value -= x;
        return this;
    }

    getValue() {
        return this.value;
    }
}

const calc = new Calculator();
calc.add(5).subtract(2);
console.log(calc.getValue()); // 3

// static methods


class MathHelper {
    // Static methods are called on the class, not instances
    static square(x) {
        return x * x;
    }

    static isPositive(x) {
        return x > 0;
    }
}

// Use static methods without creating an instance
console.log(MathHelper.square(5)); // 25
console.log(MathHelper.isPositive(-3)); // false

// This won't work:
const math = new MathHelper();
// math.square(5); // Error!


// class properties

class Animal {
    // Class properties (not all browsers support this yet)
    species = 'unknown';
    isAlive = true;

    constructor(name) {
        this.name = name;
    }

    describe() {
        console.log(`${this.name} is a ${this.species}`);
    }
}

const animal = new Animal('Rex');
console.log(animal.isAlive); // true

// private fields (Modern JavaScript)

class BankAccount {
    #balance = 0;  // Private field

    constructor(initialBalance) {
        if (initialBalance > 0) {
            this.#balance = initialBalance;
        }
    }

    deposit(amount) {
        this.#balance += amount;
        this.#logTransaction('deposit', amount);
    }

    getBalance() {
        return this.#balance;
    }

    #logTransaction(type, amount) {
        console.log(`${type}: ${amount}`);
    }
}

const account = new BankAccount(100);
console.log(account.getBalance()); // 100
// console.log(account.#balance); // Error!
// account.#logTransaction(); // Error!


class Button {
    constructor(text) {
        this.text = text;
        // Wrong way to handle events
        this.element.addEventListener('click', function() {
            this.handleClick(); // 'this' is wrong!
        });

        // Right way - use arrow function to preserve 'this'
        this.element.addEventListener('click', () => {
            this.handleClick(); // 'this' is correct
        });
    }

    handleClick() {
        console.log(this.text);
    }
}