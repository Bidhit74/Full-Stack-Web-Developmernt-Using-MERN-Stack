// import { faker } from "@faker-js/faker";
import mysql from "mysql2/promise";
import dotevn from "dotenv";
import express from "express";
import path from "path";

const app = express();
dotevn.config();

// Using EJS
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "/views"));

// Create the connection to database
const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: process.env.DB_NAME,
  password: process.env.MY_SQL_PASS,
});

// let query = "SELECT * FROM user";
// Using placeholders = "?"
// Single data add
// let query = "INSERT INTO user(id,username,email,password) VALUES(?,?,?,?)";
// let user = [101, "bidhit1", "bkc321@gmail.com", "1234"];

// const getRandomUser = () => {
//   return [
//     faker.string.uuid(),
//     faker.internet.username(),
//     faker.internet.email(),
//     faker.internet.password(),
//   ];
// };

// Bulk data add
// let query = "INSERT INTO user(id,username,email,password) VALUES ?";
// let users = [];

// Add Random 50 users
// for (let i = 1; i <= 50; i++) {
//   users.push(getRandomUser());
// }

app.get("/", async (req, res) => {
  let query = "SELECT * FROM user";
  try {
    const [results] = await connection.query(query);
    res.render("home.ejs", { data: results });
  } catch (err) {
    console.log(err);
    res.send("Something is wrong");
  }
});

app.listen(process.env.APP_PORT, () => {
  console.log(`App listen Port:${process.env.APP_PORT} `);
});
