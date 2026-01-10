import React, { useState } from "react";
import LoginBtn from "./components/LoginBtn";
import LogoutBtn from "./components/LogoutBtn";

const App = () => {
  const [isLogIn, setLogIn] = useState(true);

  // return <div>{isLogIn ? <LogoutBtn /> : <LoginBtn />}</div>;

  if (isLogIn) {
    return <LogoutBtn />;
  } else {
    return <LoginBtn />;
  }
};

export default App;
