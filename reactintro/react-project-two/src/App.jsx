import { useState } from "react";
import "./App.css";
import Usercard from "./components/UserCard";
import cherryplant from "./images/cherryplant.jpg";
import flowers from "./images/flowers.jpg";
import seaview from "./images/seaview.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Usercard name="Cherry" image={cherryplant}></Usercard>
        <Usercard name="Flowers" image={flowers}></Usercard>
        <Usercard name="Seaview" image={seaview}></Usercard>
      </div>
    </>
  );
}

export default App;
