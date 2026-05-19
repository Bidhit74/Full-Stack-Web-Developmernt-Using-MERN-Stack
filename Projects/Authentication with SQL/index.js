import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// cookie
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

// Json data lene ke liye
app.use(express.json());
// URL se data lene ke liye
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Test checked",
  });
});

app.listen(port, () => {
  console.log("Beckend is listening at port: ", port);
});
