import React from "react";
import { useEffect, useRef } from "react";
import grid1 from "../assets/grid1.jpg";
import grid2 from "../assets/grid2.png";
import grid3 from "../assets/grid3.jpg";
import grid4 from "../assets/grid4.jpg";
import grid5 from "../assets/grid5.jpg";
import grid6 from "../assets/grid6.jpg";
import grid7 from "../assets/grid7.jpg";
import grid8 from "../assets/grid8.jpg";


const services = [
  {
    title: "Artificial Intelligence",
    description:
      "Amplify your business with TechM by infusing AI in every aspect of your business, democratizing AI responsibly.",
    image: grid1,
  },
  {
    title: "Business Process Services",
    description: "Unveil new ways to disrupt your industry",
    image: grid2,
  },
  {
    title: "Cloud and Infrastructure Services",
    description:
      "Empower your organization with a powerfully designed infrastructure stack and support technologies.",
    image: grid3,
  },
  {
    title: "Digital Enterprise Applications",
    description:
      "Experience unparalleled innovation, efficiency, and adaptability",
    image: grid4,
  },
  {
    title: "Engineering Services",
    description:
      "Enable seamless cyber-physical integration for enhanced visibility and predictability, democratizing AI responsibly.",
    image: grid5,
  },
  {
    title: "Experience Services",
    description:
      "Practice the art of giving your customers truly memorable experiences",
    image: grid6,
  },
  {
    title: "Network Services",
    description: "Leverage new opportunities to enhance network operations.",
    image: grid7,
  },
  {
    title: "Testing Services",
    description:
      "Accelerate the development of end-to-end automated operations for your business, democratizing AI responsibly.",
    image: grid8,
  },
];

const CardComponent = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;
    let isMobile = window.innerWidth <= 640; // Tailwind's `sm` breakpoint

    if (!container || !isMobile) return;

    const scrollInterval = setInterval(() => {
      scrollAmount += 1;
      if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth
      ) {
        scrollAmount = 0; // Reset to start
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
    }, 20); // Adjust speed

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:overflow-visible scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="min-w-[280px] sm:w-full h-96 flex-shrink-0 sm:flex-shrink bg-cover bg-center relative rounded-0 shadow-lg group"
            style={{
              backgroundImage: `url(${service.image})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 lg:group-hover:backdrop-blur-md lg:group-hover:bg-black/70 transition duration-500"></div>

            {/* Text Content */}
            <div className="absolute top-10 left-6 right-6 text-white transition-all duration-500">
              <h2 className="text-xl font-bold">{service.title}</h2>
              {service.description && (
                <p className="mt-4 text-sm opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition duration-500">
                  {service.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardComponent;
