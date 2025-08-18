// console.log(process); // This will log the process object to the console, which contains information about the current Node.js process.

// console.log(process.argv); // This will log the command line arguments passed to the Node.js process.

// console.log(process.argv[2]); // This will log the third command line argument passed to the Node.js process, which is typically the first user-defined argument.

const nameB = process.argv[2];
const age = process.argv[3];
console.log(`Hello ${nameB}, you are ${age} years old.`);

// Command to run this script in the terminal: node app.js Bidhit 23
// Output: Hello Bidhit, you are 23 years old.
