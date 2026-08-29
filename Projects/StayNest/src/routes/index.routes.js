import express from "express";
import listingController from "../controllers/listings/listing.controller.js";
import homeController from "../controllers/home.controller.js";
import showListing from "../controllers/listings/show.controller.js";

const router = express.Router();

router.get("/", homeController);
router.get("/listing", listingController);
router.get("/listing/:id", showListing);

export default router;
