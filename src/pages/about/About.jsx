// packages
import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";

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
    title: "Bachelor of Science in Computer Science",
    place: "University of Colombo",
    period: "2018 - 2020",
  },
  {
    title: "Data Science - Intern",
    place: "Dialog Axiata",
    period: "October 2020 - May 2021",
  },
  {
    title: "Junior Data Scientist",
    place: "Dialog Axiata",
    period: "June 2021 - November 2021",
  },
  {
    title: "Data Scientist",
    place: "Dialog Axiata",
    period: "November 2021 - Present",
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
          <div
            className={
              !questionCollaps[index]
                ? "Questions__question--closed"
                : "Questions__question--open"
            }
          >
            {!questionCollaps[index] ? (
              <MdOutlineExpandMore className="Questions__icon" />
            ) : (
              <MdOutlineExpandLess className="Questions__icon" />
            )}
            {item.question}
          </div>
          <div
            className={
              !questionCollaps[index]
                ? "Questions__answer"
                : "Questions__answer expand"
            }
          >
            {item.answer}
          </div>{" "}
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
          {/* <button>About Me</button> */}
        </div>
      </div>
      <p className="PersonalDetails__secondRow">
        I am a self taught Data Scientist with a background in Computer Science.
        After self-studying Data Science, I landed my first job as an intern
        Data Scientist at Dialog. That's the changing point of my career. Then I
        started to explore the world of machine learning. You can find my
        contribution on my kaggle and StackOverflow profiles. I always love to
        share my knowledge with others. it's not only because I love sharing but
        also because it sharpens my knowledge.
      </p>
    </>
  );
};

const About = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
      {/* <Questions /> */}
    </>
  );
};

export default About;
