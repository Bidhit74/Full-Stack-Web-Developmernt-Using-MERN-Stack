import express from "express";
import path from "path";

const app = express();
const port = 3030;

// Using EJS
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "/views")); // letest way

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/roll", (req, res) => {
  // Like DB data comminig
  let rollD = Math.floor(Math.random() * 6) + 1; // gave 1 to 6
  res.render("roll_dice.ejs", { rollD });
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  let followers = ["Binit", "Navnit", "Lakshmi", "Ritu", "Madhavi"];
  res.render("instagram.ejs", { username, followers });
});

app.listen(port, () => {
  console.log(`Listinig on port: ${port}`);
});
