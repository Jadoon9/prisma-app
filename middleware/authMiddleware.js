import prisma from "../prisma/index.js";
import jwt from "jsonwebtoken";

// Middleware to authenticate the user
const isAuthenticated = (req, res, next) => {
  console.log(req, "req");
  const authHeader = req.headers.authorization;
  if (authHeader) {
    // Get the token from the Authorization header
    const token = authHeader && authHeader.split(" ")[1];

    // Verify the token and decode the payload
    console.log(token, "here");
    jwt.verify(token, "secret", (err, payload) => {
      if (err) {
        // If there's an error, return an unauthorized error response
        return res.status(401).json({ message: "Unauthorized" });
      }
      // Set the user object in the request object
      req.user = payload;
      // Call the next middleware function
      next();
    });
  } else {
    // If there's no Authorization header, return an unauthorized error response
    res.status(401).json({ message: "Please provide a Headers" });
  }
};

export default isAuthenticated;
