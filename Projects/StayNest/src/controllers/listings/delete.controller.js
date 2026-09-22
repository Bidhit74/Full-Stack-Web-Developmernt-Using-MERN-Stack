import Listing from "../../models/Listing.js";

const deleteController = async (req, res) => {
    const { id } = req.params;
    const deleteListing = await Listing.findByIdAndDelete(id);
    req.flash("success", "Delete Successfully");
    console.log(deleteListing);
    res.redirect("/listings");
};

export default deleteController;
