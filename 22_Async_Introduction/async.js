// Synchronous operations happen in sequence
console.log('Starting...');
console.log('Doing something...');
console.log('Finishing...');

// Outputs in order:
// Starting...
// Doing something...
// Finishing...


console.log('Starting...');

// setTimeout simulates an operation that takes time
setTimeout(() => {
    console.log('Doing something...');
}, 2000);  // Wait for 2 seconds

console.log('Finishing...');

// Outputs:
// Starting...
// Finishing...
// (2 seconds later) Doing something...

// Imagine this is synchronous
function getDataFromServer() {
    // This would freeze your entire program!
    // Wait for 5 seconds...
    const startTime = Date.now();
    while(Date.now() - startTime < 5000) {}
    return "Data from server";
}

console.log('Starting to get data...');
const data = getDataFromServer();  // Program freezes here!
console.log('Got data:', data);
console.log('This message is delayed!');

console.log('Starting to get data...');

// Simulating server request with setTimeout
setTimeout(() => {
    console.log('Got data: Data from server');
}, 5000);

console.log('This message appears immediately!');

// Timers
setTimeout(() => {
    console.log('Timer finished!');
}, 1000);

console.log('1'); // Synchronous

setTimeout(() => {
    console.log('2'); // Asynchronous
}, 0);

console.log('3'); // Synchronous

// Outputs:
// 1
// 3
// 2