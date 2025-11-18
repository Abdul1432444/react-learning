import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <Card title="card 1" name={name} setName={setName} />
      <Card title="card 2" name={name} setName={setName} />
      <p>Here is the data of child{name}</p>
    </div>
  );
};

export default App;
