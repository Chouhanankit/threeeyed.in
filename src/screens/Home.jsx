import React from "react";
import Carousel from "../components/Carousel";
import Capabilities from "../components/Capabilities";
import Contact from "../components/Contact";
import Digital from "../components/Digital";
import AboutUsSection from "../components/AboutUsSection";
import MidSection from "../components/MidSection";
import MainIndustries from "../components/MainIndustries";
import PortfolioCTA from "./PortfolioCTA";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Three-Eyed Limited | Web Development & Digital Marketing</title>
        <meta
          name="description"
          content="Three-Eyed Limited, a leading IT company in Indore, offering web development, digital marketing, branding, and full-stack solutions."
        />
        <meta
          name="keywords"
          content="Three-Eyed, IT Company Indore, Web Development, Digital Marketing, SEO, Team"
        />
        <meta name="author" content="Three-Eyed Limited" />

        {/* Open Graph Meta */}
        <meta property="og:title" content="Three-Eyed Limited" />
        <meta
          property="og:description"
          content="Explore the journey, mission, and values of Three-Eyed Limited — a full-stack web and marketing company based in India."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dg2seao8x/image/upload/v1752144375/og-banner_ftgeyc.webp"
        />
        <meta
          property="og:url"
          content="https://www.threeeyedlimited.com/"
        />
        <meta property="og:type" content="website" />
      </Helmet>
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
