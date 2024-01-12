// Array Operations

// Creating an Array
let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log("Fruits Array:", fruits);

// Accessing Elements
let firstFruit = fruits[0];
console.log("First Fruit:", firstFruit); // Output: Apple

// Modifying Elements
fruits[1] = "Grapes";
console.log("Modified Fruits Array:", fruits);

// Array Length
let numberOfFruits = fruits.length;
console.log("Number of Fruits:", numberOfFruits);

// Adding Elements to the End
fruits.push("Strawberry");
console.log("Fruits Array After Push:", fruits);

// Removing Element from the End
let removedFruit = fruits.pop();
console.log("Removed Fruit:", removedFruit);
console.log("Fruits Array After Pop:", fruits);

// Adding Elements to the Beginning
fruits.unshift("Pineapple");
console.log("Fruits Array After Unshift:", fruits);

// Removing Element from the Beginning
let shiftedFruit = fruits.shift();
console.log("Shifted Fruit:", shiftedFruit);
console.log("Fruits Array After Shift:", fruits);

// Finding the Index of an Element
let indexOfOrange = fruits.indexOf("Orange");
console.log("Index of 'Orange':", indexOfOrange);

// Removing Elements by Index
let removedElement = fruits.splice(1, 2); // Removes 2 elements starting from index 1
console.log("Removed Elements:", removedElement);
console.log("Fruits Array After Splice:", fruits);

// Copying Arrays (Creating a new array with the same elements)
let copiedFruits = fruits.slice();
console.log("Copied Fruits Array:", copiedFruits);

// Iterating Through an Array (using for...of loop)
console.log("Iterating Through Fruits Array:");
for (let fruit of fruits) {
    console.log(fruit);
}

// Concatenating Arrays
let moreFruits = ["Cherry", "Kiwi"];
let combinedFruits = fruits.concat(moreFruits);
console.log("Combined Fruits Array:", combinedFruits);

// Sorting Elements
let unsortedNumbers = [5, 2, 8, 1, 7];
let sortedNumbers = unsortedNumbers.sort((a, b) => a - b);
console.log("Sorted Numbers:", sortedNumbers);

// Reversing Elements
let reversedNumbers = sortedNumbers.reverse();
console.log("Reversed Numbers:", reversedNumbers);
