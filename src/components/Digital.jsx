import React from "react";
import SpotlightCard from "./SpotlightCard";
import { Link } from "react-router-dom";

const Digital = () => {
  return (
    <>
      <div className="bg-white pt-12 px-4 sm:px-6 lg:px-0">
        <div className="max-w-9xl mx-auto pb-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10 gap-6 max-w-7xl mx-auto">
            <h2
              data-aos="fade-left"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black"
            >
              Marketing and Optimization
            </h2>
            <p data-aos="flip-up" className="text-xl text-black max-w-md">
              Let’s Check Our Services
            </p>
            <p data-aos="fade-right" className="text-sm text-gray-600 max-w-md">
              We guide businesses and brands towards growth by providing Social
              Media Optimization, Online Ads, Facebook Ads, Instagram Ads,
              YouTube Ads, LinkedIn Ads, Twitter Ads, and more.
            </p>
          </div>

          {/* Card */}
          <Link to={"/marketing"}>
            <div className="max-w-7xl mx-auto grid  gap-4 lg:grid-flow-dense auto-rows-[200px] sm:auto-rows-[180px] grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
              <SpotlightCard />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Digital;
