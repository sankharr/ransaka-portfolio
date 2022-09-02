// packages
import React, { useState } from "react";

// styling
import "./About.scss";

// assets
import propic from "../../assets/propic.jpeg";

// icons
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";

const questionsData = [
  {
    question: "Why did you make this website?",
    answer:
      "I created and deployed this website on a private DigitalOcean server so that I could learn more about web app design and back-end development.In the future I will use this website as a nesting ground for web-based computer vision and NLP models. Though I don't expect it to be anything more than a portfolio site, I strongly suspect that these skills will be crucial to technological development in the years to come.",
  },
  {
    question: "How long have you been practicing machine learning?",
    answer:
      "I created and deployed this website on a private DigitalOcean server so that I could learn more about web app design and back-end development.In the future I will use this website as a nesting ground for web-based computer vision and NLP models. Though I don't expect it to be anything more than a portfolio site, I strongly suspect that these skills will be crucial to technological development in the years to come.",
  },
  {
    question: "Do you have any experience working with databases?",
    answer:
      "I created and deployed this website on a private DigitalOcean server so that I could learn more about web app design and back-end development.In the future I will use this website as a nesting ground for web-based computer vision and NLP models. Though I don't expect it to be anything more than a portfolio site, I strongly suspect that these skills will be crucial to technological development in the years to come.",
  },
];

const experienceData = [
  {
    title: "Bachelors in Mathematics and Economics",
    place: "Baylor University 2017",
    period: "GPA: 3.86 (On a scale of 4.00)",
  },
  {
    title: "Business Analyst",
    place: "DXC Technology",
    period: "November 2017 - March 2018",
  },
  {
    title: "Bachelors in Mathematics and Economics2",
    place: "Baylor University 2017",
    period: "GPA: 3.86 (On a scale of 4.00)",
  },
  {
    title: "Bachelors in Mathematics and Economics3",
    place: "Baylor University 2017",
    period: "GPA: 3.86 (On a scale of 4.00)",
  },
];

const Questions = () => {
  const [questionCollaps, setQuestionCollaps] = useState([false, false, false]);
  return (
    <div className="Questions">
      <h1>Any Questions?</h1>
      {questionsData.map((item, index) => (
        <div
          className="Questions_listItem"
          key={item.question}
          onClick={() => {
            let tempArray = [false, false, false];
            tempArray[index] = !questionCollaps[index];
            setQuestionCollaps(tempArray);
          }}
        >
          <div className={!questionCollaps[index] ? "Questions__question--closed" : "Questions__question--open"}>
          {!questionCollaps[index] ? <MdOutlineExpandMore className="Questions__icon" /> : <MdOutlineExpandLess className="Questions__icon" />}
            {item.question}
          </div>
          <div className={!questionCollaps[index] ? "Questions__answer" : "Questions__answer expand"}>{item.answer}</div>{" "}
          {/* {!questionCollaps[index] && (
            <div className="Questions__question--closed">
              <MdOutlineExpandMore className="Questions__icon" />
              {item.question}
            </div>
          )}
          {questionCollaps[index] && (
            <>
              {" "}
              <div className="Questions__question--open">
                <MdOutlineExpandLess className="Questions__icon" />
                {item.question}
              </div>
              <div className="Questions__answer">{item.answer}</div>{" "}
            </>
          )} */}
        </div>
      ))}
    </div>
  );
};

const ExperienceCard = ({ title, place, period, index }) => {
  return (
    <div className="Experience__card shadow">
      <h3>{title}</h3>
      <p>{place}</p>
      <p>{period}</p>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="Experience">
      <h1>My Experience</h1>
      {experienceData.map((item, index) => (
        <div className="Experience__row" key={item.title}>
          {index % 2 == 0 ? (
            <ExperienceCard
              title={item.title}
              place={item.place}
              period={item.period}
              index={index}
            />
          ) : (
            <div className="Experience__card"></div>
          )}

          <div className="Experience__middleLine">
            <span className="dot">
              <span></span>
            </span>
          </div>
          {index % 2 == 1 ? (
            <ExperienceCard
              title={item.title}
              place={item.place}
              period={item.period}
              index={index}
            />
          ) : (
            <div className="Experience__card"></div>
          )}
        </div>
      ))}
    </div>
  );
};

const PersonalDetails = () => {
  return (
    <>
      <div className="PersonalDetails__firstRow">
        <img src={propic} />
        <div>
          <h1>Personal Details</h1>
          <p>Here's some more info obout me.</p>
          <button>About Me</button>
        </div>
      </div>
      <p className="PersonalDetails__secondRow">
        At the beginning of 2018, I didn't know where my life was going. After
        some serious self-reflection about my passions and interests, I
        committed to learning everything I could about machine learning, data
        science, and the tech industry.
        <br />
        <br /> After graduating woth a masters in Computer Science from UT
        Dallas and a year of working at Capital One, I have officially become a
        Data Scientist in the auto financing organization at Capital One. Here I
        am utilizing my knowledge of machine learning engineering to build
        intelligent systems to better the customer experience
      </p>
    </>
  );
};

const About = () => {
  return (
    <>
      <div className="About__banner">
        <h1>About Me</h1>
        <p>
          <span>Home</span> -> About Me
        </p>
      </div>
      <PersonalDetails />
      <Experience />
      <Questions />
    </>
  );
};

export default About;
