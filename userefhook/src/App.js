import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  //const [count, setCount] = useState(0);

  //let val = useRef(0);
  //1) if i don't want to change any value in the UI, but should be changed internally then use useRef
  //2) we can directly attach the useref to the DOM element, and then we can directly change its value
  //without using any id or classname as we did in the javascript

  // let btnRef = useRef();

  // function handleClick() {
  //   val.current = val.current + 1;
  //   console.log("Current val", val);

  //   setCount(count + 1);
  // }

  // useEffect(() => {
  //   console.log("mai fir se render ho gaya hu");
  // }, [count]);

  // function changeColor() {
  //   btnRef.current.style.backgroundColor = "red";
  // }

  const [time, setTime] = useState(0);

  let timeRef = useRef(null);
  function onStarttime() {
    timeRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 10);
  }

  function onStoptime() {
    clearInterval(timeRef.current);
    timeRef.current = null;
  }

  function onResettime() {
    onStoptime();
    setTime(0);
  }
  return (
    <>
      {/* <button onClick={handleClick} ref={btnRef}>
        Increment
      </button>
      <br />
      <br />

      <button onClick={changeColor}>Change color of 1st button</button>

      <div>Count:{count}</div> */}

      <h1>StopWatch: {time} seconds</h1>
      <button onClick={onStarttime}>Start</button>
      <br />
      <br />

      <button onClick={onStoptime}>Stop</button>
      <br />
      <br />

      <button onClick={onResettime}>Reset</button>
      <br />
      <br />
    </>
  );
}

export default App;
