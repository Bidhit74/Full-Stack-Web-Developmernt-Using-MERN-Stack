import Listing from "../../models/Listing.js";

const showListing = async (req, res) => {
	const { id } = req.params;
	const listing = await Listing.findById(id);
	res.render("listings/showListing.ejs", { listing });
};

export default showListing;
