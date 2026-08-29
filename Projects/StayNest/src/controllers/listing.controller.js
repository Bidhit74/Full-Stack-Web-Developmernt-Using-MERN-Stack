import Listing from "../models/Listing.js";

const listingController = async (req, res) => {
	try {
		const sample_data = new Listing({
			title: "My New Villa",
			description: "By the beech",
			price: 3000,
			location: "Goa",
			country: "India",
		});
		await sample_data.save();
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
