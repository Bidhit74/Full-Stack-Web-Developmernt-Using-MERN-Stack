import express from "express";
import path from "path";
import { posts } from "./utils/postsData.js";

const app = express();
const port = 8000;

// post request data access karne ke liye midleware ka use
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // json format data send

// Use EJS
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "/views"));

// use public folder
app.use(express.static(path.join(import.meta.dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello Bidhit Chaudhary");
});

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.listen(port, () => {
  console.log(`App Loading on port: ${port}`);
});
