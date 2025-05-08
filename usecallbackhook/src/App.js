import "./App.css";
import { useCallback, useState } from "react";
import ChildComponent from "./components/ChildComponent.jsx";

function App() {
  const [count, setCount] = useState(0);

  // function handleClick() {
  //   setCount(count + 1);
  // }

  const handleClick = useCallback(() => {
    //function freeze ho gaya hai
    setCount(count + 1);
  }, []);
  return (
    <>
      <div>Count:{count}</div>

      <button onClick={handleClick}>Click me</button>
      <br />
      <br />
      <div>
        <ChildComponent buttonName="clickME" handleClick={handleClick} />
      </div>
    </>
  );
}

export default App;
