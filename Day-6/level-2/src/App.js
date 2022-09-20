import React from "react";
import Number from "./components/Number.js";
import Colors from "./components/Colors.js";

export default function App() {
  return (
    <div className="container">
      <h1>30 Days Of JavaScript</h1>
      <hr />
      <Number />
      <hr />
      <Colors />
    </div>
  );
}
