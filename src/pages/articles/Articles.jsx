// packages
import React, { useEffect } from "react";
import ReactGA from "react-ga";

// styling
import "./Articles.scss";

// assets
import tdsImg from "../../assets/tds.png";
import mediumImg from "../../assets/medium2.jpeg";

const articlesData = [
  {
    title: "Learning to Rank for Product Recommendations",
    description:
      "This article will go through how to use the popular XGBoost library for Learning-to-rank(LTR) problems",
    date: "September 03, 2022",
    link: "https://towardsdatascience.com/learning-to-rank-for-product-recommendations-a113221ad8a7",
    icon: tdsImg,
  },
  {
    title: "Introduction to time series data",
    description:
      "An introduction to using time series data for forecasting problems",
    date: "April 13, 2022",
    link: "https://towardsdatascience.com/understand-the-time-series-data-cd9746d3df62",
    icon: tdsImg,
  },
  {
    title: "Sparse Matrices— What, When, and Why",
    description:
      "This will show the importance of using the right data types for your problem.",
    date: "March 19, 2022",
    link: "https://ransakaravihara.medium.com/sparse-matrices-what-when-and-why-b2271af1fd68",
    icon: mediumImg,
  },
];

// const Articles = () => {
//   return (
//     <div className="Articles">
//       {articlesData.map((item) => (
//         <div className="Articles__listItem" key={item.title}>
//           <img src={item.icon} />
//           <div>
//             <h3>{item.title}</h3>
//             <p>{item.description}</p>
//             <p>Ransaka Ravihara on {item.date}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

const Articles = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <div className="Articles__banner">
        <h1>Articles</h1>
        <p>
          <span>Home</span> -> Articles
        </p>
      </div>
      <div className="Articles">
        {articlesData.map((item) => (
          <div className="Articles__listItem" key={item.title}>
            <img src={item.icon} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Ransaka Ravihara on {item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Articles;
