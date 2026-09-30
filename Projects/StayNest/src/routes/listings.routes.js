import express from "express";
import listingController from "../controllers/listings/listing.controller.js";
import addDBUserListingController from "../controllers/listings/add-db-user-listing.controller.js";
import validateListing from "../middlewares/validateListing.js";
import showListing from "../controllers/listings/show.controller.js";
import createListing from "../controllers/listings/create.controller.js";
import editController from "../controllers/listings/edit.controller.js";
import updateController from "../controllers/listings/update.controller.js";
import deleteController from "../controllers/listings/delete.controller.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.middleware.js";
import isOwner from "../middlewares/isOwner.middleware.js";

const router = express.Router();

router.get("/", listingController);
// add middleware validate schema
router.post("/", isLoggedIn, validateListing, addDBUserListingController);
router.get("/new", isLoggedIn, createListing);
router.get("/:id", showListing);
router.put("/:id", isLoggedIn, isOwner, validateListing, updateController);
router.delete("/:id", isLoggedIn, isOwner, deleteController);
router.get("/:id/edit", isLoggedIn, isOwner, editController);

export default router;
