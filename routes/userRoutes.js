import express from "express";
import { signIn, signUp } from "../controllers/userControllers.js";

const router = express.Router();

router.route("/signup").post(signUp);
router.route("/signin").get(signIn);

export default router;
