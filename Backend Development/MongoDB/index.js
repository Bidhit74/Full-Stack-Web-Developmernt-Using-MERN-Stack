const express = require("express");
const app = express();
const mongooseConnection = require("./config/mongoose");
const userModel = require("./models/user");
const debuglog = require("debug")("development:indexJs");
app.get("/", (req, res) => {
    res.send("Hello MongoDB");
});

app.get("/create", async (req, res) => {
    let user = await userModel.create({
        username: "Bidhit",
        name: "Bidhit Chaudhary",
        email: "bidhit7@gmail.com",
        password: "bidhit123",
    });
    debuglog("User Created");
    res.send(user);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
