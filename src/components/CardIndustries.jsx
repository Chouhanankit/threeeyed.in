import React from "react";
import { useRef, useEffect } from "react";
import { ArrowsUpFromLine, CreditCard, Handshake, Home } from "lucide-react";
import consumerImg from "../assets/consumersmall.jpg";
import logisticsImg from "../assets/logisticssmall.jpg";
import bankingImg from "../assets/bankingsmall.jpg";
import communicationImg from "../assets/communicationssmall.jpg";
import healthcareImg from "../assets/healthcaresmall.jpg";
import mediaImg from "../assets/mediasmall.jpg";
import servicesImg from "../assets/services.png";
import manufacturingImg from "../assets/manufa.jpg";

const industries = [
  {
    title: "Retail and Consumer Goods",
    icon: <Home strokeWidth={1} className="w-15 h-15 text-black" />,
    image: consumerImg,
  },
  {
    title: "Travel, Transportation",
    icon: <ArrowsUpFromLine strokeWidth={1} className="w-15 h-15 text-black" />,
    image: logisticsImg,
  },
  {
    title: "Banking and Financial Services",
    icon: <CreditCard strokeWidth={1} className="w-15 h-15 text-black" />,
    image: bankingImg,
  },
  {
    title: "Communications",
    icon: <Handshake strokeWidth={1} className="w-15 h-15 text-black" />,
    image: communicationImg,
  },
  {
    title: "Heathcare and Life Sciences",
    icon: <Handshake strokeWidth={1} className="w-15 h-15 text-black" />,
    image: healthcareImg,
  },
  {
    title: "Media and Entertainment",
    icon: <Handshake strokeWidth={1} className="w-15 h-15 text-black" />,
    image: mediaImg,
  },
  {
    title: "Profssionnal Services",
    icon: <Handshake strokeWidth={1} className="w-15 h-15 text-black" />,
    image: servicesImg,
  },
  {
    title: "Manufacturing",
    icon: <Handshake strokeWidth={1} className="w-15 h-15 text-black" />,
    image: manufacturingImg,
  },
];

const CardIndustries = ({ scrollRef }) => {
  const extendedIndustries = [...industries, ...industries];
  return (
    <div ref={scrollRef} className="overflow-x-auto scroll-smooth">
      <div
        className="flex gap-[1px] min-w-max"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {extendedIndustries.map((industry, index) => (
          <div
            key={index}
            className="sm:w-62 lg:w-full w-62 border-2 border-gray-200 overflow-hidden shadow-sm group hover:shadow-md transition"
          >
            <div className="p-6 h-72 flex flex-col justify-center items-start text-start">
              <div className="text-3xl mb-4">{industry.icon}</div>
              <h3 className="text-xl text-black">{industry.title}</h3>
            </div>
            <img
              src={industry.image}
              alt={industry.title}
              className="w-full grayscale group-hover:grayscale-0 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardIndustries;
