import express from "express";
const app = express();
import expressSession from "express-session";
import flass from "connect-flash";
import cors from "cors";
app.use(cors()); // Enable CORS for all routes
app.use((req, res, next) => {
    console.log("Middleware function executed");
    next();
});

app.use(
    expressSession({
        secret: "mySecret",
        resave: false,
        saveUninitialized: false,
    })
);

app.get("/", (req, res) => {
    res.send("Hello World from Express!");
});

// Single route with CORS enabled
app.get("/cors-enabled", cors(), (req, res) => {
    // This route has CORS enabled
    res.send("CORS is enabled for this route");
});
app.get("/about", (req, res) => {
    res.send("About Page");
});

// express-session example
app.get("/create", (req, res, next) => {
    req.session.user = "Bidhit Chaudhary"; // Example of setting a session variable
    // Server restart session will be lost
    res.send("Create Page");
});

app.get("/read", (req, res) => {
    if (req.session.user) {
        res.send(`User: ${req.session.user}`);
    } else {
        res.send("No user session found");
    }
});

// connect-flash example
app.use(flass());
app.get("/flash", (req, res) => {
    req.flash("info", "Flash message set!"); // Set a flash message
    console.log("Flash message created. Redirecting to show it.");
    res.redirect("/show-flash");
});

app.get("/show-flash", (req, res) => {
    const messages = req.flash("info"); // Retrieve flash messages
    console.log(messages);
    if (messages.length > 0) {
        res.send(`Flash message: ${messages[0]}`);
    } else {
        res.send("No flash messages found");
    }
});
app.use((req, res) => {
    res.status(404).send("404 Not Found");
});
app.listen(3001);
