import prisma from "../prisma/index.js";
import jwt from "jsonwebtoken";

// const isAuthenticated = async (req, res, next) => {
//   try {
//     const token = req.cookies.token;
//     if (!token) {
//       return res.send("Please Login");
//     }
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = await prisma.user.findUnique({
//       where: {
//         id: decoded.userId,
//       },
//     });

//     next();
//   } catch (error) {
//     res
//       .status(403)
//       .json({ message: "You are not authorized to do this operation" });
//   }
// };

// export default isAuthenticated;

// Middleware to authenticate the user
const isAuthenticated = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    // Get the token from the Authorization header
    const token = authHeader.split(" ")[1];
    // Verify the token and decode the payload
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
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default isAuthenticated;
