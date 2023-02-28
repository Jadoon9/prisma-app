import express from "express";
import { getChatgptPreferences } from "../controllers/chatgptPreferencesControlle.js";

const router = express.Router();

router.route("/preferences").get(getChatgptPreferences);

export default router;
