// packages
import React from "react";

// styling
import "./Updates.scss";

// data
import uocWebinar from "../../../assets/updates/dialog webinar.jpeg";
import rankProductTDS from "../../../assets/updates/learningToRank.jpeg";

const updatesArray = [
  {
    description:
      "Happy to share my experience with young data enthusiasts at University of Colombo Stat Circle. Thank you Dialog Axiata PLC for the opportunity.",
    image: uocWebinar,
    date: "09th September 2022",
    link: "",
  },
  {
    description:
      "Published an article in Towards Data Science on learning to rank for product recommendations",
    image: rankProductTDS,
    date: "03rd September 2022",
    link: "https://towardsdatascience.com/learning-to-rank-for-product-recommendations-a113221ad8a7",
  },
];

const UpdateTile = ({ description, image, date, link }) => {
  return (
    <div className="UpdateTile">
      <h4>{description}</h4>
      {link === "" ? (
        <img src={image} />
      ) : (
        <a href={link} target="_blank">
          <img src={image} />
        </a>
      )}
      {/* <a href={link}>
        <img src={image} />
      </a> */}
      <p>{date}</p>
    </div>
  );
};

const Updates = () => {
  return (
    <div className="Updates">
      <h1>Latest Updates</h1>
      {updatesArray.map((item, index) => (
        <UpdateTile
          key={item.date + String(index)}
          description={item.description}
          image={item.image}
          date={item.date}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default Updates;
