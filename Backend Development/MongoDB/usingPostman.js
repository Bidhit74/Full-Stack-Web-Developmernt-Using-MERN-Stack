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
app.get("/getUsers/:username", async (req, res) => {
    let user = await userModel.findOne({ username: req.params.username });
    debuglog(" This Username Readed: ", req.params.username);
    res.send(user);
});

// Update a user
app.get("/updateUser/:username", async (req, res) => {
    let { name, username, email } = req.body;
    let user = await userModel.findOneAndUpdate(
        { username: req.params.username },
        { name, username, email }
    );
    debuglog("User Updated");
    res.send(user);
});

// Delete a user
app.get("/deleteUser/:username", async (req, res) => {
    let deleteUser = await userModel.findOneAndDelete({
        username: req.params.username,
    });
    debuglog("User Deleted: ", req.params.username);
    res.send(deleteUser);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
