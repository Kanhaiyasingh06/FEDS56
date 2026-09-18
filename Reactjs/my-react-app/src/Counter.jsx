import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "red" }}>Counter Demonstration</h1>

      <h2>Count: {count}</h2>

      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "6px 12px",
          border: "none",
          cursor: "pointer",
          margin: "5px"
        }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <button
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "6px 12px",
          border: "none",
          cursor: "pointer",
          margin: "5px"
        }}
        onClick={() => setCount(count - 1)}
      >
        Decrease
      </button>

      <button
        style={{
          backgroundColor: "gray",
          color: "white",
          padding: "6px 12px",
          border: "none",
          cursor: "pointer",
          margin: "5px"
        }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;