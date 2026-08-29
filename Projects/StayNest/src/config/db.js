import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/${process.env.DB_NAME}`);
    console.log("MongoDB Connected Successfully");
  } catch {
    (err) => {
      console.log("DB connection failed:", err.message);
      process.exit(1);
    };
  }
};

export default connectDB;
