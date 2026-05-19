// ============================================================
// 38_Confusing_Comparison.js
// Exploring tricky == vs === cases in JavaScript
// ============================================================

console.log("=== 1. STRING vs STRING (no coercion) ===");
console.log('"" == "0"            =>', "" == "0");              // false
console.log('"0" == "0"            =>', "0" == "0");              // true
console.log('"hello" == "hello"    =>', "hello" == "hello");      // true
console.log('"hello" == "Hello"    =>', "hello" == "Hello");      // false (case-sensitive)

console.log("\n=== 2. STRING vs NUMBER (coercion happens) ===");
console.log('"" == 0              =>', "" == 0);                // true  (empty string -> 0)
console.log('"0" == 0             =>', "0" == 0);               // true  (string "0" -> 0)
console.log('" 0 " == 0           =>', " 0 " == 0);             // true  (trimmed -> 0)
console.log('"42" == 42           =>', "42" == 42);             // true
console.log('"42px" == 42         =>', "42px" == 42);           // false (NaN)

console.log("\n=== 3. BOOLEAN comparisons (coercion to number) ===");
console.log('false == 0           =>', false == 0);             // true  (false -> 0)
console.log('true == 1            =>', true == 1);              // true  (true -> 1)
console.log('true == 2            =>', true == 2);              // false (true -> 1)
console.log('"true" == true       =>', "true" == true);         // false ("true" -> NaN)
console.log('"1" == true          =>', "1" == true);            // true  ("1" -> 1)
console.log('"0" == false         =>', "0" == false);           // true  ("0" -> 0)

console.log("\n=== 4. NULL and UNDEFINED (special rule) ===");
console.log('null == undefined    =>', null == undefined);      // true  (special rule)
console.log('null == null          =>', null == null);           // true
console.log('undefined == undefined=>', undefined == undefined); // true
console.log('null == 0             =>', null == 0);              // false
console.log('undefined == 0        =>', undefined == 0);         // false
console.log('null == ""            =>', null == "");             // false

console.log("\n=== 5. OBJECT vs PRIMITIVE (object coerced) ===");
console.log('[1,2] == "1,2"        =>', [1,2] == "1,2");         // true  (array -> string)
console.log('[] == ""              =>', [] == "");               // true  (array -> "")
console.log('[] == 0               =>', [] == 0);                // true  (array -> "" -> 0)
console.log('[0] == 0              =>', [0] == 0);               // true  (array -> "0" -> 0)
console.log('({}) == "[object Object]" =>', ({}) == "[object Object]"); // true

console.log("\n=== 6. THE REALLY CONFUSING ONES ===");
console.log('[] == false           =>', [] == false);            // true
console.log('[] == ![]             =>', [] == ![]);              // true  (![] is false)
console.log('[0] == false          =>', [0] == false);           // true
console.log('"0" == false          =>', "0" == false);           // true
console.log('0 == false            =>', 0 == false);             // true
console.log('"" == false           =>', "" == false);            // true

console.log("\n=== 7. STRICT EQUALITY (===) - NO COERCION ===");
console.log('"" === "0"            =>', "" === "0");             // false
console.log('"" === 0              =>', "" === 0);               // false
console.log('"0" === 0             =>', "0" === 0);              // false
console.log('false === 0           =>', false === 0);            // false
console.log('null === undefined    =>', null === undefined);     // false
console.log('[] === false          =>', [] === false);           // false
console.log('[] === []             =>', [] === []);              // false (different references)
console.log('{} === {}             =>', {} === {});              // false (different references)

console.log("\n=== 8. NaN (the weird one) ===");
console.log('NaN == NaN            =>', NaN == NaN);             // false
console.log('NaN === NaN           =>', NaN === NaN);            // false
console.log('isNaN(NaN)            =>', isNaN(NaN));             // true
console.log('Number.isNaN(NaN)     =>', Number.isNaN(NaN));      // true

console.log("\n=== 9. REFERENCE EQUALITY ===");
let a = [1, 2, 3];
let b = a;
let c = [1, 2, 3];
console.log('a == b                =>', a == b);                 // true  (same reference)
console.log('a === b               =>', a === b);                // true  (same reference)
console.log('a == c                =>', a == c);                 // false (different references)
console.log('a === c               =>', a === c);                // false (different references)

console.log("\n=== 10. RECOMMENDATION ===");
console.log("Use === (strict equality) always to avoid coercion surprises.");
console.log("Use == only when you explicitly want type coercion (rare).");

// ============================================================
// Summary Table
// ============================================================
/*
| Expression          | ==      | ===     | Why?                                    |
|---------------------|---------|---------|-----------------------------------------|
| "" == "0"           | false   | false   | Different strings                       |
| "" == 0             | true    | false   | "" coerces to 0                         |
| "0" == 0            | true    | false   | "0" coerces to 0                        |
| false == 0          | true    | false   | false coerces to 0                      |
| null == undefined   | true    | false   | Special rule                            |
| [] == ""            | true    | false   | [] coerces to ""                        |
| [] == false         | true    | false   | [] -> "" -> 0 == false                  |
| NaN == NaN          | false   | false   | NaN is never equal to anything          |
| [] == []            | false   | false   | Different object references             |
| {} == {}            | false   | false   | Different object references             |
*/
