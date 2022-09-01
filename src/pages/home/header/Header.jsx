// packages
import React from "react";

// styling
import "./Header.scss";

// assets
import propic from "../../../assets/propic.jpeg";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__mainSection">
        <img src={propic} className="Header__mainImage" />
        <div className="Header__leftSection">
          <p>I am</p>
          <p>Ransaka Ravihara</p>
          <p>Contemplative coder and analyst. Inspired by tough problems.</p>
          <button>My Projects</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
