import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import { useState } from "react";

export default function App() {
  const [color, SetColor] = useState("");
  return (
    <>
      <div
        className="className w-full h-screen duration-200"
        style={{ background: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
          <div
            className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl
          "
          >
            <button
              onClick={() => SetColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => SetColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => SetColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => SetColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "Orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => SetColor("Yellow")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ background: "Yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => SetColor("White")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ background: "white" }}
            >
              White
            </button>
            <button
              onClick={() => SetColor("Black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => SetColor("Pink")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ background: "Pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => SetColor("Lavender")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ background: "Lavender" }}
            >
              Lavender
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

//export default App;
