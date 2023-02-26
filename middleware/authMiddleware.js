import prisma from "../prisma/index.js";
import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.send("Please Login");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await prisma.user.findUnique({
      where: {
        id: decoded.userId,
      },
    });

    next();
  } catch (error) {
    res
      .status(403)
      .json({ message: "You are not authorized to do this operation" });
  }
};

export default isAuthenticated;
