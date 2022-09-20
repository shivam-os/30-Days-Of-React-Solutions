import HexBox from "./HexBox";
import React from "react";

export default function Colors() {

  function generateHexa() {
    const hexValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let hexColor = "";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * 15);
      hexColor += "" + hexValues[index];
    }
    return(`#${hexColor}`);
  }

  //Generate array of hex colors
  let hexArray = [];
  for (let i = 0; i < 32; i++) {
    let temp = generateHexa();
    hexArray.push(temp);
  }

  const hexBoxes = hexArray.map((color, index) => <HexBox key={index} value={color}/>);

  return (
    <div className="colors-container">
      <h2>Hexadecimal Colors</h2>
      <div className="colors-box-container">
        {hexBoxes}
      </div>
    </div>
  );
}