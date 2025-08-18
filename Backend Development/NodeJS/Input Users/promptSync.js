const prompt = require("prompt-sync")({ sigint: true }); // Importing the prompt-sync module for synchronous user input

// Take input
let name = prompt("Enter your name: ");
let age = prompt("Enter your age: ");

// Display the input
console.log(`Hello ${name}, you are ${age} years old.`);
