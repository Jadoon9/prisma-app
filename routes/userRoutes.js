import express from "express";
import { logout, login, signUp } from "../controllers/userControllers.js";

const router = express.Router();

router.route("/user/signup").post(signUp);
router.route("/user/login").post(login);
router.route("/user/logout").post(logout);

export default router;
