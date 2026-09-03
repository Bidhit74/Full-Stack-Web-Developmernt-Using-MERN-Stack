import Listing from "../../models/Listing.js";

const showListing = async (req, res) => {
	try {
		const { id } = req.params;
		const listing = await Listing.findById(id);
		res.render("listings/showListing.ejs", { listing });
	} catch (err) {
		console.log("Show listing controller error: ", err);
		res.status(500).render("error.ejs", {
			message: "Internal Server Error. Please try again later.",
		});
	}
};

export default showListing;
