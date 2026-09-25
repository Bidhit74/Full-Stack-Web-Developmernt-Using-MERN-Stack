import Listing from "../../models/Listing.js";

const showListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id)
        .populate("reviews")
        .populate("owner");
    const { reviews, owner } = listing;
    // console.log(reviews);
    res.render("listings/showListing.ejs", { listing, reviews, owner });
};

export default showListing;
