const express = require("express");
const app = express();
const debuglog = require("debug")("development:indexJs");

app.get("/", (req, res) => {
    res.send("Hello Khatabook");
});

app.listen(3000, () => {
    debuglog("Server is running on http://localhost:3000");
});
