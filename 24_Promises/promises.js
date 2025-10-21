function toastBread() {
    return new Promise((resolve, reject) => {
        console.log('Starting to toast bread...');

        setTimeout(() => {
            // Simulate success case
            resolve('Toasted bread');

            // Could simulate failure with:
            // reject('Toaster is broken!');
        }, 2000);
    });
}

// Using the Promise
toastBread()
    .then(result => console.log(result))
    .catch(error => console.log('Error:', error));

console.log('Doing other things while bread is toasting...');


// // Let's create Promises in different states
// const pendingPromise = new Promise((resolve, reject) => {
//     // This Promise stays pending because we never call resolve or reject
// });

// const fulfilledPromise = new Promise((resolve, reject) => {
//     resolve('Success!');
// });

// const rejectedPromise = new Promise((resolve, reject) => {
//     reject('Something went wrong');
// });

// console.log('Pending Promise:', pendingPromise);
// console.log('Fulfilled Promise:', fulfilledPromise);
// console.log('Rejected Promise:', rejectedPromise);


function getUser(id) {
    return new Promise((resolve, reject) => {
        // Simulating database lookup
        console.log(`Looking up user ${id} in database...`);

        setTimeout(() => {
            // Simulate random success/failure
            if (Math.random() > 0.1) {  // 90% success rate
                const user = {
                    id: id,
                    name: 'John Doe',
                    email: 'john@example.com'
                };
                resolve(user);
            } else {
                reject(new Error('Failed to fetch user'));
            }
        }, 1500);
    });
}

// Using the Promise
getUser(1)
    .then(user => {
        console.log('Got user:', user);
    })
    .catch(error => {
        console.log('Error:', error.message);
    })
    .finally(() => {
        console.log('Operation completed (success or failure)');
    });


    function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: id, name: 'John' });
        }, 1000);
    });
}

function getUserPosts(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: `${user.name}'s Post 1` },
                { id: 2, title: `${user.name}'s Post 2` }
            ]);
        }, 1000);
    });
}

// Using Promise chains
getUser(1) // get the user
    .then(user => { // and then
        console.log('Got user:', user); // log the user
        return getUserPosts(user);  // Return a new Promise
    })
    .then(posts => { // resolve that promise and get users posts
        console.log('Got posts:', posts); //log the posts
    })
    .catch(error => { // if anything goes wrong
        // This catch handles errors from either Promise
        console.log('Error:', error); // log the error
    });

let promise1 = Promise.resolve(3);
let promise2 = new Promise(resolve => setTimeout(() => resolve(42), 1000));
const promise3 = Promise.resolve('foo');

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log('All promises completed:', values);
        // values is [3, 42, 'foo']
    });


promise1 = new Promise(resolve => setTimeout(() => resolve('Quick'), 1000));
promise2 = new Promise(resolve => setTimeout(() => resolve('Slow'), 2000));

Promise.race([promise1, promise2])
    .then(result => {
        console.log('Fastest promise was:', result);  // Outputs: 'Quick'
    });

    const promises = [
    Promise.resolve(1),
    Promise.reject('error'),
    new Promise(resolve => setTimeout(() => resolve(3), 1000))
];

Promise.allSettled(promises)
    .then(results => {
        console.log('All promises settled:', results);
        // Shows status and value/reason for each Promise
    });



    function riskyOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('Success!');
            } else {
                reject(new Error('Operation failed'));
            }
        }, 1000);
    });
}

// Multiple catch blocks for different parts of the chain
riskyOperation()
    .then(result => {
        console.log('First then:', result);
        throw new Error('Error in first then');  // Simulate error in processing
    })
    .catch(error => {
        console.log('First catch:', error.message);
        return 'Recovered from error';
    })
    .then(result => {
        console.log('Second then:', result);
    })
    .catch(error => {
        console.log('Final catch:', error.message);
    });


// Always return values in then() blocks:

// Bad
somePromise().then(result => {
    doSomething(result);
});

// Good
somePromise().then(result => {
    return doSomething(result);
});


// Always handle potential errors:

// Bad
somePromise().then(handleSuccess);

// Good
somePromise()
    .then(handleSuccess)
    .catch(handleError);

// Chain Promises properly

// Bad
somePromise().then(result => {
    return anotherPromise().then(newResult => {
        // Nesting Promises
    });
});

// Good
somePromise()
    .then(result => anotherPromise())
    .then(newResult => {
        // Flat Promise chain
    });