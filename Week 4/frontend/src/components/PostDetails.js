import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  // form states
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4000/posts/${id}`)
      .then((response) => {
        if (!response.ok) {
          navigate("/");
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        setPost(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [id, navigate]);

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:4000/posts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title !== "" ? title : post.title,
          author: author !== "" ? author : post.author,
          description: description !== "" ? description : post.description,
        }),
      });

      if (!response.ok) throw new Error(response.status);

      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:4000/posts/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error(response.status);

      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <div>
        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Title"
          defaultValue={post.title}
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
          defaultValue={post.author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>

      <div>
        {/* Description */}
        <textarea
          name="description"
          placeholder="Enter your post here..."
          defaultValue={post.description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>

      <p>{post.likes}</p>
      <div>
        {post.comments.map((comment) => (
          <p key={comment._id}>{comment.body}</p>
        ))}
      </div>

      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default PostDetails;
