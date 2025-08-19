import express from "express";
const app = express();
import cookieParser from "cookie-parser"; // Cookie ko read karne ke liye
app.use(cookieParser()); // Middleware to parse cookies

app.get("/", (req, res) => {
    // req = browser se aane wala request
    // res = browser ko bhejne wala response
    console.log(req.params); // req.params is used to access route parameters
    console.log(req.body); // req.body is used to access the body of the request
    console.log(req.query); // req.query is used to access query parameters
    console.log(req.cookies); // req.cookies is used to access cookies sent by the client
    console.log(req.headers); // req.headers is used to access headers sent by the client
    console.log(req.method); // req.method is used to access the HTTP method of the request
    console.log(req.url); // req.url is used to access the URL of the request
    console.log(req.path); // req.path is used to access the path of the request
    console.log(req.ip); // req.ip is used to access the IP address of the client
    console.log(req.hostname); // req.hostname is used to access the hostname of the request
    console.log(req.protocol); // req.protocol is used to access the protocol of the request (http or https)
    console.log(req.secure); // req.secure is used to check if the request is secure (HTTPS)
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

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
