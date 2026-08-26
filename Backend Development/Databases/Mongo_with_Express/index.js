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

// Connect Databases
await connectDB();
//Create Collection
const chat1 = new Chat({
  from: "Bidhit",
  to: "Priya",
  message: "Hellow Priya.",
  created_at: new Date(),
});

// to save DB
chat1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/", (req, res) => {
  res.send("Hellow Bidhit Chaudhary");
});

app.listen(port, () => {
  console.log(`App Runing on Port:${port}`);
});
