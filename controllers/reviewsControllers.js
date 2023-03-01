import prisma from "../prisma/index.js";

//* Get Reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await prisma.review.findMany({});
    return res.status(200).json({ data: reviews });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
//* Get Reviews byt user
export const getReviewsByUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.review.findFirst({
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

//* Add Review
export const addReview = async (req, res) => {
  const { id } = req.params;
  const { ratings, comment } = req.body;
  try {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        reviews: {
          create: {
            ratings,
            comment,
          },
        },
      },
    });

    delete user.password;
    return res.status(200).json({ message: "Succesfully added" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

//* Update Review
export const updateReview = async (req, res) => {
  const { id } = req.params;
  const { reviewId, ratings, comment } = req.body;
  try {
    const user = await prisma.review.update({
      where: {
        id: reviewId,
        userId: id,
      },
      data: {
        reviews: {
          create: {
            ratings,
            comment,
          },
        },
      },
    });
    return res.status(201).json({ data: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

//* Delete Review
export const deleteReview = async (req, res) => {
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
