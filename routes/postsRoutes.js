import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/postControllers.js";
import isAuthenticated from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/posts").get(getPosts);
router.route("/posts/:id").get(isAuthenticated, getPost);
router.route("/posts/create").post(isAuthenticated, createPost);
router.route("/posts/update/:id").put(isAuthenticated, updatePost);
router.route("/posts/delete/:id").delete(isAuthenticated, deletePost);

export default router;
