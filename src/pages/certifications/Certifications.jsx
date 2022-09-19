// packages
import React from "react";

// styling
import "./Certifications.scss";

// certificationLogos
import aws from "../../assets/certificationLogos/aws.jpeg";
import coursera from "../../assets/certificationLogos/coursera.jpeg";
import dl from "../../assets/certificationLogos/dl.jpeg";
import ibm from "../../assets/certificationLogos/ibm.jpeg";
import linkedin from "../../assets/certificationLogos/linkedin.jpeg";
import michigan from "../../assets/certificationLogos/Michigan.jpeg";
import microsoft from "../../assets/certificationLogos/microsoft.jpeg";
import sas from "../../assets/certificationLogos/sas_square.png";
import udemy from "../../assets/certificationLogos/udemy.jpeg";
import gcp from "../../assets/certificationLogos/gcp.png";

// data
const certificationData = [
  {
    name: "AWS Cloud Quest: Cloud Practitioner",
    provider: "Amazon Web Services (AWS)",
    date: "August 2022",
    icon: aws
  },
  {
    name: "Docker for Data Scientists",
    provider: "Linkedin",
    date: "August 2022",
    icon: linkedin
  },
  {
    name: "Microsoft Certified: Azure AI Fundamentals",
    provider: "Microsoft",
    date: "March 2021",
    icon: microsoft
  },
  {
    name: "Big Data Foundations - Level 1",
    provider: "IBM",
    date: "August 2020",
    icon: ibm
  },
  {
    name: "IBM AI Engineering Professional Certificate",
    provider: "Coursera",
    date: "December 2020",
    icon: coursera
  },
  {
    name: "Machine Learning with Python",
    provider: "IBM",
    date: "December 2020",
    icon: ibm
  },
  {
    name: "Scalable Machine Learning on Big Data using Apache Spark",
    provider: "IBM",
    date: "December 2020",
    icon: ibm
  },
  {
    name: "Spark - Level 1",
    provider: "IBM",
    date: "December 2020",
    icon: ibm
  },
  {
    name: "Neural Networks in Python: Deep Learning for Beginners",
    provider: "Udemy",
    date: "August 2020",
    icon: udemy
  },
  {
    name: "Getting Started with AWS Machine Learning",
    provider: "Amazon Web Services (AWS)",
    date: "August 2020",
    icon: aws
  },
  {
    name: "Getting Started with SAS Programming",
    provider: "SAS",
    date: "July 2020",
    icon: sas
  },
  {
    name: "Using Python to Access Web Data",
    provider: "University of Michigan",
    date: "July 2020",
    icon: michigan
  },
  {
    name: "Natural Language Processing in TensorFlow",
    provider: "DeepLearning.AI",
    date: "June 2020",
    icon: dl
  },
  {
    name: "Deep Learning: Face Recognition",
    provider: "Linkedin",
    date: "May 2020",
    icon: linkedin
  },
  {
    name: "Applied Machine Learning: Algorithms",
    provider: "Linkedin",
    date: "April 2020",
    icon: linkedin
  },
  {
    name: "Artificial Intelligence Foundation: Machine Learning",
    provider: "Linkedin",
    date: "April 2020",
    icon: linkedin
  },
  {
    name: "Baseline: Data, ML, AI",
    provider: "Google Cloud Platform Certified",
    date: "April 2020",
    icon: gcp
  },
  {
    name: "Essential Google Cloud Infrastructure: Foundation",
    provider: "Google Cloud Platform Certified",
    date: "April 2020",
    icon: gcp
  },
  {
    name: "Google Cloud Platform Fundamentals: Core Infrastructure",
    provider: "Google Cloud Platform Certified",
    date: "April 2020",
    icon: gcp
  },
  {
    name: "Intro to ML: Language Processing",
    provider: "Google Cloud Platform Certified",
    date: "April 2020",
    icon: gcp
  },
  
];

const Certifications = () => {
  return (
    <>
      <div className="Certifications__banner">
        <h1>Certifications</h1>
        <p>
          <span>Home</span> -> Certifications
        </p>
      </div>
      <div className="Certifications">
        {certificationData.map((item) => (
          <div className="Certifications__listItem" key={item.name}>
            <img src={item.icon} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.provider}</p>
              <p>Issued in {item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Certifications;
