import Listing from "../../models/Listing.js";

const addDBUserListingController = async (req, res, next) => {
	const listing = req.body.listing;
	const newListing = new Listing(listing); // Add New data in DB
	await newListing.save(); // Save data in DB
	res.redirect("/listings");
};

export default addDBUserListingController;
