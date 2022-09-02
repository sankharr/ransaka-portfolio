// packages
import React from "react";
import { useNavigate } from "react-router-dom";

// styling
import "./Navbar.scss";

// assets


const navItemsArray = ["Home", "About", "Portfolio"];

const Navbar = () => {

    const navigate = useNavigate();

  return (
    <div className="Navbar">
      <div className="Navbar__navbar">
        <div className="Navbar__logo">R. Ravihara</div>
        <div className="Navbar__navItemsSection">
          {navItemsArray.map((item) => (
            <div className="Navbar__navButton" key={item} onClick={() => navigate(`/${item.toLowerCase()}`)}>
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