// packages
import React, { useEffect } from "react";
import ReactGA from 'react-ga';

// components
import Header from "./header/Header";
import Interests from "./interests/Interests";
import Personal from "./personal/Personal";
import Platforms from "./platforms/Platforms";
import Skills from "./skills/Skills";
import Updates from "./updates/Updates";

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
      <Updates />
      <Platforms />
    </>
  );
};

export default Home;
