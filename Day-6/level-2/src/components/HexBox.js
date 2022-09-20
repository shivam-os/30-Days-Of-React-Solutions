import React from "react";

export default function HexBox(props) {

  const style = {backgroundColor: props.value};

  return (
    <div className="hex-box" style={style}>
      {props.value}
    </div>
  );
}