import express from "express";
import session from "express-session";

const app = express();
const sessionOptions = {
    secret: "mySecret",
    resave: false,
    saveUninitialized: false,
};
app.use(session(sessionOptions));

app.get("/", (req, res) => {
    res.send("Hellow Bidhit Chaudhary");
});

app.get("/request", (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`Request Count = ${req.session.count}`);
});

app.get("/register", (req, res) => {
    const { name = "Annonymous" } = req.query;
    req.session.username = name;
    res.send(`Register username = ${name}`);
});

app.get("/user", (req, res) => {
    const username = req.session.username;
    // console.log(req.session);
    res.send(`Hello Mr - ${username}`);
});

app.listen(3000, () => {
    console.log("Server start on - 3000");
});
