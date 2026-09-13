import express from "express";
import listingController from "../controllers/listings/listing.controller.js";
import homeController from "../controllers/home.controller.js";
import showListing from "../controllers/listings/show.controller.js";
import createListing from "../controllers/listings/create.controller.js";
import addDBUserListingController from "../controllers/listings/add-db-user-listing.controller.js";
import editController from "../controllers/listings/edit.controller.js";
import updateController from "../controllers/listings/update.controller.js";
import deleteController from "../controllers/listings/delete.controller.js";
import validateListing from "../middlewares/validateListing.js";
import reviewController from "../controllers/listings/review.controller.js";

const router = express.Router();

router.get("/", homeController);
router.get("/listings", listingController);
// add middleware validate schema
router.post("/listings", validateListing, addDBUserListingController);
router.get("/listings/new", createListing);
router.get("/listings/:id", showListing);
router.put("/listings/:id", updateController);
router.delete("/listings/:id", deleteController);
router.get("/listings/:id/edit", editController);
router.get("/listings/:id/review", reviewController);

export default router;
