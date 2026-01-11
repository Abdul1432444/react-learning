import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  // useEffect(() => {
  //   alert("useeffect will use on every render");
  // });
  useEffect(() => {
    alert("here it will use only when the count value is updated");
  }, [count]);
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Click Me </button>
    </div>
  );
};

export default App;
