import Listing from "../../models/Listing.js";
const updateController = async (req, res) => {
	const { id } = req.params;
	const { listing } = req.body;
	await Listing.findByIdAndUpdate(id, listing);
	res.redirect(`/listings/${id}`);
};

export default updateController;
