// import { faker } from "@faker-js/faker";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// Create the connection to database
const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: process.env.DB_NAME,
  password: process.env.MY_SQL_PASS,
});

const dbData = async (query) => {
  try {
    const [results] = await connection.query(query);
    return results;
  } catch (err) {
    return err;
  }
};

export default dbData;

// connection.end();
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
