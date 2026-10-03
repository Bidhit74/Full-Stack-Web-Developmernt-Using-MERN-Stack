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
import multer from "multer";

const router = express.Router();
// Use Multer to access form data - multipart/form-data
const upload = multer({ dest: "uploads/" });

// add middleware validate schema
router
    .route("/")
    .get(listingController)
    // .post(isLoggedIn, validateListing, addDBUserListingController);
    .post(upload.single("listing[image]"), (req, res) => {
        console.log(req.body);
        res.send(req.file);
    });

router.get("/new", isLoggedIn, createListing);

router
    .route("/:id")
    .get(showListing)
    .put(isLoggedIn, isOwner, validateListing, updateController)
    .delete(isLoggedIn, isOwner, deleteController);

router.get("/:id/edit", isLoggedIn, isOwner, editController);

export default router;
