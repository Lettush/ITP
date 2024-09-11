import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error.message));
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <hr />
          <p>{post.title}</p>
          <p>{post.author}</p>
          <p>{post.description}</p>
          <p>{post.likes}</p>
          <div>
            {post.comments.map((comment) => (
              <p key={comment._id}>{comment.body}</p>
            ))}
          </div>
          <Link to={`/${post._id}`}>More details {">>"}</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
