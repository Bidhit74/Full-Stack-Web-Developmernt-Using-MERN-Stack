import Listing from "../../models/Listing.js";

const editController = async (req, res) => {
	const { id } = req.params;
	const listing = await Listing.findById(id);
	res.render("listings/edit-listing.ejs", { listing });
};

export default editController;
