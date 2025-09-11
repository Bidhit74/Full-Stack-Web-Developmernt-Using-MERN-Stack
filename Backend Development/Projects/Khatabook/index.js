const express = require("express");
const app = express();
const debuglog = require("debug")("development:indexJs");
const path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/transactions/add", (req, res) => {
    res.render("transactions/add");
    // res.send("Transaction Added Successfully");
});
app.post("/transactions/add", (req, res) => {
    const { date, customer_name } = req.body;
    fs.writeFile(
        `./files/${date}` + ".txt",
        JSON.stringify(req.body),
        (err) => {
            if (err) {
                debuglog("Error writing file:", err);
                return res.status(500).send("Internal Server Error");
            }
        }
    );
    res.redirect("/");
});

app.listen(3000, () => {
    debuglog("Server is running on http://localhost:3000");
});
