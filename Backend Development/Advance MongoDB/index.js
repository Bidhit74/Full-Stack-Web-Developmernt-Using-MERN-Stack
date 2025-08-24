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

// Get All Users from DB with conditions : . Comparison Operators($eq, $ne, $gt, $gte, $lt, $lte)
// Array Operators : $in, $nin
app.get("/allUsers", async (req, res) => {
    try {
        // const users = await userModel.find({ age: 28 });
        // const users = await userModel.find({ age: { $eq: 28 } }); // age equal to 28
        // const users = await userModel.find({ age: { $ne: 28 } }); // age not equal to 28
        // const users = await userModel.find({ age: { $gt: 30 } }); // age greater than 30
        // const users = await userModel.find({ age: { $gte: 30 } }); // age greater than or equal to 30
        // const users = await userModel.find({ age: { $lt: 30 } }); // age less than 30
        // const users = await userModel.find({ age: { $lte: 30 } }); // age less than or equal to 30

        // const users = await userModel.find({ age: { $in: [25, 28, 30] } }); // age in the array [25, 28, 30]
        const users = await userModel.find({ age: { $nin: [25, 28, 30] } }); // age not in the array [25, 28, 30]
        res.status(200).json({
            message: "Users fetched successfully",
            data: users,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching users",
            error: error.message,
        });
    }
});

// Element Operators: $exists, $type : Ye operators check karte hain ki field exist karti hai ya type sahi hai ya nahi.
app.get("/elementOperators", async (req, res) => {
    try {
        // const users = await userModel.find({ address: { $exists: true } }); // address field exists
        const users = await userModel.find({ age: { $type: "string" } }); // age field is of type number
        res.status(200).json({
            message: "Users fetched successfully",
            data: users,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching users",
            error: error.message,
        });
    }
});

// Logical Operators: Logical operators conditions ko combine karne ke liye hote hain. $and, $or, $not, $nor
app.get("/logicalOperators", async (req, res) => {
    try {
        // const users = await userModel.find({
        //     $and: [{ age: { $gt: 25 } }, { age: { $lt: 35 } }],
        // }); // age greater than 25 and less than 35

        // const users = await userModel.find({
        //     $or: [{ age: 25 }, { age: 30 }],
        // }); // age is 25 or 30

        // const users = await userModel.find({
        //     age: { $not: { $gt: 30 } },
        // }); // age not greater than 30

        const users = await userModel.find({
            $nor: [{ age: 25 }, { age: 30 }],
        }); // age is neither 25 nor 30

        res.status(200).json({
            message: "Users fetched successfully",
            data: users,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching users",
            error: error.message,
        });
    }
});
app.listen(3000, () => {
    debuglog("Server is running on port 3000");
});
