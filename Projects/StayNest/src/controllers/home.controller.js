const homeController = (req, res) => {
	try {
		res.render("home.ejs");
	} catch (err) {
		console.log("Home Controller Error: ", err);
		res.status(500).render("error.ejs", {
			message: "Internal Server Error. Please try again later.",
		});
	}
};
export default homeController;
