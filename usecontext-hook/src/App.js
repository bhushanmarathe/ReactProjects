import ChildA from "./components/ChildA";
import { createContext, useState } from "react";
import "./App.css";

//Steps1:
//1) create context
//2) Provide context
//3) consume context

//1) create context
//2) wrap all the child inside a provider
//3) pass value
//4) consumer ke andar jaake consume kar lo

//solves issue of prop drilling i.e if I want to pass data from parent to child C so, instead
//of passing the data to multiple child i can create a context and then pass the provider
//to which i want to provide.

const userContext = createContext(); //Step1: create Context

const ThemeContext = createContext(); //Step1: create Contex
function App() {
  const [user, setUSer] = useState({ name: "Bhushan" }); //step3: pass value

  const [theme, setTheme] = useState("light");

  //step4: consumer ke andar jaake consume kar lo

  //step2: wrap all the childs inside a provider
  return (
    <>
      <userContext.Provider value={user}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div
            id="container"
            style={{
              backgroundColor: theme === "light" ? "beige" : "darkblue",
            }}
          >
            //list of child and components where i want to access my data should
            be wrap under userprovider
            <ChildA />
          </div>
        </ThemeContext.Provider>
      </userContext.Provider>
    </>
  );
}

export default App;
export { userContext };

export { ThemeContext };
