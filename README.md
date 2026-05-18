# Learn Playwright Batch 2x

A comprehensive learning repository covering JavaScript fundamentals, identifiers, literals, and development tooling essentials for Playwright automation testing.

## 📁 Repository Structure

```
LearnPlaywrightBatch2x/
├── chapter_01_Basics/                          # JavaScript Basics
│   ├── 01_Basics.js
│   ├── 02_JS.js
│   ├── 03_JS_Verify_Setup.js
│   └── 04_HotCode.js
├── chapter_02_Javascript_Concepts/             # JavaScript Core Concepts
│   └── 05_JS_Basics.js
├── chapter_03_Identifier_Literals/             # Identifiers, Literals & Tools
│   ├── 06_Identifier_Rules.js
│   ├── 07_Identifier_Part2.js
│   ├── 08_Comments.js
│   ├── identifier-rules.js
│   └── VS_Code_keyboard_shortcut_windows.md
└── chapter_04_Javascript_Concepts/             # JavaScript Variables, Scope & Hoisting
    ├── 09_var_let_consts.js
    ├── 10_functions.js
    ├── 11_var_explained.js
    ├── 12_let_people_love.js
    ├── 13_const_explained.js
    ├── 14_var_functionscope.js
    ├── 15_let_scope.js
    ├── 16_Hoisting.js
    └── 17_hoisting_fn.js
```

## 📚 Chapters Overview

### Chapter 01: Basics
Introduction to JavaScript fundamentals, setup verification, and basic concepts.

**Files:**
- `01_Basics.js` - JavaScript basics introduction
- `02_JS.js` - Core JavaScript concepts
- `03_JS_Verify_Setup.js` - Environment setup verification
- `04_HotCode.js` - Quick code examples and snippets

### Chapter 02: JavaScript Concepts
Deeper dive into JavaScript concepts and foundational knowledge.

**Files:**
- `05_JS_Basics.js` - JavaScript basics and fundamentals

### Chapter 03: Identifiers, Literals & Development Tools
Comprehensive coverage of JavaScript naming conventions, identifier rules, literals, comments, and VS Code shortcuts.

**Files:**
- `06_Identifier_Rules.js` - JavaScript identifier naming rules and conventions
- `07_Identifier_Part2.js` - Naming cases (camelCase, snake_case, PascalCase, etc.)
- `08_Comments.js` - JavaScript commenting styles and best practices
- `identifier-rules.js` - Interactive examples of identifier rules
- `VS_Code_keyboard_shortcut_windows.md` - Complete VS Code keyboard shortcuts reference (Windows & Mac)

### Chapter 04: JavaScript Variables, Scope & Hoisting
Deep dive into JavaScript variable declarations, function scope, block scope, and hoisting behavior.

**Files:**
- `09_var_let_consts.js` - Overview of var, let, and const declarations
- `10_functions.js` - JavaScript functions basics
- `11_var_explained.js` - Detailed explanation of `var` behavior
- `12_let_people_love.js` - Detailed explanation of `let`
- `13_const_explained.js` - Detailed explanation of `const`
- `14_var_functionscope.js` - `var` function scope demonstration
- `15_let_scope.js` - `let` block scope demonstration
- `16_Hoisting.js` - Variable hoisting concepts
- `17_hoisting_fn.js` - Hoisting within functions

## 🎯 Topics Covered

### JavaScript Identifiers
- Identifier naming rules
- Valid and invalid identifier examples
- Case sensitivity
- Unicode support
- Reserved keywords

### Naming Conventions
- **camelCase** - Variables and functions
- **snake_case** - Variables and database fields
- **PascalCase** - Classes and constructors
- **SCREAMING_SNAKE_CASE** - Constants
- **Hungarian Notation** - Type prefix notation
- **kebab-case** - HTML/CSS usage (not valid in JS)
- **Train-Case** - HTTP headers

### VS Code Shortcuts
Complete reference guide including:
- General shortcuts (Command Palette, Quick Open)
- File operations (New, Open, Save, Close)
- Editing (Cut, Copy, Paste, Delete, Comments)
- Navigation (Go to Line, File, Symbol, Definition)
- Find & Replace
- Debug shortcuts
- Terminal shortcuts
- Multi-cursor editing
- Refactoring tools

### JavaScript Variables & Scope
- `var`, `let`, and `const` declarations
- Function scope vs block scope
- Variable redeclaration and reassignment
- Loop scope and variable leakage

### Functions
- Function declarations and invocations
- Function scope behavior

### Hoisting
- Variable hoisting with `var`
- Hoisting behavior inside functions
- Temporal Dead Zone (TDZ) awareness with `let` and `const`

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)
- Git installed

### Running JavaScript Files

```bash
# Run a specific JavaScript file
node chapter_01_Basics/01_Basics.js

# Or run any file
node <path-to-file>
```

### VS Code Setup
1. Install [Visual Studio Code](https://code.visualstudio.com/)
2. Open this repository in VS Code
3. Refer to `VS_Code_keyboard_shortcut_windows.md` for shortcuts

## 📝 Best Practices

### Naming Conventions in JavaScript

```javascript
// Variables - camelCase
let userName = "John";
let totalAmount = 100;

// Functions - camelCase
function getUserData() { }
function calculateTotal() { }

// Classes - PascalCase
class UserAccount { }
class ShoppingCart { }

// Constants - SCREAMING_SNAKE_CASE
const MAX_SIZE = 100;
const API_KEY = "your-key-here";

// Boolean variables - Prefix with is/has/can
let isActive = true;
let hasPermission = false;
let canEdit = true;
```

## ⌨️ Useful VS Code Shortcuts

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Command Palette | `Ctrl + Shift + P` | `Cmd + Shift + P` |
| Quick Open | `Ctrl + P` | `Cmd + P` |
| Toggle Terminal | `` Ctrl + ` `` | `` Ctrl + ` `` |
| Find in Files | `Ctrl + Shift + F` | `Cmd + Shift + F` |
| Format Document | `Shift + Alt + F` | `Shift + Option + F` |

For the complete list, see [VS_Code_keyboard_shortcut_windows.md](chapter_03_Identifier_Literals/VS_Code_keyboard_shortcut_windows.md).

## 🤝 Contributing

This is a learning repository. Feel free to:
- Add more examples
- Improve documentation
- Add new chapters
- Fix errors or typos

## 📄 License

This project is for educational purposes.

---

*Happy Learning! 🎓*
