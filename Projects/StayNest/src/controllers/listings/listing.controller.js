import Listing from "../../models/Listing.js";
const listingController = async (req, res) => {
	try {
		const listings = await Listing.find();
		res.render("listings/listing.ejs", { listings });
	} catch (err) {
		console.log("listing controller error: ", err);
		res.status(500).render("error.ejs", {
			message: "Internal Server Error!!!",
		});
	}
};

export default listingController;
