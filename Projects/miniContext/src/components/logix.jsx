import React, { useState, useContext } from "react";
import userContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(userContext);
  const handleClick = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {"  "}
      <input
        type="text"
        placeholder="pasworrd"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default Login;
