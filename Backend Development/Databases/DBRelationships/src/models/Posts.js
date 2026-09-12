import { Schema, model } from "mongoose";
import connectDB from "../config/db.js";

connectDB();

const userSchema = new Schema({
    username: String,
    email: String,
});
const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

const User = model("User", userSchema);
const Post = model("Post", postSchema);

const addUserWithPost = async () => {
    const user1 = new User({
        username: "Bidhit_Kumar",
        email: "bidhitkumar@gmail.com",
    });

    const post1 = new Post({
        content: "Hello, how are you ?",
        likes: 20,
    });
    post1.user = user1;
    await user1.save();
    await post1.save();
};

// addUserWithPost();

const addPost = async () => {
    const user = await User.findOne({ username: "Bidhit_Kumar" });
    const post2 = new Post({
        content: "Hello, Bidhit Jee",
        likes: 25,
        user: user,
    });
    const res = await post2.save();
    console.log(res);
};

// addPost();

const getData = async () => {
    const res = await Post.find();
    const reswithUserData = await Post.find().populate("user");
    const reswithOnlyUsernane = await Post.find().populate("user", "username");
    console.log(res);
    console.log(reswithUserData);
    console.log(reswithOnlyUsernane);
};
getData();
