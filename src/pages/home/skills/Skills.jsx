// packages
import React from "react";

// styling
import "./Skills.scss";

const skillsArray = [
  {
    title: "Devops",
    levelArray: [
      {
        name: "Databases (SQL)",
        level: 5,
      },
      {
        name: "Servers (Linux / Bash)",
        level: 4,
      },
      {
        name: "Big Data (HIVE / Spark)",
        level: 3,
      },
    ],
  },
  {
    title: "Machine Learning",
    levelArray: [
      {
        name: "Python",
        level: 5,
      },
      {
        name: "Computer Vision (TensorFlow)",
        level: 4,
      },
      {
        name: "NLP (Spacy / TensorFlow)",
        level: 3,
      },
    ],
  },
  {
    title: "Data Analytics",
    levelArray: [
      {
        name: "Teaching / Presenting",
        level: 5,
      },
      {
        name: "Statistical Methods",
        level: 4,
      },
      {
        name: "Visualization (Tableau)",
        level: 3,
      },
    ],
  },
];

const techStack = [
  {
    title: "Programming Languages",
    tech: ["Python", "SQL", "R", "Javascript"],
  },
  {
    title: "Machine Learning",
    tech: ["sklearn", "xgboost", "fbprophet", "pytorch", "sagemaker"],
  },
  {
    title: "Databases",
    tech: ["Oracle", "snowflake", "Neo4j"],
  },
  {
    title: "Big Data",
    tech: ["Hive", "Hadoop", "Spark"],
  },
  {
    title: "MLOps",
    tech: ["AWS sagemaker pipelines", "AWS codecommit", "AWS model monitoring"],
  },
];

const SkillCard = ({ title, levelArray }) => {
  return (
    <div className="Skills__card">
      <h4>{title}</h4>
      {levelArray.map((item) => (
        <div className="skills__levelbar" key={item.name}>
          <p>
            {item.name} - {item.level}
          </p>
          <div>
            {item.level == 1 ? (
              <div style={{ width: "20%" }}></div>
            ) : item.level == 2 ? (
              <div style={{ width: "40%" }}></div>
            ) : item.level == 3 ? (
              <div style={{ width: "60%" }}></div>
            ) : item.level == 4 ? (
              <div style={{ width: "80%" }}></div>
            ) : (
              <div style={{ width: "100%" }}></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const Skills = () => {
  return (
    <div className="Skills">
      <h1>Skills Expertise</h1>
      {/* <p>
        1 - Basic &nbsp; &nbsp; 2 - Novice &nbsp; &nbsp; 3 - Intermediate &nbsp;
        &nbsp; 4 - Advanced &nbsp; &nbsp; 5 - Expert
      </p> */}
      <div className="Skills__cardContainer">
        {techStack.map((item) => (
          <div className="Skill__card" key={item.title}>
            <h4>{item.title}</h4>
            {item.tech.map((element) => (
              <p key={element}>{element}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
