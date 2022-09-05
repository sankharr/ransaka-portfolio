// packages
import React from "react";
import { useNavigate } from "react-router-dom";

// styling
import "./Personal.scss";

const Personal = () => {
  const navigate = useNavigate();
  return (
    <div className="Personal">
      <h1>Personal Details</h1>
      <div className="Personal__paragraph">
        An enthusiastic and motivated Data Scientist with a strong background in
        Computer Science honed from a very young age and is passionate about
        driving value to businesses through data analytics and machine learning
        algorithms.{" "}
        <p>
          With special expertise and experience in the Telecommunications
          industry, I have been working with Sri Lanka's premier private
          Telecommunication provider for the past two years.
        </p>{" "}
        <p>
          At Dialog Axiata, I am currently building and designing
          forward-thinking ML solutions.{" "}
        </p>
        <p>My experience includes:</p>
        <ul>
          {" "}
          <li>Data/Model pipelines and ETL</li>
          <li>User research and analysis</li>
          <li>Customer retention Churn prevention</li>
          <li>Productionlize of Al/ML solutions</li>
        </ul>
      </div>
      <button onClick={() => navigate("/about")}>About Me</button>
    </div>
  );
};

export default Personal;
