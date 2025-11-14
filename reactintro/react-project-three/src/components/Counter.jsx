import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <p id="num">{count}</p>

      <button
        id="count-btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count
      </button>
      <button
        id="reset-btn"
        onClick={() => {
          setCount(count * 0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
