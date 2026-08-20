import dotenv from "dotenv";
import express from "express";
import path from "path";
import dbData from "./utils/db.js";
import { log } from "console";

const app = express();
dotenv.config();

// Using EJS
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "/views"));

app.get("/", async (req, res) => {
  let query = "SELECT count(*) FROM user";
  const count = await dbData(query);
  if (!count.code) {
    res.render("home.ejs", { count: count[0]["count(*)"] });
  } else {
    log(`Error: ${count.sqlMessage}`);
    let messages = "Something went wrong!!!";
    res.render("error.ejs", { messages });
  }
});

app.get("/users", async (req, res) => {
  let query = "SELECT * FROM user";
  const data = await dbData(query);
  if (!data.code) {
    res.render("users.ejs", { data });
  } else {
    log(`Error: ${data.sqlMessage}`);
    let messages = "User not found!!!";
    res.render("error.ejs", { messages });
  }
});

app.listen(process.env.APP_PORT, () => {
  console.log(`App listen Port:${process.env.APP_PORT} `);
});
