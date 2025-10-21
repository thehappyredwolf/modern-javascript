// Using Promises
function getUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: id, name: 'John' });
        }, 1000);
    });
}

// Promise way
getUser(1)
    .then(user => console.log(user));

// Async/await way
async function displayUser() {
    const user = await getUser(1);
    console.log(user);
}

displayUser();


// Regular function
async function getData() {
    // async function code
}

// Arrow function
const getData2 = async () => {
    // async function code
};

// Method in a class or object
const obj = {
    async getData() {
        // async function code
    }
};

async function greet() {
    return 'Hello';  // Automatically wrapped in Promise
}

// These are equivalent:
greet().then(message => console.log(message));  // Hello
// console.log(await greet());  // Hello


function getUserData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id < 0) {
                reject(new Error('Invalid ID'));
            } else {
                resolve({ id: id, name: 'John' });
            }
        }, 1000);
    });
}

async function fetchUserData(id) {
    try {
        console.log('Fetching user data...');
        const user = await getUserData(id);
        console.log('User:', user);
    } catch (error) {
        console.log('Error:', error.message);
    } finally {
        console.log('Operation complete');
    }
}

// Try with valid and invalid IDs
fetchUserData(1);    // Works
fetchUserData(-1);   // Throws error


async function getDataSequentially() {
    console.log('Starting sequential operations...');

    // These run one after another
    const result1 = await operation1();
    console.log('Result 1:', result1);

    const result2 = await operation2(result1);
    console.log('Result 2:', result2);

    const result3 = await operation3(result2);
    console.log('Result 3:', result3);

    return result3;
}

async function getDataParallel() {
    console.log('Starting parallel operations...');

    // These run at the same time
    const results = await Promise.all([
        operation1(),
        operation2(),
        operation3()
    ]);

    console.log('All results:', results);
    return results;
}

// Helper functions for the example
function operation1() {
    return new Promise(resolve =>
        setTimeout(() => resolve('Result 1'), 1000));
}

function operation2() {
    return new Promise(resolve =>
        setTimeout(() => resolve('Result 2'), 1000));
}

function operation3() {
    return new Promise(resolve =>
        setTimeout(() => resolve('Result 3'), 1000));
}
// Run these functions separately to see the difference
getDataSequentially();
getDataParallel();


async function processUserData(userId) {
    try {
        // Get user
        const user = await getUser(userId);
        console.log('Got user:', user);

        // Get their posts in parallel with their friends
        const [posts, friends] = await Promise.all([
            getUserPosts(userId),
            getUserFriends(userId)
        ]);

        // Process the data
        const processedData = {
            user,
            posts,
            friends,
            timestamp: new Date()
        };

        // Save the results
        await saveProcessedData(processedData);
        console.log('Data processed and saved!');

        return processedData;

    } catch (error) {
        console.error('Error processing user data:', error);
        throw error;  // Re-throw to handle it in the calling function
    }
}

// Helper functions (simulated)
function getUser(id) {
    return new Promise(resolve =>
        setTimeout(() => resolve({ id, name: 'John' }), 1000));
}

function getUserPosts(userId) {
    return new Promise(resolve =>
        setTimeout(() => resolve(['Post 1', 'Post 2']), 1000));
}

function getUserFriends(userId) {
    return new Promise(resolve =>
        setTimeout(() => resolve(['Friend 1', 'Friend 2']), 1000));
}

function saveProcessedData(data) {
    return new Promise(resolve =>
        setTimeout(() => resolve('Saved'), 1000));
}

// Using the function
processUserData(1)
    .then(result => console.log('Final result:', result))
    .catch(error => console.error('Failed:', error));

// common pitfalls

// forgetting await

// Wrong
async function example() {
    const result = getData();  // Oops! Forgot await
    console.log(result);  // Logs Promise object, not the data
}

// Correct
async function example() {
    const result = await getData();
    console.log(result);  // Logs the actual data
}


// using await in a regular function

// Wrong
function example() {
    // const data = await getData();  // Error: await only valid in async function
}

// Correct
async function example() {
    const data = await getData();
}

// forgetting to handle errors

// Wrong
async function example() {
    const data = await riskyOperation();  // Might throw error!
}

// Correct
async function example() {
    try {
        const data = await riskyOperation();
    } catch (error) {
        console.error('Something went wrong:', error);
    }
}

// best practices

// Run independent operations in parallel

// Sequential (slower)
// users = await getUsers();
// posts = await getPosts();

// // Parallel (faster)
// const [users, posts] = await Promise.all([
//     getUsers(),
//     getPosts()
// ]);