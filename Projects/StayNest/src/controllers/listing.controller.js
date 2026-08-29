import Listing from "../models/Listing.js";

const listingController = async (req, res) => {
	try {
		console.log("Listing Succusefully");
		res.send("Listing Succusefully");
	} catch {
		(err) => {
			console.log(err);
			res.send("Something went Wrong!!!");
		};
	}
};

export default listingController;
