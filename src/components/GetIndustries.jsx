import React from "react";
import {
  ArrowsUpFromLine,
  Building2,
  CreditCard,
  Cross,
  Handshake,
  Home,
  Package2,
  TvMinimal,
} from "lucide-react";
import consumerImg from "../assets/consumersmall.jpg";
import logisticsImg from "../assets/logisticssmall.jpg";
import bankingImg from "../assets/bankingsmall.jpg";
import communicationImg from "../assets/communicationssmall.jpg";
import healthcareImg from "../assets/healthcaresmall.jpg";
import mediaImg from "../assets/mediasmall.jpg";
import servicesImg from "../assets/services.png";
import manufacturingImg from "../assets/manufa.jpg";
import ReactPlayer from "react-player";

const industries = [
  {
    title: "E-Commerce & Retail",
    icon: Home,
    image: consumerImg,
  },
  {
    title: "Travel & Transportation",
    icon: ArrowsUpFromLine,
    image: logisticsImg,
  },
  {
    title: "Finance & Fintech",
    icon: CreditCard,
    image: bankingImg,
  },
  {
    title: "Telecom & Communications",
    icon: Handshake,
    image: communicationImg,
  },
  {
    title: "Healthcare & Medical Tech",
    icon: Cross,
    image: healthcareImg,
  },
  {
    title: "Media & Entertainment",
    icon: TvMinimal,
    image: mediaImg,
  },
  {
    title: "Professional Services",
    icon: Package2,
    image: servicesImg,
  },
  {
    title: "Manufacturing & Logistics",
    icon: Building2,
    image: manufacturingImg,
  },
];
const GetIndustries = () => {
  return (
    <>
      <div className="overflow-x-auto sm:overflow-visible">
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-w-max sm:min-w-0 pb-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                data-aos="zoom-in"
                key={index}
                className="min-w-[250px] hover:bg-[#ffa340] rounded-0 shadow-md hover:shadow-xl transition-all duration-500 group"
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-48 object-cover rounded-0 grayscale group-hover:grayscale-0 transition"
                />
                <div className="p-5 flex flex-col items-start">
                  <div className="bg-gray-100 p-2 rounded-full mb-4">
                    <Icon
                      className="w-6 h-6 text-[#4f46e5]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {industry.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GetIndustries;
