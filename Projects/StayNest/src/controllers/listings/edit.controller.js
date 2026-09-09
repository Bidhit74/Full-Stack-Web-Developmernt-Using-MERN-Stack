import Listing from "../../models/Listing.js";

const editController = async (req, res) => {
	const { id } = req.params;
	const listing = await Listing.findById(id);
	if (!listing) {
			return next(new ExpressError(400, "Send valid id for listings"));
		}
	res.render("listings/edit-listing.ejs", { listing });
};

export default editController;
