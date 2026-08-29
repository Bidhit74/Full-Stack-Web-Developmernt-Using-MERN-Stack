import Listing from "../models/Listing.js";

const listingController = async (req, res) => {
	try {
		const listings = await Listing.find();
		console.log(listings);
		res.render("listings/listing.ejs", { listings });
	} catch {
		(err) => {
			console.log("listing controller error: ", err);
			res.status(500).render("error.ejs", {
				message: "Something went wrong!!!",
			});
		};
	}
};

export default listingController;
