import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/* Hexadecimal random color generator */
const randomHexGenerator = () => {
  let hexValues = "0123456789ABCDEF";
  let color = "";
  for (let i = 0; i < 6 ; i++){
    let position = Math.floor(Math.random() * 16);
    color += hexValues[position];
  }
  return "#" + color;
};

function HexColorBox() {
  let hexColor = randomHexGenerator();

  return (
  <div className="color-box" style={{backgroundColor: `${hexColor}`}}>{hexColor}</div>
  );
}

function ColorsContainer() {
  return (
    <div class="colors-container">
      <HexColorBox />
      <HexColorBox />
      <HexColorBox />
      <HexColorBox />
      <HexColorBox />
    </div>
  )
}

/* */

function Page() {
  return (
    <ColorsContainer />
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);