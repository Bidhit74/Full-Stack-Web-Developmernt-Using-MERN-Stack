import express from "express";
import listingController from "../controllers/listings/listing.controller.js";
import homeController from "../controllers/home.controller.js";
import showListing from "../controllers/listings/show.controller.js";
import createListing from "../controllers/listings/create.controller.js";
import addDBUserListingController from "../controllers/listings/add-db-user-listing.controller.js";

const router = express.Router();

router.get("/", homeController);
router.get("/listings", listingController);
router.post("/listings", addDBUserListingController);
router.get("/listings/new", createListing);
router.get("/listings/:id", showListing);

export default router;
