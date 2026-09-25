import Listing from "../../models/Listing.js";

const addDBUserListingController = async (req, res, next) => {
    const listing = req.body.listing;
    const newListing = new Listing(listing); // Add New data in DB
    newListing.owner = req.user._id;
    await newListing.save(); // Save data in DB
    req.flash("success", "New listing created");
    res.redirect("/listings");
};

export default addDBUserListingController;
