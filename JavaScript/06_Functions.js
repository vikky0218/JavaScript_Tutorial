// Function Declaration
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Function Call
greet("Alice"); // Output: Hello, Alice!

// Function with Return Value
function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log("Sum:", result); // Output: Sum: 8

// Function Expression
let multiply = function(x, y) {
    return x * y;
};

let product = multiply(4, 6);
console.log("Product:", product); // Output: Product: 24

// Arrow Function (ES6+)
let square = (num) => num * num;

let squaredValue = square(9);
console.log("Squared Value:", squaredValue); // Output: Squared Value: 81

// Default Parameters
function greetWithDefault(name = "Guest") {
    console.log("Hello, " + name + "!");
}

greetWithDefault(); // Output: Hello, Guest!
greetWithDefault("Bob"); // Output: Hello, Bob!

// Rest Parameters
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

let total = sum(1, 2, 3, 4, 5);
console.log("Total:", total); // Output: Total: 15
