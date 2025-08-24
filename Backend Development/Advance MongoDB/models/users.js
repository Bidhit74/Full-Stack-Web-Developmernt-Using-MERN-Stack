const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true }, // Added username field with unique username
    name: { type: String, required: true }, // Name is required
    email: { type: String, required: true, unique: true }, // Email is required and must be unique
    password: { type: String, required: true }, // Password is required
    age: String, // Age is optional
    isMarried: Boolean, // isMarried is optional
});

module.exports = mongoose.model("User", userSchema);
