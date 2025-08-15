const fs = require("fs");

// write, read, update, append, copy, delete files etc.

// Create a new file and write some content to it
/*
fs.writeFile("example.txt", "Bidhit Chaudhary Coding World!!!", function (err) {
    if (err) {
        return console.error("Error writing file:", err);
    }
    console.log("File created successfully!");
});
*/

// Read the content of the file
/* 
fs.readFile("example.txt", "utf8", function (err, data) {
    if (err) {
        return console.error("Error reading file:", err);
    }
    console.log("File content:", data); // Buffer data
    // buffer data -- use toString() to convert to string or use 'utf8' encoding
    // console.log("File content as string:", data.toString()); // String data
});
*/

// Append content to the file
/*
fs.appendFile(
    "example.txt",
    "\nNew content added by Bidhit Chaudhry!",
    function (err) {
        if (err) {
            return console.error("Error appending to file:", err);
        }
        console.log("Content appended successfully!");
    }
);
*/

// Rename the file
/*
fs.rename("example.txt", "renamed_example.txt", function (err) {
    if (err) {
        return console.error("Error renaming file:", err);
    }
    console.log("File renamed successfully!");
});
*/

// Delete the file
fs.unlink("example.txt", function (err) {
    if (err) {
        return console.error("Error deleting file:", err);
    }
    console.log("File deleted successfully!");
});
