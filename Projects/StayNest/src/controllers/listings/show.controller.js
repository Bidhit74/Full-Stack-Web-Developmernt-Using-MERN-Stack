import Listing from "../../models/Listing.js";
import dotenv from "dotenv";

dotenv.config();

const showListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({ path: "reviews", populate: { path: "author" } })
        .populate("owner");
    const { reviews, owner } = listing;
    const MAPBOX_TOKEN = process.env.MAPBOX_PUBLIC_TOKEN;
    res.render("listings/showListing.ejs", {
        listing,
        reviews,
        owner,
        useMapbox: true,
        MAPBOX_TOKEN,
    });
};

export default showListing;
