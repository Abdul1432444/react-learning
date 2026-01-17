import React, { useCallback, useState } from "react";
import "./App.css";
import ChildComponent from "./components/childComponent";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <br />
      <button onClick={handleClick}>Increment</button>
      <br />
      <ChildComponent buttonName="Click Me" onClick={handleClick} />
    </div>
  );
};

export default App;
