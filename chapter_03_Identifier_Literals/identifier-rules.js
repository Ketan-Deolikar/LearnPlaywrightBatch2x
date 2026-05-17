// JavaScript Identifier Rules - Complete Examples
// Run this file with Node.js or in browser console

console.log("=== JavaScript Identifier Rules Examples ===\n");

// RULE 1: Must start with letter, underscore, or dollar sign
console.log("RULE 1: Must start with a letter (a-z, A-Z), underscore _, or dollar sign $");
let firstName = "John";       // Valid: starts with letter
let _private = 42;            // Valid: starts with underscore
let $element = "#app";        // Valid: starts with dollar sign
console.log("  Valid:", firstName, _private, $element);

// RULE 2: Subsequent characters can include digits
console.log("\nRULE 2: Subsequent characters can include digits 0-9");
let item1 = 10;               // Valid: digit at end
let user2name = "Jane";       // Valid: digit in middle
let version_2_0 = 2.0;        // Valid: digits with underscore
console.log("  Valid:", item1, user2name, version_2_0);

// RULE 3: Cannot start with a digit
console.log("\nRULE 3: Cannot start with a digit");
// let 123abc = "test";       // SyntaxError: Invalid or unexpected token
// let 9lives = "cat";        // SyntaxError: Invalid or unexpected token
let _123abc = "test";         // Workaround: start with underscore
let num9lives = "cat";        // Workaround: start with letter
console.log("  Valid workarounds:", _123abc, num9lives);

// RULE 4: Cannot contain spaces or special characters
console.log("\nRULE 4: Cannot contain spaces or special characters");
// let user name = "test";    // SyntaxError: Unexpected identifier
// let user@name = "test";    // SyntaxError: Unexpected token '@'
// let user-name = "test";    // SyntaxError: Unexpected token '-'
let userName = "camelCase";   // Valid
let user_name = "snake_case"; // Valid
console.log("  Valid:", userName, user_name);

// RULE 5: Cannot be a reserved keyword
console.log("\nRULE 5: Cannot be a reserved keyword");
// let class = "Math";        // SyntaxError: Unexpected token 'class'
// let function = "doIt";     // SyntaxError: Unexpected token 'function'
// let return = 5;            // SyntaxError: Unexpected token 'return'
let className = "Math";       // Valid workaround
let myFunction = "doIt";      // Valid workaround
let returnValue = 5;          // Valid workaround
console.log("  Valid workarounds:", className, myFunction, returnValue);

// RULE 6: Case-sensitive
console.log("\nRULE 6: JavaScript identifiers are case-sensitive");
let name = "lowercase";
let Name = "uppercase";
let NAME = "UPPERCASE";
let nAmE = "mixed";
console.log("  These are 4 different variables:");
console.log("  name =", name);
console.log("  Name =", Name);
console.log("  NAME =", NAME);
console.log("  nAmE =", nAmE);

// RULE 7: Can contain Unicode letters
console.log("\nRULE 7: Can contain Unicode letters and escape sequences");
let имя = "Ivan";             // Cyrillic
let 姓名 = "Li";               // Chinese
let πράγμα = "thing";         // Greek
let café = "coffee";          // Accented characters
let \u0041B = "AB";            // Unicode escape sequence (\u0041 = 'A')
console.log("  Cyrillic:", имя);
console.log("  Chinese:", 姓名);
console.log("  Greek:", πράγμα);
console.log("  Accented:", café);
console.log("  Unicode escape:", \u0041B);

// RULE 8: No length limit
console.log("\nRULE 8: No length limit (but keep it readable)");
let a = 1;
let thisIsAVeryLongVariableNameThatDescribesExactlyWhatItDoes = 42;
console.log("  Short:", a);
console.log("  Long:", thisIsAVeryLongVariableNameThatDescribesExactlyWhatItDoes);

// BEST PRACTICES
console.log("\n=== Best Practices ===");

// camelCase for variables and functions
let totalPrice = 100;
let getUserData = function() { return "data"; };

// PascalCase for classes
class UserAccount {}

// UPPER_SNAKE_CASE for constants
const MAX_SIZE = 100;
const API_BASE_URL = "https://api.example.com";

// Boolean naming
let isActive = true;
let hasPermission = false;
let canEdit = true;

// Meaningful names
let email = "test@example.com";   // Good
let e = "test@example.com";       // Avoid single letters (except loops)
let x1 = "test@example.com";      // Avoid meaningless names

console.log("  totalPrice:", totalPrice);
console.log("  getUserData():", getUserData());
console.log("  MAX_SIZE:", MAX_SIZE);
console.log("  isActive:", isActive);

console.log("\n=== All examples completed successfully! ===");
