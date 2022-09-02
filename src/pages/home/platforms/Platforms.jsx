// packages
import React from "react";

// styling
import "./Platforms.scss";

// assets
import sampleImg from "../../../assets/medium2.jpeg";

const Platforms = () => {
  return (
    <div className="Platforms">
      <h1>Other Platforms</h1>
      <div className="Platforms__cardArray">
        <div className="Platforms__card">
          <img src={sampleImg} />
          <h3>Github</h3>
          <p>My base of operations for all things code</p>
        </div>
        <div className="Platforms__card">
          <img src={sampleImg} />
          <h3>Medium</h3>
          <p>Where I write stuff</p>
        </div>
      </div>
    </div>
  );
};

export default Platforms;
