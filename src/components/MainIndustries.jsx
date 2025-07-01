import {
  ArrowsUpFromLine,
  Building2,
  CreditCard,
  Cross,
  Home,
  TvMinimal,
} from "lucide-react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const investors = [
  {
    name: "E-Commerce & Retail",
    description: "",
    bg: "bg-[#1F1F1F]",
    text: "text-white",
    logo: <Home strokeWidth={1} className="w-15 h-15 text-white" />,
  },
  {
    name: "Travel & Transportation",
    description: "Innovative solutions for travel and mobility",
    bg: "bg-[#4C9EFF]",
    text: "text-black",
    logo: <ArrowsUpFromLine strokeWidth={1} className="w-15 h-15 text-black" />,
  },
  {
    name: "Finance & Fintech",
    description: "Driving innovation in financial technology",
    bg: "bg-[#FFD93D]",
    text: "text-black",
    logo: <CreditCard strokeWidth={1} className="w-15 h-15 text-black" />,
  },
  {
    name: "Media & Entertainment",
    description: "",
    bg: "bg-[#1F1F1F]",
    text: "text-white",
    logo: <TvMinimal strokeWidth={1} className="w-15 h-15 text-white" />,
  },
  {
    name: "Healthcare & Medical Tech",
    description: "",
    bg: "bg-[#1F1F1F]",
    text: "text-white",
    logo: <Cross strokeWidth={1} className="w-15 h-15 text-white" />,
  },
  {
    name: "Manufacturing & Logistics",
    description: "Streamlining production and global distribution",
    bg: "bg-[#DF3E3E]",
    text: "text-black",
    logo: <Building2 strokeWidth={1} className="w-15 h-15 text-black" />,
  },
];

const MainIndustries = () => {
  return (
    <section className="bg-[#171717] border-tl-2 border-t-2 rounded-tl-[5rem] text-white py-16 px-4 sm:px-6 md:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Top Text Section */}
        <div data-aos="fade-right" className="lg:w-1/2 space-y-8 text-left">
          <p className="text-sm md:text-base text-white/60 uppercase tracking-widest">
            What We Empower
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
            Driving Innovation Across <br />
            <span className="text-[#EA7900]">Key Industries</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-lg">
            From e-commerce to fintech, healthcare to logistics — we deliver
            cutting-edge solutions that power the world’s most impactful
            sectors.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-2/2 ">
          {investors.map((inv, index) => (
            <div
              data-aos="flip-down"
              key={index}
              className={`${inv.bg} ${inv.text} p-6 rounded-3xl h-60 flex flex-col justify-between transition duration-300 hover:scale-[1.015]`}
            >
              {inv.logo && (
                <div className="text-xs font-semibold uppercase tracking-wider">
                  {inv.logo}
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold mb-1">{inv.name}</h3>
                {inv.description && (
                  <p className="text-sm opacity-80 leading-tight">
                    {inv.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainIndustries;
