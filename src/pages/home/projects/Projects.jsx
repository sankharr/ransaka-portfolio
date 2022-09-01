// packages
import React from "react";

// styling
import "./Projects.scss";

// assets
import projectImg1 from "../../../assets/medium2.jpeg";

const projectsData = [
  {
    image: projectImg1,
    date: "Jan 20, 2020",
    title: "AUTOMATING AWS EC2 SHUTDOWN WITH BASH SCRIPTS",
    description:
      "A helpful tutorial I wrote recently on how to set up a Bash script that utilized the AWS CLI to start, log into, then shutdown an EC2 instance. (I didn't want to forget the instance was running and lose money)",
  },
  {
    image: projectImg1,
    date: "Dec 10, 2019",
    title:
      "RNNS, LSTMS, AND ATTENTION MECHANISMS FOR LANGUAGE MODELLING (PYTORCH)",
    description:
      "Tested the use of Word2Vec embeddings with a variety of sequential input deep learning models towards the task of language modeling (predicting the next word in a sentence).",
  },
  {
    image: projectImg1,
    date: "Dec 2, 2019",
    title: "DAVISBASE: A CUSTOM DESIGNED DATABASE (PYTHON)",
    description:
      "A fully functional, SQL-compliant database implemented from scratch in Python. DavisBase compresses data to a custom-designed bit-level encoding for maximal data compression. By utilizing a file size of 512Kb, DavisBase performs well in low memory environments while also maximizing query time.",
  },
];

const ProjectCard = ({ image, date, title, description }) => {
  return (
    <div className="Projects__card">
      <img src={image} />
      <p>{date}</p>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="Projects">
      <h1>My Latest Projects</h1>
      <p>Take a look at my recent work</p>
      <div className="Projects__cardArray">
        {projectsData.map((item) => (
          <ProjectCard
            image={item.image}
            date={item.date}
            title={item.title}
            description={item.description}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
