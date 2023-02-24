import express from "express";
import {
  createPost,
  deleteAllPosts,
  deletePost,
  getPosts,
  updatePost,
} from "../controllers/postControllers.js";

const router = express.Router();

router.route("/posts").get(getPosts);
router.route("/create-post").post(createPost);
router.route("/update-post").patch(updatePost);
router.route("/delete-post").patch(deletePost);
router.route("/delete-all-posts").patch(deleteAllPosts);

export default router;
