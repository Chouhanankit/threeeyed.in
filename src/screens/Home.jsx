import React from "react";
import Carousel from "../components/Carousel";
import Capabilities from "../components/Capabilities";
import Contact from "../components/Contact";
import Digital from "../components/Digital";
import AboutUsSection from "../components/AboutUsSection";
import MidSection from "../components/MidSection";
import MainIndustries from "../components/MainIndustries";

const Home = () => {
  return (
    <>
      <Carousel />
      <MidSection />
      <AboutUsSection />
      <Capabilities />
      <MainIndustries />
      <Digital />
      <Contact />
    </>
  );
};

export default Home;
