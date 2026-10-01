import express from "express";
import reviewAddDb from "../controllers/reviews/review-add-db.controller.js";
import validateReviews from "../middlewares/validateReviews.js";
import reviewDel from "../controllers/reviews/review-del.controller.js";
import reviewController from "../controllers/reviews/review.controller.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.middleware.js";
import isReviewAuthor from "../middlewares/isReviewAuthor.middleware.js";

const router = express.Router({ mergeParams: true });

router.get("/", isLoggedIn, reviewController);
router.post("/", isLoggedIn, validateReviews, reviewAddDb);
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, reviewDel);

export default router;
