import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <>
      <div>About Page</div>

      <button onClick={handleClick}>Move to home page</button>
    </>
  );
};

export default About;
