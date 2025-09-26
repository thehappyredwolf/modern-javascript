let person = {
    name: "John",
    age: 30,
    isStudent: false
};

console.log(person.name); // Outputs: John
console.log(person["name"]); // Also outputs: John
console.log(typeof person); // Outputs: object

// Arrays are also objects
let arr = [1, 2, 3];
console.log(typeof arr); // Outputs: object