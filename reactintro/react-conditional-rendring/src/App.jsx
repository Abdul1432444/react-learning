import React, { useState } from "react";
import LoginBtn from "./components/LoginBtn";
import LogoutBtn from "./components/LogoutBtn";

const App = () => {
  const [isLogIn, setLogIn] = useState(false);
  if (!isLogIn) {
    return <LoginBtn />;
  }

  return (
    <div>
      <h1>welcome to the code dev</h1>
      <div>{isLogIn && <LogoutBtn />}</div>{" "}
    </div>
  );

  // return <div>{isLogIn ? <LogoutBtn /> : <LoginBtn />}</div>;

  // if (isLogIn) {
  //   return <LogoutBtn />;
  // } else {
  //   return <LoginBtn />;
  // }
};

export default App;
