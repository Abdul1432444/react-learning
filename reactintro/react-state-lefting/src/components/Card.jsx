import React, { useState } from "react";

const Card = (props) => {
  return (
    <div>
      <input type="text" onChange={(e) => props.setName(e.target.value)} />
      <p>
        This a paragraph in which data is stored of {props.title} and data:
        {props.name}
      </p>
    </div>
  );
};

export default Card;
