const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  likes: { type: Number, required: true },
  comments: [{ body: String }],
});

const db = mongoose.connection.useDb("posts");
const Post = db.model("postInfo", postSchema);

module.exports = Post;
