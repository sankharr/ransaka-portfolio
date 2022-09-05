// packages
import React, { useEffect } from "react";
import ReactGA from "react-ga";

// styling
import "./Portfolio.scss";

// assets
import gitImage from "../../assets/git.png";
import kaggleImg from "../../assets/kaggle.png";

const projectData = [
  {
    title: "Forecasting experiments",
    description:
      "Forecasting plays a massive role in retail,telecommunication and more industries. We all can agree that forecasting the future is not an easy task. Due to that reason, unlike other machine learning approaches, forecasting requires special kind of methods. For me, forecasting is a fascinating whole new area of machine learning. This repo aims to experiment with different algorithms, modelling techniques, and preprocessing steps and improve the quality of forecasting results.",
    date: "May 14, 2022",
    link: "https://github.com/Ransaka/MyForecastingRepo",
    icon: gitImage
  },
  {
    title: "Sinhala Next Character Prediction - Pytorch",
    description:
      "I implemented an LSTM network for predicting the next Sinhala character. The dataset I scraped from Sinhala news websites. This model was built when I was learning RNNs.",
    date: "November 30, 2021",
    link: "https://www.kaggle.com/code/ransakaravihara/sinhala-next-character-prediction-pytorch",
    icon: kaggleImg
  },
  {
    title: "Product Recommendations based on item similarity",
    description:
      "In this project, I implemented recommender systems based on item similarities. The basic idea grabbed from Spotify annoy opensource library.",
    date: "February 26, 2022",
    link: "https://www.kaggle.com/code/ransakaravihara/item-similarity-for-content-based-recommendation",
    icon: kaggleImg
  },
];

const Projects = () => {
  return (
    <div className="Projects">
      {projectData.map((item) => (
        <div className="Projects__listItem" key={item.title}>
          <img src={item.icon} />
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Ransaka Ravihara on {item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Portfolio = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <div className="Portfolio__banner">
        <h1>Projects</h1>
        <p>
          <span>Home</span> -> Projects
        </p>
      </div>
      <Projects />
    </>
  );
};

export default Portfolio;
