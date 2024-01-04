import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function incerment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count === 0) {
      setCount(count);
    } else {
      setCount(count - 1);
    }
  }
  return (
    <div>
      <h1>Counter</h1>

      <h2>{count}</h2>

      <button onClick={incerment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
