import Review from "../models/Review.js";

const isReviewAuthor = async (req, res, next) => {
    const { id, reviewId } = req.params;
    const review = await Review.findById(reviewId);
    if (!review) {
        req.flash("error", "Review not found.");
        return res.redirect(`/listings/${id}`);
    }
    if (!req.user._id.equals(review.author._id)) {
        req.flash("error", "You can only delete your own review.");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

export default isReviewAuthor;
