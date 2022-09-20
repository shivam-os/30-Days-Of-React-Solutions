import React from "react";
import Profile from "./components/Profile.js";
import {useState} from "react";

export default function App() {

  const [darkMode, setDarkMode] = useState(false);

  function toggleMode() {
    setDarkMode(prevMode => !prevMode);
  }

  const style = {
    backgroundColor: darkMode ? "#0f172a" : "#FFFFFF",
    color: darkMode ? "#FFFFFF" : "#000000"
  }

  return (
    <div className="container" style={style}>
      <h1>Welcome To 30 Days Of React</h1>
      <p className="subtitle">Get started with JavaScript library React!</p>
      <hr />
      <Profile handleClick={toggleMode}/>
      <hr />
    </div>
  );
}