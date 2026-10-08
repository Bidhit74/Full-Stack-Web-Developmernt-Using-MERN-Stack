import { cloudinary } from "../../config/cloudConfig.js";
import Listing from "../../models/Listing.js";

const deleteController = async (req, res) => {
    const { id } = req.params;
    const deleteListing = await Listing.findByIdAndDelete(id);
    // Delete image from Cloudinary
    if (deleteListing.image?.public_id) {
        await cloudinary.uploader.destroy(deleteListing.image.public_id);
    }
    req.flash("success", "Listing deleted successfully!");
    console.log(deleteListing);
    res.redirect("/listings");
};

export default deleteController;
