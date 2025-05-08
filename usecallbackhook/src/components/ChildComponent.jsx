import React from "react";

// const ChildComponent = (props) => {
//   console.log("child component rerendered");

//   return (
//     <div>
//       <button>{props.buttonName}</button>
//     </div>
//   );
// };

const ChildComponent = React.memo((props) => {
  console.log("child component rerendered");

  return (
    <div>
      <button onClick={props.handleClick}>{props.buttonName}</button>
    </div>
  );
});

export default ChildComponent;

//React.memo->wrap->component-> component rerender tabhi hoga jab props change honge.
//otherwise rerender nai hoga

//if you are sending a function, then react.memo wont be able to save you from rerendering
