import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [name, setname] = useState("Omkar");
  const [login, setLogin] = useState({email: "email", pass:"pass "})
  const [bgcolor, setBgcolor] = useState("bg-white")
  const clickFunct = () => {
    alert("Button is clicked");
  };
  // const mouseHover = () => {
  //  // alert("Div is hovered ");
  //   setBgcolor("bg-pink-300")
  // };
  const changediv = (e) => {
    //setname(e.target.value);
    setLogin({...login, [e.target.name]:e.target.value}) // change the name attrinbute email and pass given at each div
    console.log(login)
  };
  const reset = (e) => {
    //setname(e.target.value);
    setLogin({email : "", pass : ""})
    console.log(login)
  };

  return (
    <>
      <div>
        <button onClick={clickFunct}>Click me</button>
        <div className={`${bgcolor} border rounded-xl p-2 mt-0.5`} onMouseEnter={() => setBgcolor("bg-purple-200")} onMouseLeave={() => setBgcolor("bg-pink-200")}>
          Hover effect
        </div>
        <br/>
          <input className={`bg-gray-300 rounded-[0.5rem] p-1 m-1`} type="text" name="email"  value={login.email} onChange={changediv }/>
          <input className="bg-gray-300 rounded-[0.5rem] p-1  m-1" type="text" name="pass"  value={login.pass} onChange={changediv}/>
          <button onClick={reset}>clear</button>
      </div>
    </>
  );
}

export default App;
