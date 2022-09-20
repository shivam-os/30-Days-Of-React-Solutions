import React from "react";

export default function Box(props) {

  function isPrime(num) {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  let color;
  if (props.num === 0) {
    color = "#21bf73";
  } else if (props.num === 1) {
    color = "#fddb3a";
  } else if(isPrime(props.num)) {
    color = "#fd5e53"; //red
  } else if (props.num % 2 === 0 || props.num === 0) {
    color = "#21bf73"; //green
  } else {
    color = "#fddb3a"; //yellow
  }

  const style = {backgroundColor: color};

  return (
    <div className="box" style={style}>
      {props.num}
    </div>
  );
}