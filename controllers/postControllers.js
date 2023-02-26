import prisma from "../prisma/index.js";
import { ObjectId } from "bson";

//* Get All Posts
export const getPosts = async (req, res) => {
  try {
    const allPosts = await prisma.post.findMany();
    return res.status(200).json({ allPosts });
  } catch {
    return res.status(404).json({ error: "Not Found" });
  }
};

//* Get Single Post
export const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const postData = await prisma.post.findFirst({
      where: {
        id,
      },
    });
    return res.status(200).json({ postData });
  } catch {
    return res.status(404).json({ error: "Not Found" });
  }
};

//* Create Post
export const createPost = async (req, res) => {
  const { slug, title, body, authorId, ratings } = req.body;
  try {
    const postData = await prisma.post.create({
      data: {
        slug,
        title,
        body,
        ratings,
        author: {
          connect: {
            id: authorId,
          },
        },
      },
    });

    return res.status(200).json({ postData });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

//* Update Post
export const updatePost = async (req, res) => {
  const id = req.params.id;
  const { slug, title, body, ratings } = req.body;
  try {
    const postData = await prisma.post.update({
      where: {
        id,
      },
      data: {
        ratings,
        slug,
        title,
        body,
      },
    });

    return res.status(200).json({ postData });
  } catch (error) {
    return res
      .status(404)
      .json({ error: "Counld not find the mentioned post" });
  }
};

//* Update Post
export const deletePost = async (req, res) => {
  const id = req.params.id;
  try {
    await prisma.post.delete({
      where: {
        id,
      },
    });

    return res.status(200).json({ success: "deleted Record" });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

// //* Delete a Post
// export const deleteAllPosts = async (req, res) => {
//   try {
//     const deletedAllPosts = await prisma.post.deleteMany({});

//     return res
//       .status(200)
//       .json({ success: "deleted All Record", data: { deletedAllPosts } });
//   } catch (error) {
//     return res.status(400).json({ error: error });
//   }
// };
