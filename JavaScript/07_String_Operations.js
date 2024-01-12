// String Operations

// Concatenation
let str1 = "Hello";
let str2 = "World";
let resultConcatenation = str1 + " " + str2;
console.log("Concatenation:", resultConcatenation); // Output: Hello World

// String Length
let text = "This is a sample text.";
let lengthOfString = text.length;
console.log("Length of String:", lengthOfString); // Output: 23

// Accessing Characters (individual characters in a string are indexed starting from 0)
let firstCharacter = text[0];
console.log("First Character:", firstCharacter); // Output: T

// Substring
let substring = text.substring(5, 10);
console.log("Substring:", substring); // Output: is is

// String to Upper/Lower Case
let upperCaseText = text.toUpperCase();
let lowerCaseText = text.toLowerCase();
console.log("Upper Case:", upperCaseText);
console.log("Lower Case:", lowerCaseText);

// Searching within a String
let searchTerm = "sample";
let indexOfSample = text.indexOf(searchTerm);
console.log("Index of 'sample':", indexOfSample); // Output: 10

// Replace
let replacedText = text.replace("sample", "example");
console.log("After Replacement:", replacedText);

// Splitting a String into an Array
let wordsArray = text.split(" ");
console.log("Words Array:", wordsArray); // Output: ['This', 'is', 'a', 'sample', 'text.']

// Trim (remove whitespace from both ends of a string)
let stringWithWhitespace = "   Trim me!   ";
let trimmedString = stringWithWhitespace.trim();
console.log("Trimmed String:", trimmedString);

// String Template Literal (ES6+)
let variable1 = "World";
let templateLiteral = `Hello, ${variable1}!`;
console.log("Template Literal:", templateLiteral); // Output: Hello, World!
