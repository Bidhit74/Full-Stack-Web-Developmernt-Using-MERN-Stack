import Listing from "../../models/Listing.js";
import Review from "../../models/Review.js";

const reviewAddDb = async (req, res) => {
    const { id } = req.params;
    const { review } = req.body;
    const listing = await Listing.findById(id);
    let newReview = new Review(review);

    listing.reviews.push(newReview);
    // Save in Database
    await newReview.save();
    await listing.save();

    res.redirect(`/listings/${id}`);
};

export default reviewAddDb;
