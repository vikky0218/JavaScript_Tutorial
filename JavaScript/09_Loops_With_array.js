// Example Array
let numbers = [1, 2, 3, 4, 5];

// Using for loop to iterate through the array
console.log("Using for loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log("Element at index", i, ":", numbers[i]);
}

// Using while loop to iterate through the array
console.log("Using while loop:");
let index = 0;
while (index < numbers.length) {
    console.log("Element at index", index, ":", numbers[index]);
    index++;
}

// Using for...of loop to iterate through the array
console.log("Using for...of loop:");
for (let number of numbers) {
    console.log("Number:", number);
}

// Modifying Array Elements with a for loop
console.log("Modifying Array Elements with a for loop:");
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
}
console.log("Modified Numbers Array:", numbers);

// Filtering Array Elements with a for...of loop
console.log("\nFiltering Array Elements with a for...of loop:");
let evenNumbers = [];
for (let number of numbers) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
}
console.log("Even Numbers Array:", evenNumbers);
