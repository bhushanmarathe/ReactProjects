import React from "react";

const Card = (props) => {
  return (
    <div>
      Hello {props.name}
      {props.children}
    </div>
  );
};

export default Card;
