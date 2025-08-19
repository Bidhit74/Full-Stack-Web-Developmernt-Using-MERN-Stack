import express from "express";
const app = express();
import cookieParser from "cookie-parser"; // Cookie ko read karne ke liye
app.use(cookieParser()); // Middleware to parse cookies

app.get("/", (req, res) => {
    res.send("Bidhit Chaudhary Coding Home Page");
});

app.get("/banned", (req, res) => {
    res.cookie("banned", "true", {
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        httpOnly: true, // Prevents client-side access to the cookie
        secure: true, // Ensures the cookie is sent over HTTPS only
    });
    res.send("You are banned from this site");
});

// cookie is set than koi bhi route pe data aayega to wo cookie check karega
app.get("/check-ban", (req, res) => {
    let isBanned = req.cookies.banned;
    if (isBanned) {
        res.send("You are banned from this site");
    } else {
        res.send("You are not banned");
    }
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
