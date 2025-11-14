import React from "react";
import "./Usercard.css";

const Usercard = (props) => {
  return (
    <div className="card">
      <p className="card-name">{props.name}</p>
      <img src={props.image} alt={props.name} />
      <p className="description">
        This is a very good-looking <br></br> plant forever.
      </p>
    </div>
  );
};

export default Usercard;
