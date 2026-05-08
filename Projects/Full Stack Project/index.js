import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/dbConnect.js";

// import all routes
import userRoutes from "./routes/user.routes.js";

dotenv.config();
const app = express();

// Use karo production me || kuyki kabhi kabhi localhost me work nahi karta hai
app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// express.json() → JSON data handle karta hai, express.urlencoded() → form data handle karta hai, Dono milke req.body ko usable banate hain
//Agar extended: false hota → simple data only ❌ nested support nahi
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Connect to mongodb
db();

// user routes
app.use("/api/v1/users/", userRoutes);
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
