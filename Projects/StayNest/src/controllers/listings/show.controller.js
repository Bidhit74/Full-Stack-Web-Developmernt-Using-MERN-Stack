import Listing from "../../models/Listing.js";

const showListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({ path: "reviews", populate: { path: "author" } })
        .populate("owner");
    const { reviews, owner } = listing;
    console.log(reviews);
    let isUser = false;
    if (owner?._id.equals(req.user?._id)) {
        isUser = true;
    }
    res.render("listings/showListing.ejs", { listing, reviews, owner, isUser });
};

export default showListing;
