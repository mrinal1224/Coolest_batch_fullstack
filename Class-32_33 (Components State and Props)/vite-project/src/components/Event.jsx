import React from "react";

function Event() {
  function handleClick() {
    console.log("Button Clicked");
  }

  return (
    <div>
      <h1>Event handling</h1>

      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Event;
