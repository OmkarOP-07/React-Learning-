import logo from "./logo.svg";
import "./App.css";
import {useState} from "react";

function App() {
  const [value, setValue] = useState(0)
  return (
    <div className="App">
      <div className="App">
        <div className="value">{value}</div>
      </div>
      <button onClick ={()=>{
        setValue(value + 1)
      }}> Increase</button>
    </div>
  );
}

export default App;
