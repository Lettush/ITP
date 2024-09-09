import { useState, useEffect } from "react";

const Hooks2 = () => {
  const [count, setCount] = useState(0);

  // useEffect = Allows us to run code on window load
  useEffect(() => {
    // Mounting AKA updating elements with the new state
    console.log("Component updated.");

    // Unmounting AKA updates are done :)
    return () => {
      console.log("Component will now go outside of useEffect.");
    };
  }, []); // dependency = when state changes, useEffect will fire up ONLY for these states, IF EMPTY, it's pretty much a window.onload function

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Hooks2;
