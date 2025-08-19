import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Bidhit Chaudhary Coding Home Page");
});

// Dynamic route handling
app.get("/user/:username", (req, res) => {
    // Extracting username from the URL
    const username = req.params.username; // Accessing the username parameter
    res.send(`Welcome to the profile of ${username}`);
});

// multiple dynamic routes
app.get("/author/:authorName/:age", (req, res) => {
    const { authorName, age } = req.params; // Destructuring to get authorName and age
    res.send(`Author: ${authorName}, Age: ${age}`);
});
app.use((req, res) => {
    // This is a catch-all route for handling 404 errors
    res.status(404).send("404 Not Found");
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
