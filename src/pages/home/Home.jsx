// packages
import React, { useEffect } from "react";
import ReactGA from 'react-ga';

// components
import Header from "./header/Header";
import Interests from "./interests/Interests";
import Personal from "./personal/Personal";
import Platforms from "./platforms/Platforms";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

const Home = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Header />
      <Personal />
      <Interests />
      <Skills />
      {/* <Projects /> */}
      <Platforms />
    </>
  );
};

export default Home;
