import express from "express";
import {
  createPost,
  deleteAllPosts,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/postControllers.js";

const router = express.Router();

router.route("/posts").get(getPosts);
router.route("/posts/:id").get(getPost);
router.route("/create-post").post(createPost);
router.route("/update-post/:id").patch(updatePost);
router.route("/delete-post").patch(deletePost);
router.route("/delete-all-posts").patch(deleteAllPosts);

export default router;
