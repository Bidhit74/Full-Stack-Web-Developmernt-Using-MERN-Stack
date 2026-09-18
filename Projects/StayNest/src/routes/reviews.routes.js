import express from "express";
import reviewAddDb from "../controllers/reviews/review-add-db.controller.js";
import validateReviews from "../middlewares/validateReviews.js";
import reviewDel from "../controllers/reviews/review-del.controller.js";
import reviewController from "../controllers/reviews/review.controller.js";

const router = express.Router({ mergeParams: true });

router.get("/", reviewController);
router.post("/", validateReviews, reviewAddDb);
router.delete("/:reviewId", reviewDel);

export default router;
