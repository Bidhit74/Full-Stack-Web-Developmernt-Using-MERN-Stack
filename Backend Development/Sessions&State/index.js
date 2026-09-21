import express from "express";
import session from "express-session";

const app = express();

app.use(
    session({
        secret: "mySecret",
        resave: false,
        saveUninitialized: false, // Recommended default // empty session ko save mat karo
        // saveUninitialized: true, // Use 'true' only when you specifically need a session to be created/saved before you add any data.
    }),
);

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

app.listen(3000, () => {
    console.log("Server start on - 3000");
});
