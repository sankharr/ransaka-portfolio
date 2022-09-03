// packages
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// styling
import "./Navbar.scss";

// icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// assets

const navItemsArray = ["Home", "About", "Portfolio"];

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="Navbar">
      <div className="Navbar__navbar">
        <AiOutlineMenu
          className={
            isNavExpanded ? "Navbar__menuIcon whitewashed" : "Navbar__menuIcon"
          }
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        />

        <div className="Navbar__logo">R. Ravihara</div>
        <div
          className={
            isNavExpanded
              ? "Navbar__navItemsSection--mobile"
              : "Navbar__navItemsSection"
          }
        >
          <AiOutlineClose
            className={"Navbar__closeIcon"}
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          />
          {navItemsArray.map((item) => (
            <div
              className="Navbar__navButton"
              key={item}
              onClick={() => navigate(`/${item.toLowerCase()}`)}
            >
              {item}
            </div>
          ))}
          <div className="Navbar__downloadResume">Resume</div>
        </div>
        {/* <div className="Navbar__navItemsSection--mobile">
          {navItemsArray.map((item) => (
            <div
              className="Navbar__navButton"
              key={item}
              onClick={() => navigate(`/${item.toLowerCase()}`)}
            >
              {item}
            </div>
          ))}
          <div className="Navbar__downloadResume">Resume</div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
