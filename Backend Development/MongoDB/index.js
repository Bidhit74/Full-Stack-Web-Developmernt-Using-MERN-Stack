const express = require("express");
const app = express();
const mongooseConnection = require("./config/mongoose");
app.get("/", (req, res) => {
    res.send("Hello MongoDB");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
