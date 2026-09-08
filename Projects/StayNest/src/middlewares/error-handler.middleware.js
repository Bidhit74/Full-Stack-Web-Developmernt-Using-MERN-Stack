const handerError = (err, req, res, next) => {
	console.error("Message:", err.message);
	res.status(500).render("error.ejs", {
		message: "Internal Server Error. Please try again later.",
	});
};

export default handerError;
