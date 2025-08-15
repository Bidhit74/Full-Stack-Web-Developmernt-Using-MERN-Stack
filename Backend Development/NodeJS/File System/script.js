const fs = require("fs");

// write, read, update, append, copy, delete files etc.

// Create a new file and write some content to it

fs.writeFile("example.txt", "Bidhit Chaudhary Coding World!!!", function (err) {
    if (err) {
        return console.error("Error writing file:", err);
    }
    console.log("File created successfully!");
});
