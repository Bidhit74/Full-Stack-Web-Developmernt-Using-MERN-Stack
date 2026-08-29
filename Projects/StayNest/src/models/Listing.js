import { Schema, model } from "mongoose";

const listingSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		maxLength: 100,
	},
	imageUrl: {
		type: String,
		default: "https://img.icons8.com/plasticine/1200/no-image.jpg",
		set: (v) =>
			v === ""
				? "https://img.icons8.com/plasticine/1200/no-image.jpg"
				: v,
	},
	price: {
		type: Number,
		min: 1,
	},
	location: {
		type: String,
	},
	country: {
		type: String,
	},
});

const Listing = model("Listing", listingSchema);

export default Listing;
