import express from "express";
// const app = expresssss(); // Top-level Error: 'expresssss' is not defined ---- app crashed - waiting for file changes before starting
const app = express();

app.get("/", (req, res) => {
    // res.send(Hello); //Bottom level Erron - ReferenceError --> App not crashed
    res.send("Hello World");
});

// Error Handling

app.use((req, res) => {
    res.status(404).send("Not Found");
});
app.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});
