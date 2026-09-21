import express from "express";
import session from "express-session";
import flash from "connect-flash";
import path from "path";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));

const sessionOptions = {
    secret: "mySecret",
    resave: false,
    saveUninitialized: false,
};
app.use(session(sessionOptions));
app.use(flash());

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
    // req.flash(key, message)
    req.flash("success", "Username register successfully.");
    res.send(`Register username = ${name}`);
});

app.get("/user", (req, res) => {
    const username = req.session.username || "Bidhit Chaudhary";
    // console.log(req.session);
    res.render("index.ejs", { username, message: req.flash("success") });
});

app.listen(3000, () => {
    console.log("Server start on - 3000");
});
