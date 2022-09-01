// packages
import React from "react";

// styling
import "./Header.scss";

// assets
import propic from "../../../assets/propic.jpeg";

const navItemsArray = ["Home", "About", "Portfolio"];

const Header = () => {
  return (
    <div className="Header">
      {/* <div className="Header__navbar">
        <div className="Header__logo">R. Ravihara</div>
        <div className="Header__navItemsSection">
          {navItemsArray.map((item) => (
            <div className="Header__navButton" key={item}>
              {item}
            </div>
          ))}
          <div className="Header__downloadResume">Resume</div>
        </div>
      </div> */}

      <div className="Header__mainSection">
        <img src={propic} className="Header__mainImage" />
        <div className="Header__leftSection">
          <p>I am</p>
          <p>Ransaka Ravihara</p>
          <p>
            An enthusiastic and motivated Data Scientist with a strong
            background in Computer Science honed from a very young age and
            passionate about driving value to businesses through data analytics
            and machine learning algorithms.
          </p>
          <button>My Projects</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
