import prisma from "../prisma/index.js";
import cookieToken from "../utils/cookiesToken.js";
import bcrypt from "bcryptjs";

//* User Sign Up
export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // * Check
    if ((!name, !email, !password)) {
      throw new Error("please provide all fields");
    }

    const userCheck = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userCheck) {
      throw new Error("User Already exist");
    } else {
      const hashedPassword = await bcrypt.hash(password, 12);

      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });

      cookieToken(user, res);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

//* User Sign In
export const signIn = async (req, res) => {
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

    console.log(userCheck, "check");

    if (!userCheck) {
      throw new Error("No user found with this email");
    } else {
      const checkPassword = await bcrypt.compare(password, userCheck.password);

      if (checkPassword) {
        const user = await prisma.user.findFirst({
          data: {
            email,
            password,
          },
        });
        cookieToken(user, res);
      } else {
        throw new Error("Credentials not matched");
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};
