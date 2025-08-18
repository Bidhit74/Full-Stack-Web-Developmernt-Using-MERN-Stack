const readline = require("readline");

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin, // Standard input stream
    output: process.stdout, // Standard output stream
});

// Ask the user for input
// rl.question("Please enter your name: ", (input) => {
//     console.log(`Hello, ${input}!`); // Output the user's input
//     rl.close(); // Close the readline interface
// });

// Multiple Inputs
rl.question("Please enter your name: ", (input) => {
    rl.question("Please enter your age: ", (age) => {
        console.log(`Hello, ${input}! You are ${age} years old.`);
        rl.close();
    });
});
