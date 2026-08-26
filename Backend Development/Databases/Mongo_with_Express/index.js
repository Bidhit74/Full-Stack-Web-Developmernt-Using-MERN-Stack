import express from "express";
import dotenv from "dotenv";
import path from "path";

const app = express();
dotenv.config();

const port = process.env.PORT || 4000;

// Using EJS
app.set("viwe engine", "ejs");
app.set("viwes", path.join(import.meta.dirname, "/views"));

app.get("/", (req, res) => {
  res.send("Hellow Bidhit Chaudhary");
});

app.listen(port, () => {
  console.log(`App Runing on Port:${port}`);
});
