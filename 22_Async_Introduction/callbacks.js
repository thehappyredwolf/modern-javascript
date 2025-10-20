const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number);
});

// Or with arrow function
numbers.map(number => number * 2);

// Regular function that does something
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Function that takes another function as an argument
function executeGreeting(callbackFn) {
    callbackFn('John');
}

// Pass greet as a callback
executeGreeting(greet);  // Outputs: Hello, John!

console.log('Starting...');

setTimeout(function() {
    console.log('2 seconds have passed!');
}, 2000);

console.log('Finishing...');

// Outputs:
// Starting...
// Finishing...
// (2 seconds later) 2 seconds have passed!


function makeBreakfast() {
    console.log('Starting breakfast preparation...');

    setTimeout(() => {
        console.log('1. Toasting bread...');

        setTimeout(() => {
            console.log('2. Bread is toasted! Adding butter...');

            setTimeout(() => {
                console.log('3. Butter added! Making eggs...');

                setTimeout(() => {
                    console.log('4. Eggs are ready! Breakfast is served!');
                }, 2000);  // Cooking eggs
            }, 1000);  // Adding butter
        }, 2000);  // Toasting
    }, 1000);  // Initial preparation
}

makeBreakfast();


function getUser(id, callback) {
    console.log(`Fetching user ${id} from database...`);

    // Simulate database delay
    setTimeout(() => {
        // Simulate a user object
        const user = {
            id: id,
            name: 'John Doe',
            email: 'john@example.com'
        };

        // Pass user data to callback
        callback(user);
    }, 1500);
}

function getUserPosts(userId, callback) {
    console.log(`Fetching posts for user ${userId}...`);

    setTimeout(() => {
        // Simulate posts
        const posts = [
            { id: 1, title: 'Post 1' },
            { id: 2, title: 'Post 2' }
        ];

        callback(posts);
    }, 1500);
}

// Using our functions
getUser(1, function(user) {
    console.log('Got user:', user);

    // Now get their posts
    getUserPosts(user.id, function(posts) {
        console.log('Got posts:', posts);

        // What if we needed more data?
        // We'd have to nest another callback...
    });
});


// Instead of
button.addEventListener('click', function() {
    // 50 lines of code here...
});

// Better
function handleClick() {
    // Handle click logic
}
button.addEventListener('click', handleClick);


// Not clear
getData(function(d) {});

// Better
getData(function handleUserData(userData) {});


function processData(data, successCb, errorCb) {
    if (!data) {
        errorCb(new Error('No data provided'));
        return;
    }
    successCb(data);
}