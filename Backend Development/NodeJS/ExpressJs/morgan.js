import express from "express";
const app = express();
import morgan from "morgan";

// app.use(morgan("dev")); // Logging middleware
// app.use(morgan("combined")); // Use combined format for detailed logging
// app.use(morgan("tiny")); // Use tiny format for minimal logging
// app.use(morgan("common")); // Use common format for standard logging
app.use(morgan("short")); // Use short format for concise logging

app.get("/", (req, res) => {
    res.send("Bidhit Chaudhary Coding Home Page");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
