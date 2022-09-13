import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import cssLogo from "./images/css_logo.png";
import htmlLogo from "./images/html_logo.png";
import reactLogo from "./images/react_logo.png";

const images = (
  <div className="images-box">
    <img src={cssLogo}/>
    <img src={htmlLogo}/>
    <img src={reactLogo}/>
  </div>
);

const header = (
  <header>
    <h1 id="heading">Subscribe</h1>
    <p id="heading-paragraph">Sign up with your email address to receive news & updates</p>
  </header>
);

const userInputs = (
  <div className="input-area">
    <input className="input-box" type="text" placeholder="First name"/>
    <input className="input-box" type="text" placeholder="Last name" />
    <input className="input-box" type="email" placeholder="Email"/>
  </div>
);

const subscribe = (
  <button>Subscribe</button>
);

const page = (
  <div className="page">
    {header}
    {userInputs}
    {subscribe}
    {images}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(page);