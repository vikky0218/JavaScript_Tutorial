//Arthimatics Operators
console.log("Arthimatics Operators")
let a = 40
let b = 20
console.log(a + b) // Addition 
console.log(a - b) // Substraction 
console.log(a * b) // Multiplication
console.log(a ** b) // Exponentiation  Syntax: (base ** exponent)  its basically like [2 raise to 3 ]= 2 x 2 x 2 = 8 
console.log(a / b) // Division
console.log(a % b) // Modulus.   it returns the remainder when one number is divided by another
console.log("Value of a before Increment: ", a)
a++ //Increment this will increase the value of a = 40 by 1 which will be 41
console.log("After Increment: ", a)
console.log("Value of a before Decrement: ", a)
a-- //Increment this will decrease the value of a by 1 
console.log("After Decrement: ", a)
a = 1 //re-assigning the value of a
console.log("Increment Demo 1: ", ++a) //this will first increment the value of a by 1 and then print a.
console.log("Increment Demo 2: ", a++) // this will print the value of "a" then it will increment it by 1, so the incremented value will not be printed
console.log(a) //this is to verify that value is incremented.
console.log("Decrement Demo 1: ", --a) //this will first Decrement the value of a by 1 and then print a.
console.log("Decrement Demo 2: ", a--) // this will print the value of "a" then it will Decrement it by 1, so the Decremented value will not be printed
console.log(a) //this is to verify that value is Decremented.

// Assignment Operators
console.log("Assignment Operators");
let c = 40;
let d = 20;
// Basic Assignment
let e = c;
console.log("c =", e); // e = 40
// Addition Assignment
c += d;
console.log("c += d:", c); // Equivalent to c = c + d, so a is now 60
// Subtraction Assignment
c -= d;
console.log("c -= d:", c); // Equivalent to c = c - d, so a is now 40 again
// Multiplication Assignment
c *= d;
console.log("c *= d:", c); // Equivalent to c = c * d, so a is now 800
// Division Assignment
c /= d;
console.log("c /= d:", c); // Equivalent to c = c / d, so a is now 40 again
// Modulus Assignment
c %= d;
console.log("c %= d:", c); // Equivalent to c = c % d, so a is now 0
// Exponentiation Assignment
c **= 2;
console.log("c **= 2:", c); // Equivalent to c = c ** 2, so a is now 0 (0^2 = 0)
// Concatenation Assignment (String)
let str1 = "Hello";
let str2 = " World";
str1 += str2;
console.log("str1 += str2:", str1); // Concatenates str1 and str2, so str1 is now "Hello World"

// Comparison Operators
console.log("Comparison Operators");
let x = 5;
let y = 10;
console.log("x: ",x)
console.log("y: ",y)
// Equality
console.log("x == y:", x == y); // false
// Inequality
console.log("x != y:", x != y); // true
// Strict Equality (value and type)
console.log("x === y:", x === y); // false
// Strict Inequality (value and type)
console.log("x !== y:", x !== y); // true
// Greater Than
console.log("x > y:", x > y); // false
// Less Than
console.log("x < y:", x < y); // true
// Greater Than or Equal To
console.log("x >= y:", x >= y); // false
// Less Than or Equal To
console.log("x <= y:", x <= y); // true

// Logical Operators with Variables k and v
console.log("Logical Operators");
let k = true;
let v = false;
// Logical AND
console.log("k && v:", k && v); // false
// Logical OR
console.log("k || v:", k || v); // true
// Logical NOT
console.log("!k:", !k); // false
// Combining Logical Operators with Variables k and v
let g = 5;
let h = 10;
// Logical AND with Comparison
console.log("(g < 10) && (h > 5):", (g < 10) && (h > 5)); // true
// Logical OR with Comparison
console.log("(g === 5) || (h === 10):", (g === 5) || (h === 10)); // true
// Negating a Logical Expression with Variables k and v
console.log("!(g < h):", !(g < h)); // false