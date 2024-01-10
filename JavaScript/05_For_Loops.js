// For Loops
console.log("For Loop Example");

// Basic for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration", i);
}

// Looping through an array
let colors = ["Red", "Green", "Blue", "Yellow"];
console.log("\nLooping through an array:");
for (let j = 0; j < colors.length; j++) {
    console.log("Color:", colors[j]);
}

// Looping through an object
let person = {
    name: "John",
    age: 25,
    city: "New York"
};
// For in loop
console.log("\nLooping through an object:");
for (let key in person) {
    console.log(key + ":", person[key]);
}

// Modern for...of loop for iterable objects
console.log("\nModern for...of loop for iterable objects:");
for (let color of colors) {
    console.log("Color:", color);
}


// While Loop
console.log("While Loop Example");
// Basic while loop
let i = 0;
while (i < 5) {
    console.log("Iteration", i);
    i++;
}
// Looping through an array using a while loop
let numbers = [1, 2, 3, 4, 5];
let index = 0;
console.log("\nLooping through an array using a while loop:");
while (index < numbers.length) {
    console.log("Number:", numbers[index]);
    index++;
}
// Infinite while loop with a break statement
let counter = 0;
while (true) {
    console.log("This loop will run forever unless a break statement is used.");
    counter++;
    if (counter === 3) {
        console.log("Breaking out of the loop.");
        break; // Exit the loop when counter is equal to 3
    }
}


// Do...While Loop
console.log("Do...While Loop Example");

// Basic do...while loop
let i1 = 0;
do {
    console.log("Iteration", i1);
    i1++;
} while (i1 < 5);

// Looping through an array using a do...while loop
let fruits = ["Apple", "Banana", "Orange", "Mango"];
let index1 = 0;

console.log("\nLooping through an array using a do...while loop:");
do {
    console.log("Fruit:", fruits[index1]);
    index1++;
} while (index1 < fruits.length);


