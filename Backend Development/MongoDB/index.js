const express = require("express");
const app = express();
const mongooseConnection = require("./config/mongoose");
const userModel = require("./models/user");
const debuglog = require("debug")("development:indexJs");
app.get("/", (req, res) => {
    res.send("Hello MongoDB");
});

app.get("/addUser", async (req, res) => {
    let user = await userModel.create({
        username: "Bidhit7",
        name: "Bidhit Chaudhary",
        email: "bidhit74@gmail.com",
        password: "bidhit12345",
    });
    debuglog("User Created");
    res.send(user);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
