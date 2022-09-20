import React from "react";
import Box from "./Box.js";

export default function Number(){

  //Create an array containing numbers from 0 to 31
  let numArray = [];
  for (let i=0; i < 32; i++) {
    numArray.push(i);
  }

  const boxArray = numArray.map((num) => <Box num={num} key={num}/>);

  return (
    <div className="number-container">
      <h2>Number Generator</h2>
      <div className="boxes-container">{boxArray}</div>
    </div>
  );
}