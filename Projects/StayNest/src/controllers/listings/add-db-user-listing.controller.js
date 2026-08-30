import Listing from "../../models/Listing.js";

const addDBUserListingController = async (req, res) => {
	try {
		const listing = req.body.listing;
		const newListing = new Listing(listing); // Add New data in DB
		await newListing.save(); // Save data in DB
		res.redirect("/listings");
	} catch (err) {
		console.log("Error in addDb Listing: ", err);
		res.status(500).render("error.ejs", {
			message: "Something went wrong!!!",
		});
	}
};

export default addDBUserListingController;
