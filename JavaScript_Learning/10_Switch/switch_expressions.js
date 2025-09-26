let age = 25;

switch (true) {
    case age < 13:
        console.log("Child");
        break;
    case age < 20:
        console.log("Teenager");
        break;
    case age < 30:
        console.log("Young Adult");
        break;
    default:
        console.log("Adult");
}
// Outputs: Young Adult

// Using true as the switch expression effectively turns the switch statement into a series of if-else checks.