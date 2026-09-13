import Joi from "joi";

const reviewSchema = Joi.object({
    review: Joi.object({
        comment: Joi.string().min(5).required(),

        rating: Joi.number().integer().min(1).max(5).required(),
    }).required(),
});

export default reviewSchema;
