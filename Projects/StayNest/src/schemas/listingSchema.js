import Joi from "joi";

const listingSchema = Joi.object({
	listing: Joi.object({
		title: Joi.string().min(3).max(100).required(),

		price: Joi.number().min(1).required(),

		description: Joi.string().min(10).required(),

		location: Joi.string().required(),

		country: Joi.string().required(),

		imageUrl: Joi.string().uri().allow(""),
	}).required(),
});

export default listingSchema;
