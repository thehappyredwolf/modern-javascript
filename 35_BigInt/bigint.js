// The largest safe integer in JavaScript
console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991

// What happens when we go beyond?
console.log(9007199254740991 + 1);  // 9007199254740992
console.log(9007199254740991 + 2);  // 9007199254740992 (Wrong!)

// This is where BigInt comes in
console.log(9007199254740991n + 1n); // 9007199254740992n
console.log(9007199254740991n + 2n); // 9007199254740993n (Correct!)


// Using the n suffix
const bigNumber = 123456789123456789n;

// Using BigInt() function
const alsoBig = BigInt("123456789123456789");
const fromNumber = BigInt(123456789);

// Note: You can't create BigInt from decimal numbers
// This will throw an error:
// const decimal = BigInt(123.45);


// Basic operations
console.log(2n + 3n);    // 5n
console.log(3n * 4n);    // 12n
console.log(10n / 3n);   // 3n (rounds down)
console.log(10n % 3n);   // 1n

// Can't mix with regular numbers
try {
    console.log(2n + 3); // TypeError!
} catch (e) {
    console.log("Can't mix BigInt and regular numbers");
}

// Convert if you need to mix
console.log(2n + BigInt(3));  // 5n
console.log(Number(2n) + 3);  // 5

// real world examples

// id handling

class DatabaseRecord {
    constructor(id) {
        this.id = BigInt(id);
    }

    toString() {
        return this.id.toString();  // Convert back to string for display
    }

    equals(other) {
        return this.id === other.id;
    }
}

const record = new DatabaseRecord("9007199254740993");
console.log(record.toString()); // "9007199254740993"

// financial calculations

class LargeMoneyAmount {
    // Store cents as BigInt to avoid decimal issues
    constructor(dollars, cents = 0) {
        this.cents = BigInt(dollars) * 100n + BigInt(cents);
    }

    add(other) {
        return new LargeMoneyAmount(0, this.cents + other.cents);
    }

    toString() {
        const wholeDollars = this.cents / 100n;
        const remainingCents = this.cents % 100n;
        return `$${wholeDollars}.${remainingCents.toString().padStart(2, '0')}`;
    }
}

const amount1 = new LargeMoneyAmount(9007199254740991);
const amount2 = new LargeMoneyAmount(1);
console.log(amount1.add(amount2).toString());  // Works with huge numbers

// performance measurements

function measureLongOperation() {
    const start = process.hrtime.bigint();

    // Simulate long operation
    for(let i = 0; i < 1000000; i++) {
        // ...
    }

    const end = process.hrtime.bigint();
    const duration = end - start;

    console.log(`Operation took ${duration} nanoseconds`);
}

// Comparing BigInts
console.log(2n > 1n);   // true
console.log(2n === 2n); // true
console.log(2n == 2);   // true (loose equality)
console.log(2n === 2);  // false (strict equality)

// Type checking
const big = 123n;
console.log(typeof big); // "bigint"

function isBigInt(value) {
    return typeof value === 'bigint';
}

// limitations

// Can't use decimals
// const decimal = 1.5n; // Error!

// Can't use Math object methods
// console.log(Math.max(1n, 2n)); // Error!

// No unary plus
// console.log(+1n); // Error!

// Division rounds toward zero
console.log(5n / 2n); // 2n, not 2.5n

// JSON doesn't support BigInt by default
const obj = { number: 123n };
try {
    JSON.stringify(obj); // Error!
} catch (e) {
    console.log("Can't JSON stringify BigInts directly");
}

// Handle JSON Serialization

const data = {
    id: 123456789123456789n
};

// Custom JSON handling
const json = JSON.stringify(data, (key, value) =>
    typeof value === 'bigint' ? value.toString() : value
);

// Parse back
const parsed = JSON.parse(json, (key, value) =>
    /^\\d+$/.test(value) ? BigInt(value) : value
);