// import Listing from "../../models/Listing.js";
import uploadToCloudinary from "../../middlewares/uploadToCloudinary.middleware.js";

const addDBUserListingController = async (req, res) => {
    const result = await uploadToCloudinary(req.file.buffer, {
        folder: "staynest/listings",
        format: "webp",
    });

    console.log(result.secure_url);
    console.log(result.public_id);

    res.send("Upload Success full");

    // const listing = req.body.listing;
    // const newListing = new Listing(listing); // Add New data in DB
    // newListing.owner = req.user._id;
    // await newListing.save(); // Save data in DB
    // req.flash("success", "New listing created");
    // res.redirect("/listings");
};

export default addDBUserListingController;
