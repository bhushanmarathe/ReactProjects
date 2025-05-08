import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  //create state
  //manage state
  //change state
  //sabhi child ko sync karwa dunnga

  const [name, setName] = useState("");
  return (
    <div>
      <Card title="Card1" name={name} setName={setName} />
      <Card title="Card2" name={name} setName={setName} />
      {/* <p>I am in parent Component : {name}</p> */}
    </div>
  );
}

export default App;
