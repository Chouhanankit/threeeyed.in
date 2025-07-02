import React from "react";
import Carousel from "../components/Carousel";
import Capabilities from "../components/Capabilities";
import Contact from "../components/Contact";
import Digital from "../components/Digital";
import AboutUsSection from "../components/AboutUsSection";
import MidSection from "../components/MidSection";
import MainIndustries from "../components/MainIndustries";
import PortfolioCTA from "./PortfolioCTA";

const Home = () => {
  return (
    <>
      <Carousel />
      <MidSection />
      <AboutUsSection />
      <Capabilities />
      <MainIndustries />
      <Digital />
      <PortfolioCTA />
      <Contact />
    </>
  );
};

export default Home;
