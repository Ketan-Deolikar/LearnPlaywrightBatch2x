/*
  JavaScript Number Types & Literals - Complete Lab
  ==================================================

  JavaScript has only ONE numeric type: Number
  It is always a 64-bit floating-point (IEEE 754 double-precision).
  There is NO separate integer type in JS.

  Additionally, BigInt was introduced for arbitrarily large integers.
*/

console.log("=== 1. Integers ===");
let positiveInt = 42;
let negativeInt = -25;
let zero = 0;
console.log("Positive:", positiveInt, "Type:", typeof positiveInt);
console.log("Negative:", negativeInt, "Type:", typeof negativeInt);
console.log("Zero:", zero, "Type:", typeof zero);

console.log("\n=== 2. Floating-Point (Decimals) ===");
let price = 19.99;
let negativeFloat = -3.14;
let withoutLeadingZero = 0.5; // .5 is also valid but avoid for readability
console.log("Price:", price);
console.log("Negative float:", negativeFloat);
console.log("Half:", withoutLeadingZero);

console.log("\n=== 3. Scientific (Exponential) Notation ===");
let million = 1e6;      // 1 * 10^6
let tiny = 1e-6;        // 1 * 10^-6
let atoms = 2.5e10;
console.log("1e6 =", million);
console.log("1e-6 =", tiny);
console.log("2.5e10 =", atoms);

console.log("\n=== 4. Hexadecimal (Base 16) ===");
let hexColor = 0xff;    // 255 in decimal
let hexSmall = 0x2a;    // 42 in decimal
console.log("0xff =", hexColor);
console.log("0x2a =", hexSmall);

console.log("\n=== 5. Octal (Base 8) ===");
let octal = 0o52;       // 42 in decimal
let filePermission = 0o755;
console.log("0o52 =", octal);
console.log("0o755 =", filePermission);

console.log("\n=== 6. Binary (Base 2) ===");
let binary = 0b101010;  // 42 in decimal
let flags = 0b11110000;
console.log("0b101010 =", binary);
console.log("0b11110000 =", flags);

console.log("\n=== 7. Separators (Numeric Literals with Underscores) ===");
let readableMillion = 1_000_000;
let readableBinary = 0b1010_1111;
console.log("1_000_000 =", readableMillion);
console.log("0b1010_1111 =", readableBinary);

console.log("\n=== 8. Special Number Values ===");

// Infinity
console.log("Infinity:", Infinity);
console.log("-Infinity:", -Infinity);
console.log("1 / 0 =", 1 / 0);
console.log("-1 / 0 =", -1 / 0);

// NaN - Not a Number
console.log("NaN:", NaN);
console.log("0 / 0 =", 0 / 0);
console.log("'hello' * 5 =", "hello" * 5);
console.log("typeof NaN =", typeof NaN); // Still "number"!

console.log("\n=== 9. Number Constants ===");
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);
console.log("Number.MIN_VALUE:", Number.MIN_VALUE); // Smallest positive number
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("Number.EPSILON:", Number.EPSILON);
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);

console.log("\n=== 10. BigInt (For Very Large Integers) ===");
// BigInt is a SEPARATE type from Number
let hugeNumber = 9007199254740993n; // Beyond safe integer limit
let anotherBig = BigInt(12345678901234567890);
console.log("BigInt:", hugeNumber);
console.log("typeof BigInt:", typeof hugeNumber);
console.log("Another BigInt:", anotherBig);

// BigInt arithmetic
console.log("9007199254740993n + 1n =", hugeNumber + 1n);

console.log("\n=== 11. Important Gotchas ===");

// Floating point precision
console.log("0.1 + 0.2 =", 0.1 + 0.2); // Not exactly 0.3!
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3); // false

// Safe integer check
console.log("Is 9007199254740991 safe?", Number.isSafeInteger(9007199254740991));
console.log("Is 9007199254740992 safe?", Number.isSafeInteger(9007199254740992));

// Parsing strings to numbers
console.log("parseInt('42'):", parseInt("42"));
console.log("parseFloat('3.14'):", parseFloat("3.14"));
console.log("parseInt('ff', 16):", parseInt("ff", 16));
console.log("Number('99'):", Number("99"));

console.log("\n=== Summary ===");
console.log("• JavaScript has ONE Number type (64-bit float)");
console.log("• Supports integers, decimals, scientific, hex, octal, binary notation");
console.log("• Special values: Infinity, -Infinity, NaN");
console.log("• BigInt is a separate type for arbitrarily large integers");
console.log("• Be careful with floating-point precision!");
