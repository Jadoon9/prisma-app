import prisma from "../prisma/index.js";
import cookieToken from "../utils/cookiesToken.js";

//* User Sign Up
export const signUp = async (req, res, next) => {
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
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password,
        },
      });
      cookieToken(user, res);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};
