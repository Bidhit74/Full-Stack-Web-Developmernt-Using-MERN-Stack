import Listing from "../../models/Listing.js";

const showListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id)
        .populate("reviews")
        .populate("owner");
    const { reviews, owner } = listing;
    let isUser = false;
    if (owner?._id.equals(req.user?._id)) {
        isUser = true;
    }
    res.render("listings/showListing.ejs", { listing, reviews, owner, isUser });
};

export default showListing;
