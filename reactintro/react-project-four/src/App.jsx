import React, { useState } from "react";
import Button from "./components/button";

const App = () => {
  const [count, setcount] = useState(0);
  function sets() {
    setcount(count + 1);
  }
  return (
    <div>
      <Button text="click me" sets={sets}>
        <h1>{count}</h1>
      </Button>
    </div>
  );
};

export default App;
