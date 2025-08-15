const fs = require("fs");

// Create a new folder
/*
fs.mkdir("newFolder", (err) => {
    if (err) {
        return console.error("Error creating folder:", err);
    }
    console.log("Folder created successfully!");
});
*/

// Read the contents of a folder
fs.readdir("newFolder", { withFileTypes: true }, (err, files) => {
    if (err) {
        return console.error("Error reading folder:", err);
    }
    console.log("Contents of the folder:", files);
});
