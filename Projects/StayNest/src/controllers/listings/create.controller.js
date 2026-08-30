const createListing = async (req, res) => {
	try {
		res.render("listings/create-listing.ejs");
	} catch (err) {
		console.log("Error in Create Listing: ", err);
		res.status(500).render("error.ejs", {
			message: "Something went wrong!!!",
		});
	}
};

export default createListing;
