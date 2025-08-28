const express = require("express");
const app = express();
const debuglog = require("debug")("development:indexJs");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello Khatabook");
});

app.listen(3000, () => {
    debuglog("Server is running on http://localhost:3000");
});
