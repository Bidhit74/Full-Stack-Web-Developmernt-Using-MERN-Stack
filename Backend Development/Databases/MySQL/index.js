import dotenv from "dotenv";
import express from "express";
import path from "path";
import dbData from "./utils/db.js";
import { log } from "console";
import methodOverride from "method-override";

const app = express();
dotenv.config();

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // json format data send

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
app.get("/users/:id/edit", async (req, res) => {
  const { id } = req.params;
  let query = `SELECT * FROM user WHERE id='${id}'`;
  const data = await dbData(query);
  if (!data.code) {
    res.render("userEdit.ejs", { user: data[0] });
  } else {
    log(`Error: ${data.sqlMessage}`);
    let messages = "User not found!!!";
    res.render("error.ejs", { messages });
  }
});

app.patch("/users/:id", async (req, res) => {
  const { id } = req.params;
  let query = `SELECT * FROM user WHERE id='${id}'`;
  const {
    username: newUserName,
    email: newEmail,
    password: newPass,
  } = req.body;
  const user = await dbData(query);
  if (user[0].password === newPass) {
    let query2 = `UPDATE user SET username='${newUserName}' email='${newEmail}' WHERE id='${id}'`;
    dbData(query2);
    res.redirect("/users");
  } else {
    res.send("Worng Password");
  }
});

app.listen(process.env.APP_PORT, () => {
  console.log(`App listen Port:${process.env.APP_PORT} `);
});
