import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <button>{props.buttonName}</button>
    </div>
  );
};

export default ChildComponent;
