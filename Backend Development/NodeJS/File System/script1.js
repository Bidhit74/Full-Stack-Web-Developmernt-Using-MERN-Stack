const fs = require("fs");

// Create a new folder
fs.mkdir("newFolder", (err) => {
    if (err) {
        return console.error("Error creating folder:", err);
    }
    console.log("Folder created successfully!");
});
