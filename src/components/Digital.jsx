import React from "react";
import { Link } from "react-router-dom";
import MainDigital from "./MainDigital";

const Digital = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] pt-16 px-4 sm:px-6 lg:px-0 text-white font-sans">
        <div className="max-w-9xl mx-auto pb-16 sticky">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-14 max-w-7xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold leading-tight">
                Discover Our
                <br />
                <span className="text-orange-400">Marketing Features</span>
              </h2>
              <p
                data-aos="flip-up"
                className="text-lg sm:text-xl text-white/80 font-medium"
              >
                Let’s Check Our Services
              </p>
            </div>

            <p
              data-aos="fade-right"
              className="text-base sm:text-lg text-white/60 leading-relaxed max-w-xl"
            >
              We guide businesses and brands toward growth through intelligent
              marketing strategies — including Social Media Optimization, Online
              Ads, Facebook, Instagram, YouTube, LinkedIn, Twitter, and more.
            </p>
          </div>

          {/* Card */}
            <div  className="max-w-7xl mx-auto">
              <MainDigital />
            </div>
        </div>
      </div>
    </>
  );
};

export default Digital;
