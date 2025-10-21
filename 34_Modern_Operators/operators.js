// Old way
let user = {
    profile: {
        address: {
            street: 'Main St'
        }
    }
};

// Lots of && checks to avoid errors
// const street = user && user.profile && user.profile.address && user.profile.address.street;

// Or multiple if checks
let street;
if (user) {
    if (user.profile) {
        if (user.profile.address) {
            street = user.profile.address.street;
        }
    }
}


street = user?.profile?.address?.street;

// If any part is undefined or null, returns undefined instead of throwing an error
const nonExistent = user?.profile?.nonExistent?.whatever;
console.log(nonExistent); // undefined

// working with methods


user = {
    name: 'John',
    getAddress() {
        return '123 Main St';
    }
};

// No error if method doesn't exist
console.log(user.getAddress?.()); // "123 Main St"
console.log(user.getNonExistent?.()); // undefined


// working with arrays

const users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 }
];

// Safe array access
console.log(users?.[0]?.name); // "John"
console.log(users?.[9]?.name); // undefined (no error)


// nullish coalescing (??)

// The problem with ||
let count = 0 || 5;  // 5 (but we might want 0!)
let text = "" || "default";  // "default" (but we might want ""!)

// ?? only uses the default for null or undefined
count = 0 ?? 5;  // 0
text = "" ?? "default";  // ""
const missing = null ?? "default";  // "default"
const missing2 = undefined ?? "default";  // "default"

// real world examples

// user settings

const userSettings = {
    theme: 'dark',
    notification: {
        email: false,
        sms: null,
        push: undefined
    }
};

// Get settings with good defaults
const theme = userSettings?.theme ?? 'light';
const emailNotifications = userSettings?.notification?.email ?? true;
const smsNotifications = userSettings?.notification?.sms ?? true;
const pushNotifications = userSettings?.notification?.push ?? true;

console.log(theme); // "dark" (uses existing value)
console.log(emailNotifications); // false (uses existing value)
console.log(smsNotifications); // true (null triggered default)
console.log(pushNotifications); // true (undefined triggered default)

// api response handling

const api = {
    getUser(id) {
        // Simulate API call
        if (id === 1) {
            return {
                name: 'John',
                address: {
                    city: 'New York'
                }
            };
        }
        return null;
    }
};

function getUserInfo(id) {
    const user = api.getUser(id);
    return {
        name: user?.name ?? 'Anonymous',
        city: user?.address?.city ?? 'Unknown'
    };
}

console.log(getUserInfo(1));  // { name: "John", city: "New York" }
console.log(getUserInfo(2));  // { name: "Anonymous", city: "Unknown" }

// function parameters

function createUser(name, options) {
    const defaultOptions = {
        age: 20,
        country: 'Unknown',
        notifications: {
            email: true,
            sms: false
        }
    };

    return {
        name,
        age: options?.age ?? defaultOptions.age,
        country: options?.country ?? defaultOptions.country,
        notifications: {
            email: options?.notifications?.email ?? defaultOptions.notifications.email,
            sms: options?.notifications?.sms ?? defaultOptions.notifications.sms
        }
    };
}

const user1 = createUser('John', {
    age: 30,
    notifications: {
        email: false
    }
});

console.log(user1);
/* Output:
{
    name: "John",
    age: 30,
    country: "Unknown",
    notifications: {
        email: false,
        sms: false
    }
}
*/