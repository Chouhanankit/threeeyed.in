import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-[#171717] bg-noise text-white/80">
      <div className="max-w-screen-xl mx-auto px-4 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Join Team Section */}
        <div
          data-aos="fade-left"
          className="w-full lg:w-1/2 px-4 text-center lg:text-center"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-4">
            Join Our Tech Team
          </h1>
          <p className="text-base sm:text-lg mb-8">
            Passionate about coding, design, or problem-solving? Be part of our
            mission to build smarter digital experiences.
          </p>
          <Link to="/jointeam">
            <button className="w-full lg:w-full py-4 px-8 border text-sm border-white text-white hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition duration-200 ease-in-out">
              VIEW OPENINGS
            </button>
          </Link>
        </div>

        {/* Divider (vertical line) */}
        <div className="hidden lg:flex justify-center">
          <div className="w-px h-56 bg-gray-600 opacity-40" />
        </div>

        {/* Contact Us Section */}
        <div
          data-aos="fade-right"
          className="w-full lg:w-1/2 px-4 text-center lg:text-center"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-4">
            Let’s Build Something Great
          </h1>
          <p className="text-base sm:text-lg mb-8">
            Whether it's a website, app, or platform — let's talk about how we
            can bring your vision to life.
          </p>
          <Link to="/getcontact">
            <button className="w-full lg:w-full py-4 px-8 border text-sm border-white text-white hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition duration-200 ease-in-out">
              GET IN TOUCH
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
