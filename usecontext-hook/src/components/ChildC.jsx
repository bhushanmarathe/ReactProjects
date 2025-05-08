import React, { createContext, useContext } from "react";
import { userContext } from "../App";
import { ThemeContext } from "../App";

const ChildC = () => {
  const user = useContext(userContext);
  const { theme, setTheme } = useContext(ThemeContext);
  // return <div>{user.name}</div>;

  function handleClick() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <>
      <button onClick={handleClick}>Change Theme</button>
      {user.name}
    </>
  );
};

export default ChildC;
