import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hellow Bidhit Chaudhary");
});

app.listen(3000, () => {
    console.log("Server start on - 3000");
});
