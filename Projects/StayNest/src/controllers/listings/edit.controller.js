import Listing from "../../models/Listing.js";

const editController = async (req, res) => {
	try {
		const { id } = req.params;
		const listing = await Listing.findById(id);
		res.render("listings/edit-listing.ejs", { listing });
	} catch (err) {
		console.log("Edit listing controller error: ", err);
		res.status(500).render("error.ejs", {
			message: "Internal Server Error. Please try again later.",
		});
	}
};

export default editController;
