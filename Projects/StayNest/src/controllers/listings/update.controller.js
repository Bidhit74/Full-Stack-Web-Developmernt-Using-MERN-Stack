import { cloudinary } from "../../config/cloudConfig.js";
import uploadToCloudinary from "../../middlewares/uploadToCloudinary.middleware.js";
import Listing from "../../models/Listing.js";
const updateController = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        return next(new ExpressError(400, "Send valid data for listings"));
    }
    // Update text fields
    listing.set(req.body.listing);

    let oldPublicId;
    // Replace image only if a new file is uploaded
    if (req.file) {
        const result = await uploadToCloudinary(req.file.buffer, {
            folder: "staynest/listings",
            format: "jpg",
        });
        // Store old Public Id for destory image in cloud
        oldPublicId = listing.image?.public_id;

        listing.image = {
            url: result.secure_url,
            public_id: result.public_id,
            fileName: req.file.originalname,
        };
    }

    // Save all listing changes
    await listing.save();

    // Delete the old Cloudinary image after saving the new one
    if (oldPublicId && oldPublicId !== listing.image.public_id) {
        try {
            await cloudinary.uploader.destroy(oldPublicId);
        } catch (error) {
            console.error("Failed to delete old Cloudinary image:", error);
        }
    }

    req.flash("success", "Update Successfully");
    res.redirect(`/listings/${id}`);
};

export default updateController;
