import React, { useEffect, useState } from "react";
import GetIndustries from "../components/GetIndustries";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "../components/Contact";

const carouselTexts = [
  "Empowering industries with tailored digital solutions.",
  "We bring innovation to real estate, healthcare, education, and more.",
  "Your industry, our technology – let's build something great.",
];

const IndustriesPage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full min-h-screen bg-white/80">
        {/* Hero Section */}
        <div className="relative h-[70vh] w-full bg-indigo-300 flex items-center justify-center px-6 text-center">
          <div className="max-w-4xl mx-auto text-black/90 ">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-6 uppercase"
            >
              Our Industries
            </h1>
            <p
              key={current}
              className="text-base sm:text-xl transition-opacity duration-700 ease-in-out"
              data-aos="fade-in"
            >
              {carouselTexts[current]}
            </p>
          </div>
        </div>

        {/* Grid Cards Section */}
        <section className="max-w-8xl mx-auto px-6 py-20">
          <div className="text-start lg:flex justify-between items-center mb-12">
            <h2
              data-aos="fade-down"
              className="text-2xl sm:text-4xl font-bold text-[#001F3D] mb-4"
            >
              Our Industry Expertise
            </h2>
            <p
              data-aos="fade-up"
              className="text-base sm:text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed"
            >
              From{" "}
              <span className="text-[#EA7900] font-semibold">eCommerce</span> to{" "}
              <span className="text-[#EA7900] font-semibold">Healthcare</span>,{" "}
              <span className="text-[#EA7900] font-semibold">Real Estate</span>{" "}
              to <span className="text-[#EA7900] font-semibold">Education</span>
              , we craft industry-specific digital strategies that drive
              results.
            </p>
          </div>

          <GetIndustries />
        </section>
        {/* Contact */}
        <Contact />
      </div>
    </>
  );
};

export default IndustriesPage;
