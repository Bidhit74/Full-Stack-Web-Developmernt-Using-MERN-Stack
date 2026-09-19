import express from "express";
import session from "express-session";

const app = express();

app.use(
    session({
        secret: "mySecret",
    }),
);

app.get("/", (req, res) => {
    res.send("Hellow Bidhit Chaudhary");
});

app.listen(3000, () => {
    console.log("Server start on - 3000");
});
