// packages
import React from "react";

// styling
import "./Navbar.scss";

// assets


const navItemsArray = ["Home", "About", "Portfolio"];

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar__navbar">
        <div className="Navbar__logo">R. Ravihara</div>
        <div className="Navbar__navItemsSection">
          {navItemsArray.map((item) => (
            <div className="Navbar__navButton" key={item}>
              {item}
            </div>
          ))}
          <div className="Navbar__downloadResume">Resume</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;