const handerError = (err, req, res, next) => {
	res.status(500).render("error.ejs", {
		message: "Internal Server Error. Please try again later.",
	});
};

export default handerError;
