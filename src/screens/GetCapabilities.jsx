import React, { useEffect, useState } from "react";
import CapabilityCard from "../components/CapabilityCard";
import AOS from "aos";
import "aos/dist/aos.css";

import grid1 from "../assets/grid1.jpg";
import grid2 from "../assets/grid2.jpg";
import grid3 from "../assets/grid3.jpg";
import grid4 from "../assets/grid4.jpg";
import grid5 from "../assets/grid5.jpg";
import grid6 from "../assets/grid6.jpg";
import grid7 from "../assets/grid7.jpg";
import grid8 from "../assets/grid8.jpg";
import Contact from "../components/Contact";

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
    title: "Content Management Systems",
    slug: "content-management-systems",
    image: grid3,
  },
  { title: "UI/UX Design", slug: "ui-ux-design", image: grid4 },
  { title: "Frontend Development", slug: "frontend-development", image: grid5 },
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

const carouselTexts = [
  "We deliver digital innovation tailored to your needs.",
  "Building fast, scalable, and user-friendly web platforms.",
  "One team. One mission. Real-world digital solutions.",
];

const GetCapabilities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full font-sans bg-white/80">
      {/* Hero Carousel Section */}
      <div className="relative h-[70vh] w-full bg-noise bg-[#171717] flex items-center justify-center px-6 text-center">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#00ffc3]/10 blur-[150px] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0" />
        <div className="max-w-4xl mx-auto text-white/80">
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-6 uppercase"
          >
            Our Services
          </h1>
          <p
            key={currentIndex}
            className="text-base sm:text-xl transition-opacity duration-700 ease-in-out"
            data-aos="fade-in"
          >
            {carouselTexts[currentIndex]}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-green-400/10 via-transparent to-transparent z-0" />
      </div>

      {/* Service Cards Section */}
      <section className="max-w-8xl mx-auto px-6 py-20">
        <div className="text-start lg:flex justify-between items-start mb-12">
          <h2
            data-aos="fade-down"
            className="text-2xl sm:text-4xl font-bold text-[#001F3D] mb-4"
          >
            What We Do
          </h2>
          <p
            data-aos="fade-up"
            className="text-base sm:text-lg max-w-5xl mx-auto text-gray-600 leading-relaxed"
          >
            At{" "}
            <span className="font-semibold text-[#EA7900]">
              Three-Eyed Pvt. Ltd.
            </span>
            , we specialize in{" "}
            <span className="text-black font-medium">Custom Development</span>,{" "}
            <span className="text-black font-medium">UI/UX Design</span>,{" "}
            <span className="text-black font-medium">SEO Optimization</span>,
            and{" "}
            <span className="text-black font-medium">
              Cloud-Ready Platforms
            </span>
            . Our mission is to deliver{" "}
            <span className="text-[#EA7900] font-semibold">
              transformative digital experiences
            </span>{" "}
            that help you scale with confidence in today’s competitive
            landscape.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
        >
          {services.map((service, index) => (
            <div key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <CapabilityCard
                title={service.title}
                image={service.image}
                slug={service.slug}
              />
            </div>
          ))}
        </div>
      </section>
      {/* contact */}
      <Contact />
    </div>
  );
};

export default GetCapabilities;
