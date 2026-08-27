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

// Encoding from post request
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // json format data send

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

// *** new chat ***
app.get("/chats/new", (req, res) => {
  res.render("create-chat.ejs");
});

// *** Create Chat ***
app.post("/chats", async (req, res) => {
  const { from, message, to } = req.body;
  if (!from || !message || !to) {
    return res.status(400).render("error.ejs", {
      message: "Something is wrong!",
    });
  }
  try {
    const chat = new Chat({
      from,
      message,
      to,
      created_at: new Date(),
    });
    await chat.save();
    res.redirect("/chats");
  } catch (err) {
    console.error(err);
    res.status(500).render("error.ejs", {
      message: "Something went wrong!",
    });
  }
});

// *** Edit Chat ***
app.get("/chats/:id/edit", async (req, res) => {
  try {
    const { id } = req.params;
    const chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
  } catch (err) {
    console.log(err);
    res.status(500).render("error.ejs", {
      message: "Something went wrong!",
    });
  }
});

app.listen(port, () => {
  console.log(`App Runing on Port:${port}`);
});
