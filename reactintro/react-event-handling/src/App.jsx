import React from "react";

const App = () => {
  function handleClick() {
    alert("hello I have clicked right now");
  }
  function para() {
    alert("ta para mande mouse rawastu khyal ko kana wa");
  }
  return (
    <div>
      <p onMouseOver={para} className="para">
        para
      </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
