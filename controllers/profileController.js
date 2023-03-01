import prisma from "../prisma/index.js";

//* Get Profile
export const getProfile = async (req, res) => {
  const { id } = req.body;
  try {
    const user = await prisma.profile.findFirst({
      where: {
        userId: id,
      },
    });
    return res.status(200).json({ data: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

//* Update Profile
export const updateProfile = async (req, res) => {
  const { id, name } = req.body;
  try {
    const user = await prisma.profile.update({
      where: {
        userId: id,
      },
      data: {
        name,
      },
    });
    return res.status(201).json({ data: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

//* Delete Profile
export const deleteProfile = async (req, res) => {
  const { id } = req.body;
  try {
    const user = await prisma.user.delete({
      where: {
        userId: id,
      },
    });
    console.log(user, "userrr");
    return res.status(201).json({ data: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
