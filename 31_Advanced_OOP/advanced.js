class BankAccount {
    #balance = 0;  // Private field
    #transactions = [];

    constructor(initialBalance) {
        if (initialBalance > 0) {
            this.#balance = initialBalance;
            this.#logTransaction('initial deposit', initialBalance);
        }
    }

    // Public methods to interact with private fields
    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be positive');
        }

        this.#balance += amount;
        this.#logTransaction('deposit', amount);
        return this.#balance;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error('Withdrawal amount must be positive');
        }

        if (amount > this.#balance) {
            throw new Error('Insufficient funds');
        }

        this.#balance -= amount;
        this.#logTransaction('withdrawal', amount);
        return this.#balance;
    }

    // Private method
    #logTransaction(type, amount) {
        this.#transactions.push({
            type,
            amount,
            date: new Date()
        });
    }

    // Public method to view transaction history
    getTransactionHistory() {
        // Return a copy to prevent modification
        return [...this.#transactions];
    }
}

const account = new BankAccount(1000);

console.log(account.getBalance()); // 1000
account.deposit(500);            // Works
account.withdraw(200);           // Works
console.log(account.getBalance()); // 1300
// console.log(account.#balance);   // Error! Can't access private field
// account.#logTransaction();       // Error! Can't access private method


class ShoppingCart {
    #items = new Map();

    addItem(item, quantity = 1) {
        const currentQuantity = this.#items.get(item.id) || 0;
        this.#items.set(item.id, currentQuantity + quantity);
    }

    removeItem(itemId, quantity = 1) {
        const currentQuantity = this.#items.get(itemId);
        if (!currentQuantity) {
            throw new Error('Item not in cart');
        }

        if (quantity >= currentQuantity) {
            this.#items.delete(itemId);
        } else {
            this.#items.set(itemId, currentQuantity - quantity);
        }
    }

    getQuantity(itemId) {
        return this.#items.get(itemId) || 0;
    }

    clear() {
        this.#items.clear();
    }
}

// Testing the Shopping Cart
function runTests() {
    // Test 1: Adding items
    console.log('Testing addItem...');
    const cart = new ShoppingCart();
    const item = { id: 1, name: 'Test Item' };

    cart.addItem(item, 2);
    console.assert(cart.getQuantity(1) === 2, 'Adding item failed');

    // Test 2: Adding same item multiple times
    cart.addItem(item);
    console.assert(cart.getQuantity(1) === 3, 'Adding additional quantity failed');

    // Test 3: Removing items
    console.log('Testing removeItem...');
    cart.removeItem(1, 2);
    console.assert(cart.getQuantity(1) === 1, 'Removing items failed');

    // Test 4: Removing too many items
    cart.removeItem(1, 5);
    console.assert(cart.getQuantity(1) === 0, 'Complete removal failed');

    // Test 5: Error handling
    console.log('Testing error handling...');
    try {
        cart.removeItem(999);
        console.assert(false, 'Should have thrown error for non-existent item');
    } catch (error) {
        console.assert(error.message === 'Item not in cart', 'Wrong error message');
    }

    console.log('All tests completed!');
}

runTests();


// debugging oop code

class Debuggable {
    constructor() {
        this.debugMode = false;
    }

    enableDebug() {
        this.debugMode = true;
    }

    log(...args) {
        if (this.debugMode) {
            console.log(`[${this.constructor.name}]`, ...args);
        }
    }
}

class UserService extends Debuggable {
    #users = new Map();

    constructor() {
        super();
        this.log('Service initialized');
    }

    addUser(user) {
        this.log('Adding user:', user);

        try {
            this.#validateUser(user);
            this.#users.set(user.id, user);
            this.log('User added successfully');
        } catch (error) {
            this.log('Error adding user:', error.message);
            throw error;
        }
    }

    #validateUser(user) {
        if (!user.id || !user.name) {
            throw new Error('Invalid user data');
        }
    }
}

// Usage with debugging
const userService = new UserService();
userService.enableDebug(); // Turn on debugging

// This will log successfully
userService.addUser({ id: 1, name: 'John' });

// This will log an error
try {
    userService.addUser({ id: 2 });
} catch (error) {
    // Handle error
}


// singleton pattern

class ConfigManager {
    static #instance = null;
    #config = {};

    constructor() {
        // Prevent direct construction
        if (ConfigManager.#instance) {
            throw new Error('Cannot create multiple instances of ConfigManager');
        }
        ConfigManager.#instance = this;
    }

    static getInstance() {
        if (!ConfigManager.#instance) {
            ConfigManager.#instance = new ConfigManager();
        }
        return ConfigManager.#instance;
    }

    setConfig(key, value) {
        this.#config[key] = value;
    }

    getConfig(key) {
        return this.#config[key];
    }
}

// Usage:
const config1 = ConfigManager.getInstance();
const config2 = ConfigManager.getInstance();

config1.setConfig('theme', 'dark');
console.log(config2.getConfig('theme')); // 'dark'
console.log(config1 === config2); // true - same instance

// This would throw an error:
// const config3 = new ConfigManager();


// factory pattern

// Different types of users in a system
class BasicUser {
    constructor(name) {
        this.name = name;
        this.permissions = ['read'];
    }
}

class AdminUser {
    constructor(name) {
        this.name = name;
        this.permissions = ['read', 'write', 'delete'];
    }
}

class ModeratorUser {
    constructor(name) {
        this.name = name;
        this.permissions = ['read', 'write'];
    }
}

// Factory class to create users
class UserFactory {
    static createUser(type, name) {
        switch (type.toLowerCase()) {
            case 'basic':
                return new BasicUser(name);
            case 'admin':
                return new AdminUser(name);
            case 'moderator':
                return new ModeratorUser(name);
            default:
                throw new Error(`User type ${type} not supported`);
        }
    }
}

// Usage:
const user1 = UserFactory.createUser('basic', 'John');
const user2 = UserFactory.createUser('admin', 'Jane');

console.log(user1.permissions); // ['read']
console.log(user2.permissions); // ['read', 'write', 'delete']