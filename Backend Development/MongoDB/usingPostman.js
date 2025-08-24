const express = require("express");
const app = express();
const mongooseConnection = require("./config/mongoose");
const userModel = require("./models/user");
const debuglog = require("debug")("development:usingPostman");

app.use(express.json()); // to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // to parse URL-encoded bodies

app.get("/", (req, res) => {
    res.send("Hello MongoDB using Postman");
});

app.post("/create", (req, res) => {
    res.send(req.body);
    debuglog("Post request received with postman:", req.body);
});

app.post("/createUser", async (req, res) => {
    let { name, username, email, passward } = req.body;
    let user = await userModel.create({
        name, // field name and variable name are same
        username,
        email,
        password: passward, // field name and variable name are different
    });
    debuglog("User Created", user);
    res.send(user);
});

// User Read
app.get("/getUsers", async (req, res) => {
    let users = await userModel.find();
    debuglog("All users Readed");
    res.send(users);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
