import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div>
      {props.children}
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  );
};

export default Card;
