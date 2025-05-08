import "./App.css";
import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [input, setInput] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function expensiveTask(num) {
    console.log("Inside Expensive");
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }

  let doubleValue = useMemo(() => expensiveTask(input), [input]);

  return (
    <>
      <button onClick={handleClick}>Increment</button>
      <br />
      <br />

      <div>Count:{count}</div>

      <input
        type="number"
        placeholder="enter number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div>Double:{doubleValue}</div>
    </>
  );
}

export default App;
