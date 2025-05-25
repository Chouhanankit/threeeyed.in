import React from "react";
import Carousel from "../components/Carousel";
import Capabilities from "../components/Capabilities";
import Contact from "../components/Contact";
import Industries from "../components/Industries";
import About from "../components/About";
import Digital from "../components/Digital";

const Home = () => {
  return (
    <>
      <Carousel />
      <Capabilities />
      <Industries />
      <Digital />
      <Contact />
      <About />
    </>
  );
};

export default Home;
