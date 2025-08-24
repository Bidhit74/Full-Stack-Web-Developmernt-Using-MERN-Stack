const express = require("express");
const app = express();
const debuglog = require("debug")("development:index");
const mongooseConnection = require("./config/mongoose");
const userModel = require("./models/users");
const usersData = require("./usersData");

app.get("/", (req, res) => {
    res.send("Hello World from Advance MongoDB");
});

// Add Multiple Users to DB
app.get("/getUsers", async (req, res) => {
    try {
        const users = await userModel.insertMany(usersData);
        res.status(200).json({
            message: "Users added successfully",
            data: users,
        });
        debuglog("Users added successfully");
    } catch (error) {
        res.status(500).json({
            message: "Error adding users",
            error: error.message,
        });
    }
});

app.listen(3000, () => {
    debuglog("Server is running on port 3000");
});
