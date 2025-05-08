import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/dashboard");
  }
  return (
    <>
      <div>Home Page</div>
      <button onClick={handleClick}>Move to Dashboard Page</button>
    </>
  );
};

export default Home;
