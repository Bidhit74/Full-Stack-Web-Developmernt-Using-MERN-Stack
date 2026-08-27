import express from "express";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./utils/db.js";
import { Chat } from "./models/chat.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 4000;

// Using EJS
app.set("viwe engine", "ejs");
app.set("viwes", path.join(import.meta.dirname, "/views"));

// use public folder
app.use(express.static(path.join(import.meta.dirname, "public")));

// DB Calling
await connectDB();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  if (chats) {
    res.render("showChat.ejs", { chats });
  } else {
    res.send("Somethings Wrong!!!");
  }
});

app.listen(port, () => {
  console.log(`App Runing on Port:${port}`);
});
