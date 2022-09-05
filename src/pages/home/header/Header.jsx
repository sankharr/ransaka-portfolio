// packages
import React from "react";
import { useNavigate } from "react-router-dom";

// styling
import "./Header.scss";

// assets
import propic from "../../../assets/propic.jpeg";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="Header">
      <div className="Header__mainSection">
        <img src={propic} className="Header__mainImage" />
        <div className="Header__leftSection">
          <p>I am</p>
          <p>Ransaka Ravihara</p>
          {/* <p>Contemplative coder and analyst. Inspired by tough problems.</p> */}
          <button onClick={()=>navigate('/portfolio')}>My Projects</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
