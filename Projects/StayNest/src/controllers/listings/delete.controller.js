import Listing from "../../models/Listing.js";

const deleteController = async (req, res) => {
	const { id } = req.params;
	const deleteListing = await Listing.findByIdAndDelete(id);
	console.log(deleteListing);
	res.redirect("/listings");
};

export default deleteController;
