class Animal {
    constructor(name) {
        this.name = name;
        this.energy = 100;
    }

    eat(food) {
        console.log(`${this.name} eats ${food}`);
        this.energy += 10;
    }

    sleep() {
        console.log(`${this.name} sleeps`);
        this.energy += 20;
    }

    makeSound() {
        console.log(`${this.name} makes a generic sound`);
        this.energy -= 3;
    }
}

class Dog extends Animal {
    constructor(name, breed) {  // Our own constructor
        super(name);           // Call parent constructor first!
        this.breed = breed;    // Then add dog-specific properties
    }

    bark() {
        console.log(`${this.name} the ${this.breed} barks: Woof!`);
    }
}

const rex = new Dog('Rex', 'German Shepherd');


console.log(rex.name);    // "Rex"
console.log(rex.energy);  // 100
rex.eat('kibble');       // "Rex eats kibble"
console.log(rex.energy);  // 110
rex.bark();              // "Rex barks: Woof!"
console.log(rex.energy);  // 105

// Bad approach: Completely replacing the parent's method
class Dog1 extends Animal {
    makeSound() {
        // We lost all the parent's functionality!
        console.log(`${this.name} barks: Woof!`);
        // We even forgot to reduce energy!
    }
}

// Good approach: Extending the parent's method
class Dog2 extends Animal {
    makeSound() {
        super.makeSound();  // First do what animals normally do
        console.log(`${this.name} barks: Woof!`); // Then add dog-specific behavior
        this.energy -= 2;  // Extra energy cost for barking
    }
}

const rex1 = new Dog1('Rex');
const rex2 = new Dog2('Rex');

rex1.makeSound();
console.log(rex1.energy); // Still 100! The energy reduction was lost

rex2.makeSound();
// Output:
// "Rex makes a generic sound"
// "Rex barks: Woof!"
console.log(rex2.energy); // 95 (100 - 3 - 2)


class PoliceDog extends Dog {
    constructor(name, breed, badgeNumber) {
        super(name, breed);  // Calls Dog's constructor, which calls Animal's
        this.badgeNumber = badgeNumber;
        this.trained = true;
    }

    trackSuspect(suspectName) {
        if (this.energy < 30) {
            console.log(`${this.name} is too tired to track!`);
            return;
        }
        console.log(`${this.name} is tracking ${suspectName}...`);
        this.energy -= 25;
    }
}

const max = new PoliceDog('Max', 'German Shepherd', 'K9-123');

// Max has access to all methods up the chain:
max.eat('special K9 food');     // From Animal
max.bark();                     // From Dog
max.trackSuspect('suspect');    // From PoliceDog

console.log(max);
/* Output:
PoliceDog {
    name: "Max",
    energy: 85,
    breed: "German Shepherd",
    badgeNumber: "K9-123",
    trained: true
}
*/


// a common mistake using inheritance 


class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }

    move() {
        console.log(`Moving at ${this.speed} mph`);
    }
}

// Seems fine at first...
// class Car extends Vehicle {
//     constructor(speed) {
//         super(speed);
//         this.wheels = 4;
//     }
// }

// // But then...
// class Boat extends Vehicle {  // Uh oh...
//     constructor(speed) {
//         super(speed);
//         this.propellers = 1;
//     }
//     // A boat doesn't really need wheels...
// }

// // And it gets worse...
// class Airplane extends Vehicle {  // This is getting messy
//     constructor(speed) {
//         super(speed);
//         this.wings = 2;
//         // What about propellers?
//         // What about wheels (some planes have them)?
//     }
// }

// composing objects from smaller, focused pieces

// Create specific behaviors
const canMove = {
    move() {
        console.log(`Moving at ${this.speed} mph`);
    }
};

const canFly = {
    fly() {
        console.log(`Flying at ${this.speed} mph and ${this.altitude} feet`);
    }
};

const canFloat = {
    float() {
        console.log(`Floating in water`);
    }
};

// Now we can mix and match
class Car {
    constructor(speed) {
        this.speed = speed;
        // Add moving capability
        Object.assign(this, canMove);
    }
}

class Boat {
    constructor(speed) {
        this.speed = speed;
        // Add moving AND floating capabilities
        Object.assign(this, canMove, canFloat);
    }
}

class Airplane {
    constructor(speed, altitude) {
        this.speed = speed;
        this.altitude = altitude;
        // Add moving AND flying capabilities
        Object.assign(this, canMove, canFly);
    }
}

const car = new Car(60);
const boat = new Boat(40);
const plane = new Airplane(500, 30000);

car.move();   // "Moving at 60 mph"
boat.move();  // "Moving at 40 mph"
boat.float(); // "Floating in water"
plane.fly();  // "Flying at 500 mph and 30000 feet"