import listingSchema from "../schemas/listingSchema.js";

const validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        req.flash("error", error.message);
        return res.redirect(`/listings/${req.params.id}/edit`);
    }

    next();
};

export default validateListing;
