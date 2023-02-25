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
router.route("/posts/update/:id").patch(updatePost);
router.route("/posts/delete/:id").delete(deletePost);

export default router;
