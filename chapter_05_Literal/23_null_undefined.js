/*
  null vs undefined in JavaScript (Simple Explanation)
  ==================================================

  undefined:
  -----------
  - Means "I don't have a value yet".
  - It is the default value given to a variable that has been declared but not assigned any value.
  - It is automatically assigned by JavaScript.

  null:
  -----
  - Means "I explicitly want this to be empty or have no value".
  - It is intentionally assigned by the programmer to indicate "nothing".
  - It represents the intentional absence of any object value.

  Simple analogy:
  - undefined = An empty box that you forgot to put anything in.
  - null      = An empty box that you intentionally left empty.

  Type difference:
  - typeof undefined  → "undefined"
  - typeof null       → "object"  (This is a known bug in JavaScript, but null is NOT an object)
*/

// Examples

// 1. undefined - variable declared but not assigned
let myVariable;
console.log("Value of myVariable:", myVariable);        // undefined
console.log("Type of myVariable:", typeof myVariable);  // "undefined"

// 2. null - explicitly set to empty/nothing
let myEmptyBox = null;
console.log("Value of myEmptyBox:", myEmptyBox);        // null
console.log("Type of myEmptyBox:", typeof myEmptyBox);  // "object" (JS bug!)

// 3. Function with no return value returns undefined
function doNothing() {
  // no return statement
}
let result = doNothing();
console.log("Result of doNothing():", result);          // undefined

// 4. Accessing a non-existent object property
let person = { name: "Alice" };
console.log("person.age:", person.age);                 // undefined (property does not exist)

// 5. Comparing null and undefined
console.log("null == undefined:", null == undefined);   // true  (loose equality)
console.log("null === undefined:", null === undefined); // false (strict equality, types differ)

// 6. Practical use case for null
let user = null; // we explicitly say there is no user yet
console.log("Initial user:", user);                     // null

user = { id: 1, name: "Bob" }; // later we assign a real user
console.log("Updated user:", user);                     // { id: 1, name: "Bob" }
