import express from "express";

const app = express();
const port = 8000;

app.get("/error", (req, res) => {
	abc = abc;
});
// *** Error Handling Middleware
app.use((err, req, res, next) => {
	console.log("----------ERROR1 Middleware----------");
	// next(); // next middlewar ke pass bhejega jaha error na ho
	next(err); // default error next middlewar ke pass bhejega
});
app.use((err, req, res, next) => {
	console.log("----------ERROR2 Middleware----------");
	next(err);
});

app.get("/", (req, res) => {
	res.send("Error Handling Module in Middleware");
});

app.listen(port, () => {
	console.log("Server listening to port: ", port);
});
