import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use((req, res) => {
    res.status(404).send("Not Found");
});

app.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});
