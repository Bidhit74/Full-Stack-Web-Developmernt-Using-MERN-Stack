import { faker } from "@faker-js/faker";
import mysql from "mysql2/promise";
import dotevn from "dotenv";

dotevn.config();

// Create the connection to database
const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: process.env.DB_NAME,
  password: process.env.MY_SQL_PASS,
});

// let query = "SHOW TABLES";
// Using placeholders = "?"
// Single data add
// let query = "INSERT INTO user(id,username,email,password) VALUES(?,?,?,?)";
// let user = [101, "bidhit1", "bkc321@gmail.com", "1234"];

// Multiple data add
let query = "INSERT INTO user(id,username,email,password) VALUES ?";
let user = [
  [102, "bidhit2", "bkc3214@gmail.com", "12345"],
  [103, "bidhit3", "bkc32414@gmail.com", "123445"],
  [104, "bidhit4", "bkc32124@gmail.com", "512345"],
];

try {
  const [results, fields] = await connection.query(query, [user]);
  console.log(results); // results contains rows returned by server
  // console.log(fields); // fields contains extra meta data about results, if available
} catch (err) {
  console.log(err);
}

// Close the connection
await connection.end();

const getRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};
