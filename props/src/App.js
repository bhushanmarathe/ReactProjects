import { useState } from "react";
import "./App.css";
import "./components/Card";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      {/* <Card name="Bhushan Marathe">
        <h1>Web Dev Course</h1>

        <p>Trying to be consistent</p>
        <p>Will complete soon</p>
      </Card> */}
      <Button incrementCount={handleClick} text="Click me">
        <h1>{count}</h1>
      </Button>
    </div>
  );
}

export default App;
