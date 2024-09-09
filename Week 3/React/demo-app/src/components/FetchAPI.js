import { useState, useEffect } from "react";

const FetchAPI = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );

        if (!response.ok) throw new Error("Failed to fetch data!");

        const payload = await response.json();
        setData(payload);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ul>
        {data.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : undefined}>
            {todo.id} | {todo.title} | {todo.userId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchAPI;
