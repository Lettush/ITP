/* 
    Stateful vs Stateless
    Stateful - values or code that can change in realtime (i.e. counters)
    Statelss - values or code that NEVER change (i.e. plain info)
*/

/* 
    Hooks: Custom functions for STATEFUL code, normally start with 'use'
*/
import React, { useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Click me!</button>
    </div>
  );
};

export default Hooks;
