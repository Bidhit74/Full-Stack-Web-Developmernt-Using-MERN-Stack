import dotenv from "dotenv";
import App from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();
const PORT = process.env.PORT || 8000;

const startServer = async () => {
  try {
    // Connect Database
    await connectDB();

    const app = App();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server failed:", error);
    process.exit(1);
  }
};

startServer();
