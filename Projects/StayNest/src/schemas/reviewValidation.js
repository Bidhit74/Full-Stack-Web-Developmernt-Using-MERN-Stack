import Joi from "joi";

const reviewSchema = Joi.object({
    review: Joi.object({
        comment: Joi.string().min(5).required().messages({
            "string.min": "Comment must be at least 5 characters long.",
            "string.empty": "Comment is required.",
        }),

        rating: Joi.number().integer().min(1).max(5).required().messages({
            "number.base": "Rating must be a number.",
            "number.integer": "Rating must be a whole number.",
            "number.min": "Rating must be at least 1.",
            "number.max": "Rating cannot be greater than 5.",
        }),
    }).required(),
});

export default reviewSchema;
