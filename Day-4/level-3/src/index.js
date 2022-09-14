import React from "react";
import ReactDOM from "react-dom/client";
import asabenehPic from "./images/asabeneh.jpg";
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
    <div className="colors-container">
      <HexColorBox />
      <HexColorBox />
      <HexColorBox />
      <HexColorBox />
      <HexColorBox />
    </div>
  )
}

/* User Card */
function UserProfile() {
  return (
    <div>
      <img className="user-profile" src={asabenehPic} />
      <p className="user-name">ASABENEH YETAYEH</p>
      <p className="subtitles">Senior Developer, Finland</p>
    </div>
  )
}

let skills = ["HTML", "CSS", "Sass", "JS", "React", "Redux", "Node", "MongoDB", "Python", "Flask", "Django", "NumPy", "Pandas", "Data Analysis", "MYSQL", "GraphQL", "Gatsby", "Docker", "Heroku", "Git"];

const SkillsBox = skills.map((skill) => <div className="skills-box" key={skill}>{skill}</div>);

function UserSkills() {
  return (
    <div>
      <h2>Skills</h2>
      {SkillsBox}
      <p className="subtitles">Joined on Sept 14, 2022</p>
    </div>
  )
}

function UserCard() {
  return (
    <div className="user-card">
      <UserProfile />
      <UserSkills />
    </div>
  )
}

/* Rendering the componenets */

function Page() {
  return (
    <div>
      <ColorsContainer />
      <hr />
      <UserCard />
    </div>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);