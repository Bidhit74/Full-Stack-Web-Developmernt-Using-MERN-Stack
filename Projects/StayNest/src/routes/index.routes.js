import express from "express";
import listingController from "../controllers/listing.controller.js";
import homeController from "../controllers/home.controller.js";

const router = express.Router();

router.get("/", homeController);
router.get("/listing", listingController);

export default router;
