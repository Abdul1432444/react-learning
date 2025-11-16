import React from "react";
import "./button.css";

const button = (props) => {
  return (
    <div className="container">
      <div>{props.children}</div>
      <button onClick={props.sets}>{props.text}</button>
    </div>
  );
};

export default button;
