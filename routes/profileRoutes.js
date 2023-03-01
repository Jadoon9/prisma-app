import express from "express";
import { getChatgptPreferences } from "../controllers/chatgptPreferencesControlle.js";
import { getProfile, updateProfile } from "../controllers/profileController.js";

const router = express.Router();

router.route("/profile").get(getProfile);
router.route("/profile").put(updateProfile);
router.route("/profile").delete(getChatgptPreferences);

export default router;
