//NN SS BB U
//N = Null
//N = Number
//S = String
//S = Symbol
//B = Boolean
//B = BigInt
//U = Undefiened
let a  = null; //NULL
let b = 218; //NUMBER
let c = "VikkyTech"; //STRING
let d = Symbol("Welcome To JS-Learning"); //SYMBOL
let e = true; //BOOL
let f = BigInt(9) //BIGINT
let g = BigInt(9) + BigInt(24) //BIGINT
let h  //UNDEFINED
let i = undefined //UNDEFINED
console.log(a,b,c,d,e,f,g,h,i) 

//OBJECTS in JS
// In Python it is known as Dictonary 
const item = {  
    "Vikky" : "jobless",
    "Age" : 23,
    "Single" : true,
    "Hobby" : "Coding" 
}
console.log(item)
console.log(item["Age"])

console.log("Original Object:");
console.log(item); // Print the entire object

console.log("Accessing 'Age' property:");
console.log(item["Age"]); // Access a specific property using Key

item["Single"] = false; // Modify a property
console.log("Modifying 'Single' property:");
console.log(item);

item["Location"] = "City"; // Add a new property to the existing Object
console.log("Adding 'Location' property:");
console.log(item);

delete item["Hobby"]; // Delete a property
console.log("Deleting 'Hobby' property:");
console.log(item);

const hasHobby = "Hobby" in item; // Check if a specific property exists hasHobby will store boolean values
console.log("\nChecking if 'Hobby' property exists:");
console.log(`Does 'Hobby' exist? ${hasHobby}`);

item["Single"] = true; //Getting back to reality 

console.log("\nIterating through all properties:");
for (const key in item) {  //This is  For In Loop. It has a seperate repel 
  console.log(`${key}: ${item[key]}`); // Iterate through all properties
}

// Get all property keys and values
const keys = Object.keys(item);
const values = Object.values(item);
console.log("\nAll keys and values:");
console.log("Keys:", keys);
console.log("Values:", values);