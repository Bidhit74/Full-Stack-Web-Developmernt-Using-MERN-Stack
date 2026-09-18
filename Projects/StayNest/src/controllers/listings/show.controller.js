import Listing from "../../models/Listing.js";

const showListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    const { reviews } = listing;
    // console.log(reviews);
    res.render("listings/showListing.ejs", { listing, reviews });
};

export default showListing;
