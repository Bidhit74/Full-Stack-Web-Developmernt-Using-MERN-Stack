import Listing from "../../models/Listing.js";
const updateController = async (req, res) => {
	try {
		const { id } = req.params;
		const { listing } = req.body;
		await Listing.findByIdAndUpdate(id, listing);
		res.redirect(`/listings/${id}`);
	} catch (err) {
		console.log("Show listing controller error: ", err);
		res.status(500).render("error.ejs", {
			message: "Something went wrong!!!",
		});
	}
};

export default updateController;
