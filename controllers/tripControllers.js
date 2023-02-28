import prisma from "../prisma/index.js";
import { ObjectId } from "bson";
import { requestfailure, requestSuccess } from "../helpers/errorHandler.js";

//* Get All Trips
export const getTrips = async (req, res) => {
  try {
    const allPosts = await prisma.trip.findMany();
    return res.status(200).json({ data: allPosts });
  } catch (error) {
    return res.status(404).json({ error: "Not Found" });
  }
};

//* Get Single Trip
export const getTrip = async (req, res) => {
  const id = req.params.id;
  try {
    const tripData = await prisma.trip.findFirst({
      where: {
        id,
      },
    });
    return res.status(200).json({ tripData });
  } catch (error) {
    return res.status(404).json({ error: "Not Found" });
  }
};

//* Create Trip
export const createTrip = async (req, res) => {
  const { id, slug, destination, endDate, duration, preferences } = req.body;
  try {
    const tripData = await prisma.trip.create({
      data: {
        id,
        slug,
        // destination,
        // startDate,
        duration,
        preferences,
        endDate,
      },
    });

    return res.status(200).json({ tripData });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

//* Update Trip
export const updateTrip = async (req, res) => {
  const id = req.params.id;
  const { slug, destination, endDate, duration, preferences } = req.body;
  try {
    const tripData = await prisma.trip.update({
      where: {
        id,
      },
      data: {
        slug,
        // destination,
        // startDate,
        duration,
        preferences,
        endDate,
      },
    });

    return res.status(200).json({ tripData });
  } catch (error) {
    return res
      .status(404)
      .json({ error: "Counld not find the mentioned post" });
  }
};

//* Delete Trip
export const deleteTrip = async (req, res) => {
  const id = req.params.id;
  try {
    await prisma.trip.delete({
      where: {
        id,
      },
    });

    return res.status(200).json({ success: "deleted Record" });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};
