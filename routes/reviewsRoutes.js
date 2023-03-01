import express from "express";

import {
  addReview,
  getAllReviews,
  getReviewsByUser,
  updateReview,
} from "../controllers/reviewsControllers.js";

const router = express.Router();

router.route("/reviews").get(getAllReviews);
router.route("/reviews/:id").get(getReviewsByUser);
router.route("/reviews/:id").post(addReview);
router.route("/reviews/:id").put(updateReview);
router.route("/reviews/:id").get(getReviewsByUser);

export default router;
