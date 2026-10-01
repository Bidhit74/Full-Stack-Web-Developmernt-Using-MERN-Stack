import Listing from "../../models/Listing.js";

const showListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({ path: "reviews", populate: { path: "author" } })
        .populate("owner");
    const { reviews, owner } = listing;
    res.render("listings/showListing.ejs", { listing, reviews, owner });
};

export default showListing;
