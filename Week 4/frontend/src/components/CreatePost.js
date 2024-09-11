import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // prevent page from refreshing
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:4000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          author,
          description,
          likes: 0,
        }),
      });

      if (!response.ok) throw new Error(response.status);

      // If all is good, go back to home page
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create a post!</h3>

      <div>
        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        {/* Author */}
        <input
          type="text"
          name="author"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>

      <div>
        {/* Description */}
        <textarea
          name="description"
          placeholder="Enter your post here..."
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CreatePost;
