import express from "express";
// const app = expresssss(); // Top-level Error: 'expresssss' is not defined ---- app crashed - waiting for file changes before starting
const app = express();

app.get("/", (req, res, next) => {
    try {
        // res.send(Hello); //Bottom level Error - ReferenceError --> App not crashed
        res.send("Hello World");
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
});

// Error Handling use Always at the end
app.use((err, req, res, next) => {
    res.status(500).send(err.message || "Internal Server Error");
});

app.use((req, res) => {
    res.status(404).send("Not Found");
});
app.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});
