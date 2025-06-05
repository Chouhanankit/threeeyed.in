import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import Button from "./Button";
import carouselItems from "../js/carouselItems";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const item = carouselItems[current];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        {/* Left diagonal section - 60% */}
        <div className="absolute md:top-0 top-0 md:left-0 md:w-[100%]  h-full bg-white clip-left z-20 flex justify-center items-center mx-auto max-w-screen-xl">
          {/* Text Half */}
          <div
            data-aos="fade-up"
            className="absolute text-black w-[90%] left-4 md:left-24 top-32 md:w-1/2 md:top-40 p-2 md:p-0 "
          >
            <h1
              data-aos-duration="3000"
              className="text-2xl md:text-5xl font-bold mb-3 md:mb-6"
            >
              Scale at Speed
            </h1>
            <p className="text-[12px] w-[60%] md:w-full md:text-base">
              Our promise to help enterprises across industries transform at
              speed and bring agility, resilience, and efficiency to their
              businesses.
            </p>
          </div>
        </div>

        {/* Right diagonal section - 40% */}
        <div className="relative w-full h-screen z-0 overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <ReactPlayer
              url={item.videoUrl}
              playing
              loop
              muted
              controls={false}
              playsinline
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
              config={{
                file: {
                  attributes: {
                    playsInline: true,
                    muted: true,
                    autoPlay: true,
                    preload: "auto",
                    style: {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    },
                  },
                },
              }}
            />
          </div>

          {/* Overlay Content */}
          <div className="relative z-10 flex flex-col justify-end items-end h-full w-full px-2 pb-10 md:pb-40 text-end mx-auto max-w-screen-xl">
            <h1 className="text-xs text-white dark:text-white md:text-3xl font-bold md:mb-2 w-[65%] md:w-[40%]">
              {item.title}
            </h1>
            <p className="text-xs md:text-xs md:w-full w-65 dark:text-gray-200 md:py-3 py-2">
              {item.text}
            </p>
            <Link to={"/"}>
              <Button />
            </Link>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute md:bottom-8 bottom-4 left-1/2 transform -translate-x-1/2 flex gap-6 z-20">
          <ol className="flex justify-center gap-2 mt-4" role="tablist">
            {carouselItems.map((_, index) => (
              <li
                key={index}
                role="tab"
                data-slide-to={index}
                data-target="#vbp-carousel-3157"
                onClick={() => setCurrent(index)}
                className={`w-10 h-1 md:w-40 cursor-pointer transition-all duration-300 ${
                  index === current ? "bg-[#EA7900]" : "bg-gray-400"
                }`}
              ></li>
            ))}
          </ol>
        </div>

        <style>{`
    .clip-left {
      clip-path: polygon(0 0, 100% 0, 0% 100%, 0 100%);
    }

   .clip-right {
  clip-path: polygon(60% 0, 100% 0, 100% 100%, 0 100%);
}

  @media (max-width: 768px) {
  .clip-left,
  .clip-right {
    width: 100%;
    position: absolute;
    margin: 0;
    padding: 0;
  }


@media (max-width: 768px) {
  .clip-left {
    clip-path: polygon(0 0, 100% 0, 0 100%, 0 100%);
  }

  .clip-right {
    clip-path: polygon(75% 0, 100% 0, 100% 100%, 0 100%);
  }
}


  `}</style>
      </div>
    </>
  );
};

export default Carousel;
