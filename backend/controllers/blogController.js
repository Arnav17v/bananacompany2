import { Blog } from "../models/blogModel.js";
export const createBlog = async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.content ||
      !req.body.artic ||
      !req.body.img
    ) {
      return res
        .status(400)
        .send({ message: "Please fill all required fields" });
    }
    const newBlog = new Blog({
      title: req.body.title,
      content: req.body.content,
      artic: req.body.artic,
      img: req.body.img,
    });

    const blog = await Blog.create(newBlog);
    return res.status(201).send(blog);
  } catch (error) {
    res.status(500).send({ message: error.message });
    console.log(error);
  }
};
export const getBlog = async (req, res) => {
  try {
    const blog = await Blog.find({});
    return res.status(200).json({ count: blog.length, data: blog });
  } catch (error) {
    res.status(500).send({ message: error.message });
    console.log(error);
  }
};
