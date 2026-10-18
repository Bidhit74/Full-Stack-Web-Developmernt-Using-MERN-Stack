import Listing from "../../models/Listing.js";
import dotenv from "dotenv";
import mapGeocoding from "@mapbox/mapbox-sdk/services/geocoding-v6.js";
dotenv.config();

const showListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({ path: "reviews", populate: { path: "author" } })
        .populate("owner");
    const { reviews, owner } = listing;
    const MAPBOX_TOKEN = process.env.MAPBOX_PUBLIC_TOKEN;

    // Mapbox Api for coordinates
    const geocodingClient = mapGeocoding({ accessToken: MAPBOX_TOKEN });
    const response = await geocodingClient
        .forwardGeocode({
            query: `${listing.location}`,
            limit: 1,
            countries: ["IN"],
        })
        .send();
    const { coordinates } = response.body.features[0].geometry;

    res.render("listings/showListing.ejs", {
        listing,
        reviews,
        owner,
        useMapbox: true,
        MAPBOX_TOKEN,
        coordinates,
    });
};

export default showListing;
