import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [emotion, setEmotion] = useState("happy"); //emotion is a state variable and seEmotion is a function used to set emotion.

  useEffect(() => {
    console.log(`It is ${emotion} right now`);
  }, []);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Current emotion is {emotion}.</h1>
      <button onClick={() => setEmotion("sad")}>Make me sad</button>
      <button onClick={() => setEmotion("Excited")}>Make me excited</button>
    </div>
  );
}

export default App;
