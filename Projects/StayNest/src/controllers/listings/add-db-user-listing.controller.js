import Listing from "../../models/Listing.js";
import uploadToCloudinary from "../../middlewares/uploadToCloudinary.middleware.js";

const addDBUserListingController = async (req, res) => {
    // Upload image to Cloudinary
    const result = await uploadToCloudinary(req.file.buffer, {
        folder: "staynest/listings",
        // public_id: "listing-123", // Optional: Cloudinary generates a unique ID
        format: "jpg",
    });
    // Get listing data from form
    const listing = req.body.listing;
    // Create new listing
    const newListing = new Listing(listing);
    // Set logged-in user as owner
    newListing.owner = req.user._id;
    // Save Cloudinary image details
    newListing.image = {
        url: result.secure_url,
        public_id: result.public_id,
        fileName: req.file.originalname,
    };
    // Save listing in MongoDB
    await newListing.save();
    // Success message
    req.flash("success", "New listing created successfully!");
    res.redirect("/listings");
};

export default addDBUserListingController;
