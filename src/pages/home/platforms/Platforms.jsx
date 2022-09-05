// packages
import React from "react";

// styling
import "./Platforms.scss";

// assets
import mediumImg from "../../../assets/medium2.jpeg";
import gitImg from "../../../assets/git.png";
import stackoverflowImg from "../../../assets/stack-overflow.svg";
import kaggleImg from "../../../assets/kaggle.png";

const Platforms = () => {
  return (
    <div className="Platforms">
      <h1>Other Platforms</h1>
      <div className="Platforms__cardArray">
        <a
          className="Platforms__card"
          href="https://github.com/Ransaka"
          target="_blank"
        >
          <img src={gitImg} />
          <h3>Github</h3>
          {/* <p>My base of operations for all things code</p> */}
        </a>
        <a
          className="Platforms__card"
          href="https://ransakaravihara.medium.com/"
          target="_blank"
        >
          <img src={mediumImg} />
          <h3>Medium</h3>
          {/* <p>Where I write stuff</p> */}
        </a>
        <a
          className="Platforms__card"
          href="https://stackoverflow.com/users/11745014/ransaka-ravihara"
          target="_blank"
        >
          <img src={stackoverflowImg} />
          <h3>StackOverFlow</h3>
          {/* <p>My base of operations for all things code</p> */}
        </a>
        <a
          className="Platforms__card"
          href="https://www.kaggle.com/ransakaravihara"
          target="_blank"
        >
          <img src={kaggleImg} />
          <h3>StackOverFlow</h3>
          {/* <p>My base of operations for all things code</p> */}
        </a>
      </div>
    </div>
  );
};

export default Platforms;
