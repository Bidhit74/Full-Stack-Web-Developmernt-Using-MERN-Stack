const handerError = (err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message;
	// console.error(err.stack);
	console.log(message);
	res.status(statusCode).render("error", {
		statusCode,
		message,
	});
};

export default handerError;
