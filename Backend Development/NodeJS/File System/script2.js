const fs = require("fs");

// Writing to a file
fs.writeFileSync("test.txt", "Hello Sync!");

// Reading the file
const data = fs.readFileSync("test.txt", "utf8");
console.log("File Content:", data);

// Appending data
fs.appendFileSync("test.txt", "\nMore data...");

// Renaming file
fs.renameSync("test.txt", "newTest.txt");

// Deleting file
fs.unlinkSync("newTest.txt");
