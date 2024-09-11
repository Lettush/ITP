const Post = require("../models/post");

// Create Post (POST)
const createPost = async (req, res) => {
  // Destructuring
  const { title, author, description, likes, comments } = req.body;

  try {
    const post = await Post.create({
      title,
      author,
      description,
      likes,
      comments,
    });

    // Success message
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Posts (GET)
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Specific post (GET)
const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById({ _id: id });

    // if it doesn't exist
    // (you can also throw error if you like)
    if (!post) return res.status(404).json({ error: "No posts found!" });

    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Post
const updatePost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true, runValidators: true }
    );

    // if it doesn't exist
    // (you can also throw error if you like)
    if (!post) return res.status(404).json({ error: "No posts found!" });

    res
      .status(200)
      .json({ message: "The post has been successfully updated.", post });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Post
const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findByIdAndDelete({ _id: id });

    // if it doesn't exist
    // (you can also throw error if you like)
    if (!post) return res.status(404).json({ error: "No posts found!" });

    res
      .status(200)
      .json({ message: "The post has been successfully removed." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost
};
