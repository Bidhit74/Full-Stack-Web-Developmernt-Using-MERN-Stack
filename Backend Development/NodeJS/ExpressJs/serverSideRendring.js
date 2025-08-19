import express from "express";
const app = express();
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    // Render the index.ejs file
    res.render("index", { name: "Bidhit Chaudhary" }); // passing data
});

app.get("/form", (req, res) => {
    // Render the form.ejs file
    res.render("form");
});

app.get("/checkform", (req, res) => {
    console.log(req.query); // Accessing query parameters
    const { name, email } = req.query; // Destructuring query parameters
    res.send(
        "<h1>Form Submitted Successfully</h1><p>Name: " +
            name +
            "</p><p>Email: " +
            email +
            "</p>"
    );
});
app.post("/checkformPost", (req, res) => {
    console.log(req.body); // Accessing body parameters
    const { name, email } = req.body; // Destructuring body parameters
    res.send(
        "<h1>Form Submitted Successfully</h1><p>Name: " +
            name +
            "</p><p>Email: " +
            email +
            "</p>"
    );
});

app.use((req, res) => {
    res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
