import express from "express";
import ExpressError from "./ExpressError.js";

const app = express();
const port = 8000;

app.get("/error", (req, res) => {
	abc = abc;
});
// *** Error Handling Middleware
// app.use((err, req, res, next) => {
// 	console.log("----------ERROR1 Middleware----------");
// 	// next(); // next middlewar ke pass bhejega jaha error na ho
// 	next(err); // default error next middlewar ke pass bhejega
// });
// app.use((err, req, res, next) => {
// 	console.log("----------ERROR2 Middleware----------");
// 	next(err);
// });

//** use of Custom Error Class*/
const checkApi =
	("/api",
	(req, res, next) => {
		const { token } = req.query;
		if (token === "giveaccess") {
			console.log("Access");
			return next();
		}
		throw new ExpressError(401, "Access Denied!!!");
	});

app.get("/api", checkApi, (req, res) => {
	res.send("Data");
});

// Avctivity - admin throw ExpressError
app.get("/admin", (req, res) => {
	throw new ExpressError(403, "Access to admin is Forbidden");
});

// ** Custom Error Handling - user status code handle but not handle different status code
// app.use((err, req, res, next) => {
// 	const { status, message } = err;
// 	res.status(status).send(message);
// });
// ** Custom Error Handling - user status code handle with handle different status code - send default status code
app.use((err, req, res, next) => {
	const { status = 500, message } = err;
	res.status(status).send(message);
});

app.get("/", (req, res) => {
	res.send("Error Handling Module in Middleware");
});

app.listen(port, () => {
	console.log("Server listening to port: ", port);
});
