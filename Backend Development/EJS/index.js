import express from "express";
import path from "path";
import instaData from "./utils/data.json" with { type: "json" };

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
  const data = instaData[username];
  if (data) {
    res.render("instagram.ejs", { data });
  } else {
    res.render("error.ejs", { username });
  }
});

app.listen(port, () => {
  console.log(`Listinig on port: ${port}`);
});
