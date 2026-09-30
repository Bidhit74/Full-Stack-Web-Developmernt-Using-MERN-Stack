import Listing from "../models/Listing.js";

const isOwner = async (req, res, next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing.owner.equals(req.user._id)) {
        req.flash("error", "You are not authorized to perform this action.");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

export default isOwner;
