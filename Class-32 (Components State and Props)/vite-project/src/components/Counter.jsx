import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [factor , setFactor] = useState(1)

  function incerment() {
    setCount(count + factor);
  }
 
  function decrement() {
    if (count === 0) {
      setCount(count);
    } else {
      setCount(count - factor);
    }
  }

  function incermentFactor(){
    setFactor(factor+1)
  }

  function decrementFactor(){
    setFactor(factor-1)
  }


  return (
    <div>
      <h1>Counter</h1>

      <h2>{count}</h2>

      <button onClick={incerment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h3>Factor : {factor}</h3>
      <button onClick={incermentFactor}>Increment Factor</button>
      <button onClick={decrementFactor}>Decrement Factor</button>
    </div>
  );
}

export default Counter;
