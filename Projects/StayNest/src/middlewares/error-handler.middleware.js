const handerError = (err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message;
	console.error(err.stack);
	res.status(statusCode).render("error", {
		statusCode,
		message,
	});
};

export default handerError;
