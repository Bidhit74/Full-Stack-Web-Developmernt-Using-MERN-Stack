const yargs = require("yargs");

const { hideBin } = require("yargs/helpers"); // Importing hideBin to handle command line arguments

/*
const argv = yargs(hideBin(process.argv)) // Initialize yargs with the command line arguments
    .options({
        // Define the options for the command line arguments
        name: {
            alias: "n", // Short alias for the name option
            type: "string", // Type of the name option
            demandOption: true, // This option is required
            describe: "Name of the user", // Description of the name option
        },
        age: {
            type: "number",
            demandOption: true,
            describe: "Age of the user",
        },
    })
    .parse(); // Parse the command line arguments

console.log(`User Name: ${argv.name}`);
console.log(`User Age: ${argv.age}`);
*/

// Configure commands
yargs(hideBin(process.argv))
    .command({
        command: "add",
        describe: "Add two numbers",
        builder: {
            num1: {
                describe: "First number",
                demandOption: true,
                type: "number",
            },
            num2: {
                describe: "Second number",
                demandOption: true,
                type: "number",
            },
        },
        handler(argv) {
            console.log("Result:", argv.num1 + argv.num2);
        },
    })
    .parse();
