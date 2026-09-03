import Listing from "../../models/Listing.js";

const deleteController = async (req, res) => {
	try {
		const { id } = req.params;
		const deleteListing = await Listing.findByIdAndDelete(id);
		console.log(deleteListing);
		res.redirect("/listings");
	} catch (err) {
		console.log("Delete listing controller error: ", err);
		res.status(500).render("error.ejs", {
			message: "Internal Server Error. Please try again later.",
		});
	}
};

export default deleteController;
