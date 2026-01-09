import React, { useState } from "react";
import Card from "./components/Card";
const App = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <Card handleClick={handleClick} text="Click Me">
        <h1>{count}</h1>
      </Card>
    </div>
  );
};

export default App;
