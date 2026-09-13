import reviewSchema from "../schemas/reviewValidation.js";
import ExpressError from "../utils/ExpressError.js";
const validateReviews = async (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const message = error.details
            .map((detail) => detail.message)
            .join(", ");
        throw new ExpressError(400, message);
    }

    next();
};

export default validateReviews;
