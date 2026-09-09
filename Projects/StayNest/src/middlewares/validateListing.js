import listingSchema from "../schemas/listingSchema.js";
import ExpressError from "../utils/ExpressError.js";

const validateListing = (req, res, next) => {
	const { error } = listingSchema.validate(req.body);

	if (error) {
		const message = error.details
			.map((detail) => detail.message)
			.join(", ");
		throw new ExpressError(400, message);
	}

	next();
};

export default validateListing;
