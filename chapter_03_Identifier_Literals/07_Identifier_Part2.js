var name = "Pramod";

var firstName = "Pramod";
var lastName = "Dutta";

var first_name = "Amit";

// ============================================================
// DIFFERENT TYPES OF NAMING CASES IN JAVASCRIPT
// ============================================================

// Naming conventions (cases) are patterns for naming variables, functions, 
// classes, and constants. They improve code readability and maintainability.

// --------------------------------------------------
// 1. camelCase
// --------------------------------------------------
// - Starts with a lowercase letter
// - Each subsequent word starts with an uppercase letter
// - Most commonly used in JavaScript for variables and functions
// - Example: firstName, totalAmount, getUserData

var firstName = "Pramod";
var lastName = "Dutta";
var totalAmount = 100;
var isUserActive = true;
var getUserData = function() { return "data"; };

// Use camelCase for:
// - Variables
// - Functions
// - Object properties

// --------------------------------------------------
// 2. snake_case
// --------------------------------------------------
// - All lowercase letters
// - Words separated by underscores (_)
// - Common in Python, but also used in JavaScript
// - Example: first_name, total_amount, is_user_active

var first_name = "Pramod";
var last_name = "Dutta";
var total_amount = 100;
var is_user_active = true;
var get_user_data = function() { return "data"; };

// Use snake_case for:
// - Variables (personal/team preference)
// - Database field names
// - JSON keys (sometimes)

// --------------------------------------------------
// 3. PascalCase (UpperCamelCase)
// --------------------------------------------------
// - Starts with an uppercase letter
// - Each subsequent word starts with an uppercase letter
// - Used for class names and constructor functions
// - Example: FirstName, TotalAmount, UserAccount

var FirstName = "Pramod";
var LastName = "Dutta";
var TotalAmount = 100;
var IsUserActive = true;

class UserAccount {
    constructor(name) {
        this.name = name;
    }
}

function PersonDetails() {
    return { name: "Pramod" };
}

// Use PascalCase for:
// - Classes
// - Constructor functions
// - React components

// --------------------------------------------------
// 4. SCREAMING_SNAKE_CASE (UPPER_SNAKE_CASE / CONSTANT_CASE)
// --------------------------------------------------
// - All uppercase letters
// - Words separated by underscores (_)
// - Used for constants and global configuration values
// - Example: FIRST_NAME, TOTAL_AMOUNT, MAX_SIZE

var FIRST_NAME = "Pramod";
var LAST_NAME = "Dutta";
var TOTAL_AMOUNT = 100;
var MAX_SIZE = 500;
var API_BASE_URL = "https://api.example.com";
var DEFAULT_TIMEOUT = 3000;

// Use SCREAMING_SNAKE_CASE for:
// - Constants (values that never change)
// - Configuration values
// - Environment variables

// --------------------------------------------------
// 5. Hungarian Notation
// --------------------------------------------------
// - Prefix indicates the data type or purpose
// - Not commonly used in modern JavaScript
// - Was popular in older programming languages
// - Example: sFirstName, nTotalAmount, bIsActive

var sFirstName = "Pramod";         // s = string
var nTotalAmount = 100;            // n = number
var bIsActive = true;              // b = boolean
var aNames = ["Pramod", "Amit"];   // a = array
var oUser = { name: "Pramod" };    // o = object
var fCalculate = function() {};    // f = function
var elButton = null;               // el = DOM element

// Hungarian notation prefixes:
// s - string
// n - number
// b - boolean
// a - array
// o - object
// f - function
// el - element
// str - string (alternative)
// int - integer (alternative)
// bool - boolean (alternative)

// --------------------------------------------------
// 6. kebab-case (dash-case / hyphen-case / lisp-case)
// --------------------------------------------------
// - All lowercase letters
// - Words separated by hyphens (-)
// - NOT VALID for JavaScript variable names!
// - JavaScript interprets hyphen as subtraction operator
// - Commonly used in HTML, CSS, and URLs
// - Example: first-name, total-amount, is-user-active

// The following will throw a SyntaxError:
// var first-name = "Pramod";     // ERROR!
// var total-amount = 100;        // ERROR!
// var is-user-active = true;     // ERROR!

// Valid usage in HTML/CSS:
// <div class="user-name"></div>
// <div id="total-amount"></div>
// CSS: .user-name { color: red; }
// URL: https://example.com/blog-post-title

// --------------------------------------------------
// 7. Train-Case (HTTP-Header-Case)
// --------------------------------------------------
// - Similar to kebab-case but with capitalized words
// - Used mainly in HTTP headers
// - Example: Content-Type, X-Custom-Header, Accept-Encoding

// JavaScript HTTP headers example:
// fetch(url, {
//     headers: {
//         "Content-Type": "application/json",
//         "Accept-Language": "en-US"
//     }
// });

// --------------------------------------------------
// 8. flatcase
// --------------------------------------------------
// - All lowercase letters
// - No separators between words
// - Hard to read for multi-word names
// - Example: firstname, totalamount, isuseractive

var firstname = "Pramod";
var totalamount = 100;
var isuseractive = true;

// NOT recommended for multi-word names

// ============================================================
// JAVASCRIPT NAMING CONVENTIONS - BEST PRACTICES
// ============================================================

// 1. Variables - Use camelCase
var userName = "Pramod";
var totalPrice = 99.99;
var isLoggedIn = false;

// 2. Functions - Use camelCase
function getUserName() { return "Pramod"; }
function calculateTotal() { return 100; }
function setUserActive(status) { return status; }

// 3. Classes - Use PascalCase
class UserProfile {}
class ShoppingCart {}
class DatabaseConnection {}

// 4. Constants - Use SCREAMING_SNAKE_CASE
var PI = 3.14159;
var MAX_USERS = 100;
var API_KEY = "abc123xyz";

// 5. Private variables (convention) - Start with underscore
var _privateVariable = "secret";
var _count = 0;

// 6. Boolean variables - Start with is, has, can, should
var isActive = true;
var hasPermission = false;
var canEdit = true;
var shouldRetry = false;

// ============================================================
// SUMMARY TABLE
// ============================================================
//
// | Case                | Example           | Usage in JS          |
// |---------------------|-------------------|----------------------|
// | camelCase           | firstName         | Variables, Functions |
// | snake_case          | first_name        | Variables (optional) |
// | PascalCase          | FirstName         | Classes, Components  |
// | SCREAMING_SNAKE_CASE| FIRST_NAME        | Constants            |
// | Hungarian Notation  | sFirstName        | Legacy code (rare)   |
// | kebab-case          | first-name        | HTML/CSS only (not JS)|
// | Train-Case          | Content-Type      | HTTP headers         |
// | flatcase            | firstname         | Not recommended      |
//
// ============================================================

// Example showing all conventions together:

var COMPANY_NAME = "LearnPlaywright";           // SCREAMING_SNAKE_CASE - constant

class UserManager {                              // PascalCase - class
    constructor() {
        this._userCount = 0;                     // _prefix - private by convention
    }
    
    addNewUser(firstName, last_name) {           // camelCase - method, snake_case - parameter
        this._userCount++;
        var fullName = firstName + " " + last_name;  // camelCase - local variable
        return fullName;
    }
    
    getTotalUsers() {                            // camelCase - method
        return this._userCount;
    }
}

var userManager = new UserManager();
var newUser = userManager.addNewUser("Pramod", "Dutta");
console.log("New user:", newUser);
console.log("Total users:", userManager.getTotalUsers());
