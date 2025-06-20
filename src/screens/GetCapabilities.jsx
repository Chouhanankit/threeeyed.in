import React from "react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import grid1 from "../assets/grid1.jpg";
import grid2 from "../assets/grid2.png";
import grid3 from "../assets/grid3.jpg";
import grid4 from "../assets/grid4.jpg";
import grid5 from "../assets/grid5.jpg";
import grid6 from "../assets/grid6.jpg";
import grid7 from "../assets/grid7.jpg";
import grid8 from "../assets/grid8.jpg";
import CapabilityCard from "../components/CapabilityCard";
import capabilities from "../js/capabilitiesData";

const services = [
  {
    title: "Custom Web Development",
    slug: "custom-web-development",
    image: grid1,
  },
  {
    title: "E-Commerce Development",
    slug: "e-commerce-development",
    image: grid2,
  },
  {
    title: "Content Management Systems (CMS)",
    slug: "content-management-systems",
    image: grid3,
  },
  {
    title: "UI/UX Design",
    slug: "ui/ux-design",
    image: grid4,
  },
  {
    title: "Frontend Development",
    slug: "frontend-development",
    image: grid5,
  },
  {
    title: "Backend Development & APIs",
    slug: "backend-development",
    image: grid6,
  },
  {
    title: "Website Optimization & SEO",
    slug: "website-optimization",
    image: grid7,
  },
  {
    title: "Website Maintenance & Support",
    slug: "website-maintenance",
    image: grid8,
  },
];

const carouselItems = [
  {
    videoUrl:
      "https://res.cloudinary.com/dg2seao8x/video/upload/v1747903780/lcm3py79bm05iv6xi22j.mp4",
  },
];

const GetCapabilities = () => {
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
      <>
        <div className="w-full min-h-screen  bg-white">
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
                  className="text-2xl md:text-7xl font-bold mb-3 md:mb-6"
                >
                  Our Services
                </h1>
                <p className="text-[12px] w-[60%] md:w-full md:text-base">
                  Our portfolio of offerings spans competencies, specialisms,
                  and application services that align with our customers'
                  changing worlds.
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
            </div>
          </div>
          {/* Card Area */}
          <div className="mx-auto px-6 g:px-0 w-full max-w-8xl ">
            <h1 className="text-black font-bold lg:text-5xl text-xl py-15">
              What We Do
            </h1>
            <section className="pb-10 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((cap) => (
                  <CapabilityCard
                    key={cap.slug}
                    title={cap.title}
                    image={cap.image}
                    slug={cap.slug}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>

        <style>{`
    .clip-left {
      clip-path: polygon(0 0, 110% 0, 0% 100%, 0 100%);
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
      </>
    </>
  );
};

export default GetCapabilities;
