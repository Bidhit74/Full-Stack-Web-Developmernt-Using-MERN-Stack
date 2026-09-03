import Listing from "../../models/Listing.js";

const listingController = async (req, res) => {
	try {
		const listings = await Listing.find();
		res.render("listings/listing", { listings });
	} catch (err) {
		console.error("Listing controller error:", err);
		res.status(500).render("error.ejs", {
			message: "Internal Server Error. Please try again later.",
		});
	}
};
export default listingController;
