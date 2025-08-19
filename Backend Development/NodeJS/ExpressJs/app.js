import express from "express";
const app = express();

// Middleware functions
app.use((req, res, next) => {
    console.log("Middleware function executed");
    // Call the next middleware function in the stack
    next();
});

// Syntax for defining routes
// app.get("/route", (req, res) => { ... });
// app.get("/route", handlerFunction);
app.get("/", (req, res) => {
    // middleware function
    // Middleware function
    res.send("Hello World from Express!");
});
app.get("/about", (req, res) => {
    res.send("About Page");
});
// Always return a 404 for any other route
// This should be the last route defined
// Always place this at the end of your route definitions
app.use((req, res) => {
    res.status(404).send("404 Not Found");
});
app.listen(3001);
