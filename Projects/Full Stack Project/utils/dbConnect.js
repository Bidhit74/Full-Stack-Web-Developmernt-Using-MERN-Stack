import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = () => {
    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => {
            console.log(`Connected to MongoDb`);
        })
        .catch((error) => {
            console.log(`Failed Connection: ${error.message}`);
        });
};

export default db;
