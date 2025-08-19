import express from "express";
const app = express();
import expressSession from "express-session";
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
app.get("/about", (req, res) => {
    res.send("About Page");
});

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

app.use((req, res) => {
    res.status(404).send("404 Not Found");
});
app.listen(3001);
