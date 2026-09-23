import express from "express";
import homeController from "../controllers/home.controller.js";
import listingsRoutes from "./listings.routes.js";
import reviewsRoutes from "./reviews.routes.js";
import usersRoutes from "./users.routes.js";

const router = express.Router();

router.get("/", homeController);
router.use("/listings", listingsRoutes);
router.use("/listings/:id/reviews", reviewsRoutes);
router.use("/", usersRoutes);

export default router;
