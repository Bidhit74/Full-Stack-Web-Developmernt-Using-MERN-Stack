//  Understanding how to organize code into modules and how to import/export them is crucial for maintaining clean and manageable code.

// Two types of modules are commonly used in JavaScript: CommonJS and ES6 modules. CommonJS is primarily used in Node.js, while ES6 modules are the standard for modern JavaScript applications.

// CommonJS modules use `require` to import and `module.exports` to export, while ES6 modules use `import` and `export` keywords.

let { name, age } = require("./script2_0"); // Importing the module from script2.js // Importing the module from script2.js
console.log(`My name ${name} and age ${age}.`);
