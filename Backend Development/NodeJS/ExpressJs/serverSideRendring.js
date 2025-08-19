import express from "express";
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    // Render the index.ejs file
    res.render("index", { name: "Bidhit Chaudhary" }); // passing data
});

app.use((req, res) => {
    res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
