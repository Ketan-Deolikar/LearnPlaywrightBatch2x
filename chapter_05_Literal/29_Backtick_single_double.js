// 29_Backtick_single_double.js
// Difference between backtick, single, and double quotes in JavaScript

// Single (') and double (") quotes are identical for simple strings.
let single = 'Hello';
let double = "Hello";

// Backticks (`) allow string interpolation and multi-line strings.
let name = "Playwright";
let backtick = `Welcome, ${name}!`; // inserts variable value

console.log(single);   // Hello
console.log(double);   // Hello
console.log(backtick); // Welcome, Playwright!
