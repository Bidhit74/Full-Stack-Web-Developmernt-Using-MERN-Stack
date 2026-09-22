import Joi from "joi";

const listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().min(3).max(100).trim().required().messages({
            "string.min": "Title must be at least 3 characters long.",
            "string.max": "Title must be at most 100 characters long.",
            "string.empty": "Title is required.",
        }),

        price: Joi.number().min(1).required().messages({
            "number.base": "Price must be a valid number.",
            "number.min": "Price must be at least ₹1.",
        }),

        description: Joi.string().min(10).max(500).trim().required().messages({
            "string.min": "Description must be at least 10 characters long.",
            "string.max": "Description must be at most 500 characters long.",
            "string.empty": "Description is required.",
        }),

        location: Joi.string().min(2).max(50).trim().required().messages({
            "string.min": "Location must be at least 2 characters long.",
            "string.max": "Location must be at most 50 characters long.",
            "string.empty": "Location is required.",
        }),

        country: Joi.string().min(2).max(20).trim().required().messages({
            "string.min": "Country must be at least 2 characters long.",
            "string.max": "Country must be at most 20 characters long.",
            "string.empty": "Country is required.",
        }),

        imageUrl: Joi.string().trim().uri().allow("").messages({
            "string.uri": "Please enter a valid image URL.",
        }),
    }).required(),
});

export default listingSchema;
