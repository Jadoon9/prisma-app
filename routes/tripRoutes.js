import express from "express";
import {
  createTrip,
  deleteTrip,
  getTrip,
  getTrips,
  updateTrip,
} from "../controllers/tripControllers.js";
import isAuthenticated from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/trips").get(getTrips);
router.route("/trips/:id").get(getTrip);
router.route("/trips/create").post(createTrip);
router.route("/trips/update/:id").put(updateTrip);
router.route("/trips/delete/:id").delete(deleteTrip);

export default router;
