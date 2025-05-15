import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import Button from "./Button";

const carouselItems = [
  {
    title: "Scale at Speed™",
    text: "The Three-Eyed Promise",
    description:
      "Our promise to help enterprises across industries transform at speed and bring agility, resilience, and efficiency to their businesses.",
    videoUrl:
      "https://res.cloudinary.com/dg2seao8x/video/upload/v1746438535/4365142-uhd_3840_2160_25fps_ldwg9r.mp4",
  },
  {
    title: "Aurora Pulse",
    description: "A burst of animated color and galactic motion.",
    text: "Tech Mahindra Unveils 'AI Delivered Right' to Help Enterprises Scale AI with Purpose and Precision",
    videoUrl:
      " https://res.cloudinary.com/dg2seao8x/video/upload/v1746428685/854228-hd_1920_1080_30fps_lbrihm.mp4",
  },
  {
    title: "Chromatic Storm",
    description: "A radiant fusion of movement and color.",
    text: "Three Eyed Financial Results for Q4 Fy'25 Announced",
    videoUrl:
      "https://res.cloudinary.com/dg2seao8x/video/upload/v1746440647/856949-hd_1920_1080_30fps_alpwp0.mp4",
  },
];

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
          <div className="absolute text-black w-[90%] left-4 md:left-34 top-32 md:w-1/2 md:top-40 p-2 md:p-0 ">
            <h1 className="text-2xl md:text-5xl font-bold mb-3 md:mb-6">
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
            <h1 className="text-xs md:text-3xl font-bold mb-4 md:mb-6 w-[65%] md:w-[40%]">
              {item.text}
            </h1>
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
