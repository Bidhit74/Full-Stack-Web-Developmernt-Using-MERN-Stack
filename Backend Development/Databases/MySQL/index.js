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

try {
  const [results, fields] = await connection.query("SHOW DATABASES");
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
