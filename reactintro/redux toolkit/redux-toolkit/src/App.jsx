import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./feature/counter/CounterSlice";

const App = () => {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function handleIncrementClick() {
    dispatch(increment());
  }
  function handleDecrementClick() {
    dispatch(decrement());
  }
  function handleResetClick() {
    dispatch(reset());
  }
  function handleIncAmountClick() {
    dispatch(incrementByAmount(amount));
  }
  return (
    <div className="container">
      <button onClick={handleIncrementClick}>+</button>
      <p>Count:{count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <br />
      <button onClick={handleResetClick}>Reset</button>
      <br />
      <input
        type="number"
        placeholder="Enter Value"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <button onClick={handleIncAmountClick}>
        Inc the Count Value by Input
      </button>
    </div>
  );
};

export default App;
