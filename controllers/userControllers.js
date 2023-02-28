import prisma from "../prisma/index.js";
import cookieToken from "../utils/cookiesToken.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

//* User Sign Up
export const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    // * Check
    if ((!email, !password)) {
      throw new Error("please provide all fields");
    }

    const userCheck = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userCheck) {
      // throw new Error("User Already Exist");
      return res.status(400).json({ message: "User Already Exist" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 12);

      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });
      const token = jwt.sign({ email }, JWT_SECRET);
      res.status(201).json({ user, token });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

//* User Sign In
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // * Check
    if ((!email, !password)) {
      throw new Error("please provide all fields");
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("No user found with this email");
    }
    const checkPassword = await bcrypt.compare(password, user.password);

    if (checkPassword) {
      delete user.password;
      const token = jwt.sign({ user }, JWT_SECRET);
      res.status(201).json({ user, token });
    } else {
      throw new Error("Credentials not matched");
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      error: "Somenthing went wrong",
    });
  }
};
