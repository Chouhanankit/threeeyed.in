import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import grid1 from "../assets/grid1.jpg";
import grid2 from "../assets/grid2.jpg";
import grid3 from "../assets/grid3.jpg";
import grid4 from "../assets/grid4.jpg";
import grid5 from "../assets/grid5.jpg";
import grid6 from "../assets/grid6.jpg";
import grid7 from "../assets/grid7.jpg";
import grid8 from "../assets/grid8.jpg";

const services = [
  {
    title: "Custom Web Development",
    description:
      "We craft responsive, high-performance websites tailored to your business needs using modern frameworks and best practices.",
    image: grid1,
  },
  {
    title: "E-Commerce Development",
    description:
      "Build secure, scalable, and conversion-optimized e-commerce platforms to drive your online business forward.",
    image: grid2,
  },
  {
    title: "Content Management Systems (CMS)",
    description:
      "We deliver flexible and user-friendly CMS solutions using WordPress, Strapi, or headless CMS for dynamic content management.",
    image: grid3,
  },
  {
    title: "UI/UX Design",
    description:
      "Design intuitive, visually compelling interfaces that offer seamless experiences across all devices and platforms.",
    image: grid4,
  },
  {
    title: "Frontend Development",
    description:
      "Our experts build fast, interactive user interfaces using React, Vue, and modern frontend technologies.",
    image: grid5,
  },
  {
    title: "Backend Development & APIs",
    description:
      "Develop robust server-side logic, RESTful APIs, and database architectures using Node.js, Python, or .NET.",
    image: grid6,
  },
  {
    title: "Website Optimization & SEO",
    description:
      "Improve your website’s speed, accessibility, and search engine visibility to enhance user engagement and reach.",
    image: grid7,
  },
  {
    title: "Website Maintenance & Support",
    description:
      "We provide regular updates, security patches, and performance monitoring to keep your site running smoothly.",
    image: grid8,
  },
];

const CardComponent = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let isMobile = window.innerWidth <= 640;

    if (!container || !isMobile) return;

    const interval = setInterval(() => {
      if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth
      ) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="md:px-4 py-10">
      <Link to="/services">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:overflow-visible scrollbar-thin scrollbar-thumb-[#EA7900]/70 scrollbar-track-gray-200"
        >
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="min-w-[280px] sm:w-full h-96 flex-shrink-0 bg-center bg-cover relative rounded-xl shadow-xl group overflow-hidden transition-all duration-500 ease-in-out"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 hover:backdrop-blur-sm transition duration-500"></div>

              {/* Content */}
              <div className="absolute top-10 left-6 right-6 text-white">
                <h2 className="text-xl font-bold">{service.title}</h2>
                <p className="mt-4 text-sm opacity-100 lg:opacity-0 group-hover:opacity-100 transition duration-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Link>
    </section>
  );
};

export default CardComponent;
