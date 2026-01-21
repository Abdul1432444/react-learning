import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function handleIncment() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }
  function handleZero() {
    setCount(0);
  }
  return (
    <div>
      <h1 className="flex place-content-center text-2xl">Counter App</h1>
      <h1 className="flex place-content-center mt-3 text-2xl transition-all duration-600 ease-in-out">
        {count}
      </h1>
      <br />
      <div
        className="flex flex-row place-content-center 
      gap-5 "
      >
        <button
          className="border p-1 rounded bg-blue-500 "
          onClick={handleIncment}
        >
          Increment
        </button>
        <button
          className="border p-1 rounded bg-cyan-500"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="border p-1 rounded bg-pink-500 "
          onClick={handleZero}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
