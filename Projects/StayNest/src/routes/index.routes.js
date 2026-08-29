import express from "express";
import listingController from "../controllers/listing.controller.js";

const router = express.Router();

router.get("/", listingController);

export default router;
