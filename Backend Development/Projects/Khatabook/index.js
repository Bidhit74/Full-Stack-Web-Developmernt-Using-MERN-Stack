const express = require("express");
const app = express();
const debuglog = require("debug")("development:indexJs");
const path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function formatDate(date) {
    const [year, month, day] = date.split("-");
    return `${day}-${month}-${year}`;
}
app.get("/", (req, res) => {
    fs.readdir("./files", (err, files) => {
        if (err) {
            debuglog("Error reading directory:", err);
            return res.status(500).send("Internal Server Error");
        }
        const filesName = files.map((file) => path.parse(file).name);
        res.render("index", { filesName });
    });
});

app.get("/transactions/add", (req, res) => {
    res.render("transactions/add");
    // res.send("Transaction Added Successfully");
});
app.post("/transactions/add", (req, res) => {
    const { date } = req.body;
    fs.writeFile(
        `./files/${formatDate(date)}` + ".txt",
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
