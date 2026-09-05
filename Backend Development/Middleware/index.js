import express from "express";

const app = express();
const port = 8000;

// *** This working every path response and not allow any path show your data
// app.use((req, res) => {
// 	console.log("Hi, I'm a Middleware");
// 	res.send("Middleware Finished");
// });

// *** Get the data your path or next middleware you can use - next()
// Midlleware working every path(if path is wrong uske baad bhi work karega) and every request middleware working
// app.use((req, res, next) => {
// 	console.log("Hi, I'm a first Middleware");
// 	// next();
// 	// next() is not a end but a good developer not write the code after next() -- esiliye good practice use -- "return next()"
// 	// console.log("After the next"); // this is working after all midlleware calls
// 	return next();
// });
// app.use((req, res, next) => {
// 	console.log("Hi, I'm a second Middleware");
// 	return next();
// });

// *** Create a utility middleware - Logger
// middleware write always top or top your request --- kuyki agar end me likhenge to path/get request send() your path than not working middleware -- always top your code base
// app.use((req, res, next) => {
// 	console.log(
// 		`Method - ${req.method} || Hostname: ${req.hostname} || Path - ${req.path}`,
// 	);
// 	return next();
// });

// *** Spacefic path middleware
// app.use("/random", (req, res, next) => {
// 	console.log(
// 		"This page only random page middleware - (es pe bhi kaam karega but base '/random'/abc) ",
// 	);
// 	next();
// });

// *** API Token as Query String
app.use("/api", (req, res, next) => {
	const { token } = req.query;
	if (token === "giveaccess") {
		console.log("Access");
		return next();
	}
	console.log("Access Denied");
	res.send("Access Denied!!!");
});

app.get("/api", (req, res) => {
	res.send("Data");
});

app.get("/", (req, res) => {
	res.send("Hello Bidhit");
});

app.get("/random", (req, res) => {
	res.send("This is a random page");
});

// *** This work end with not found url than work this middleware
app.use((req, res) => {
	res.status(404).send("Not Found - 404");
});
app.listen(port, () => {
	console.log("Server listening to port: ", port);
});
