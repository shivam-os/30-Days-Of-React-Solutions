import React from "react";

export default function Profile(props) {
  return (
    <div className="profile--section">
      <p>Prerequisites to get started with React:</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <button onClick={props.handleClick}>Change background!</button>
    </div>
  );
}