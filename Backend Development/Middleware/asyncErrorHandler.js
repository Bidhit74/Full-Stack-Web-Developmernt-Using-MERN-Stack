import express from "express";

const app = express();

// Async error handler -- wrapper of async function
const asyncHandler = (fn) => {
	return (req, res, next) => {
		Promise.resolve(fn(req, res, next)).catch(next);
	};
};

// Controller
const testController = asyncHandler(async (req, res) => {
	await Promise.reject(new Error("Something went wrong"));

	res.send("Success");
});

// Route
app.get("/test", testController);

// Central error middleware
const errorHandler = (err, req, res, next) => {
	console.error("Error:", err.message);

	res.status(500).json({
		success: false,
		message: "Internal Server Error",
	});
};

app.use(errorHandler);

app.listen(3000, () => {
	console.log("Server running on port 3000");
});
