import { useState } from "react";
import "./App.css";
import Usercard from "./components/Usercard";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">Hello This Is another react app</div>
    </>
  );
}

export default App;
