// packages
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// styling
import "./Navbar.scss";

// icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// components
import useAnalyticsEventTracker from "../../hooks/useAnalyticsEventTracker";

// assets
import downloadFile from '../../assets/Resume - Ransaka.pdf';

const navItemsArray = ["Home", "About", "Projects", "Articles", "Certifications"];

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navigate = useNavigate();
  const gaEventTracker = useAnalyticsEventTracker("Navbar");

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
              onClick={() => {
                navigate(`/${item.toLowerCase()}`);
                gaEventTracker(item);
              }}
            >
              {item}
            </div>
          ))}
          {/* <div
            className="Navbar__downloadResume"
            onClick={() => gaEventTracker("downloadResume")}
          >
            Resume
          </div> */}
          <div className="Navbar__downloadResume">
            <a
              href={downloadFile}
              download="Ransaka_Ravihara_Resume"
              target="_blank"
              rel="noreferrer"
              onClick={() => gaEventTracker("downloadResume")}
            >
              <div>Download CV</div>
            </a>
          </div>
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
