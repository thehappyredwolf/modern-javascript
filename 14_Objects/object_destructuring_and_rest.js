let user = {
  name: "John",
  age: 30,
  city: "New York",
};

// Basic destructuring
let { name, age } = user;
console.log(name); // "John"
console.log(age); // 30

// Destructuring with different variable names
let { name: userName, age: userAge } = user;
console.log(userName); // "John"
console.log(userAge); // 30

// Destructuring with default values
let {country = "USA" } = user;
console.log(country); // "USA" (default value used)


// rest operator with objects

user = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA",
};

// Using rest operator
let {name: personName, age:personAge, ...rest } = user;
console.log(personName); // "John"
console.log(personAge); // 30
console.log(rest); // { city: "New York", country: "USA" }