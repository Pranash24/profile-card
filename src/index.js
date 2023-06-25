import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import imgSrc from "./images/Afbeelding1.png";

function App() {
  return (
    <div className="card">
      <ProfileImage />
      <div className="data">
        <Main />
        <Skilllist />
      </div>
    </div>
  );
}

function ProfileImage() {
  return <img className="avatar" src={imgSrc} alt="Pranash" />;
}

function Main(props) {
  return (
    <div>
      <Bio
        naam="Pranash Sri Pathmarajah"
        bio="Student at Windesheim university in Almere, the Netherlands. Currently a freshman and studying to become a full stack developer."
        foto="images/IMG_9387.jpg"
      />
    </div>
  );
}

function Bio(props) {
  return (
    <div>
      <h2>{props.naam}</h2>
      <p>{props.bio}</p>
    </div>
  );
}
function Skilllist() {
  return (
    <div className="skill-list">
      <Skill languages="Java" color="orange" />
      <Skill languages="PHP" color="yellow" />
      <Skill languages="Python" color="purple" />
      <Skill languages="HTML + CSS" color="green" />
      <Skill languages="SQL" color="blue" />
      <Skill languages="React" color="red" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.languages}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
