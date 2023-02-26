import express from "express";
import { logout, login, signUp } from "../controllers/userControllers.js";

const router = express.Router();

router.route("/user/signup").post(signUp);
router.route("/user/login").get(login);
router.route("/user/logout").get(logout);

export default router;
