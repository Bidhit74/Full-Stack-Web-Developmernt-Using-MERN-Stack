import Listing from "../../models/Listing.js";

const listingController = async (req, res) => {
	const listings = await Listing.find();
	res.render("listings/listing", { listings });
};
export default listingController;
