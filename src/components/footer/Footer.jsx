// packages
import React from "react";

// styling
import "./Footer.scss";

// icons
import { FaMedium, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <h3>Follow Me</h3>
      <p>Let's be social</p>
      <div>
        <a href="https://ransakaravihara.medium.com/" target="_blank">
          <FaMedium />
        </a>
        <a href="https://www.linkedin.com/in/ransaka/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Ransaka" target="_blank">
          <FaGithub />
        </a>
      </div>
      <p>&copy; 2022 - Ransaka Ravihara</p>
    </div>
  );
};

export default Footer;
