// These are all iterable
const array = [1, 2, 3];
const string = "hello";
const set = new Set([1, 2, 3]);
const map = new Map([['a', 1], ['b', 2]]);

// They all work with for...of
for (const item of array) console.log(item);
for (const char of string) console.log(char);
for (const item of set) console.log(item);
for (const [key, value] of map) console.log(key, value);

// generators

function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // undefined

// Or use it in a for...of loop
for (const num of numberGenerator()) {
    console.log(num); // 1, 2, 3
}

// practical use cases

// creating id generators

function* createIds() {
    let id = 1;
    while (true) {
        yield `user_${id}`;
        id++;
    }
}

const userIds = createIds();
console.log(userIds.next().value); // "user_1"
console.log(userIds.next().value); // "user_2"
console.log(userIds.next().value); // "user_3"


// pagination helper

function* paginate(array, pageSize) {
    for (let i = 0; i < array.length; i += pageSize) {
        yield array.slice(i, i + pageSize);
    }
}

const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const pages = paginate(items, 3);

console.log(pages.next().value); // ['a', 'b', 'c']
console.log(pages.next().value); // ['d', 'e', 'f']
console.log(pages.next().value); // ['g']

// creating range function

function* range(start, end, step = 1) {
    let current = start;
    while (current <= end) {
        yield current;
        current += step;
    }
}

// Use it like Python's range
for (const num of range(0, 10, 2)) {
    console.log(num); // 0, 2, 4, 6, 8, 10
}