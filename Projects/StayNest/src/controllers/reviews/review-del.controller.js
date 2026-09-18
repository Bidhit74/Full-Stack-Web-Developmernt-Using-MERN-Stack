import Listing from "../../models/Listing.js";
import Review from "../../models/Review.js";

const reviewDel = async (req, res) => {
    const { id, reviewId } = req.params;
    // ** $push → array में add   ||  $pull → array से remove
    // ** $pull -- MongoDB/Mongoose का array से matching value/document हटाने वाला operator है।
    // $pull खासकर तब useful है जब parent document में child document की ObjectId references की array रखी हो।
    const reviewDel = await Review.findByIdAndDelete(reviewId);
    await Listing.findByIdAndUpdate(id, {
        $pull: { reviews: reviewId },
    });
    console.log(reviewDel);
    res.redirect(`/listings/${id}`);
};

export default reviewDel;
