import express from "express";
const app = express();

app.get("/api/testing", (req, res) => {
    res.send("This is a test route.");
});
app.get("/api/testing/devlopment", (req, res) => {
    res.send("This is a test route for development purposes.");
});

app.get("/api/testing/development/userprofile", (req, res) => {
    res.send("This is a test route for user profile in development.");
});

app.use((req, res) => {
    res.status(404).send("Not Found");
});
app.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});
