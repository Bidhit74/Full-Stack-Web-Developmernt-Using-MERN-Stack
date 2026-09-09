import Listing from "../../models/Listing.js";
import ExpressError from "../../utils/ExpressError.js";

const addDBUserListingController = async (req, res, next) => {
	const listing = req.body.listing;
	if (!listing) {
		return next(new ExpressError(400, "Send valid data for listings"));
	}
	const newListing = new Listing(listing); // Add New data in DB
	await newListing.save(); // Save data in DB
	res.redirect("/listings");
};

export default addDBUserListingController;
