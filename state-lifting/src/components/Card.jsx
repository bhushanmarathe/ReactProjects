import React from "react";

const Card = (props) => {
  return (
    <div>
      {/* Hello : {props.name} */}
      <input type="text" onChange={(e) => props.setName(e.target.value)} />
      <p>
        {" "}
        Value inside {props.title}: {props.name}{" "}
      </p>
    </div>
  );
};

export default Card;
