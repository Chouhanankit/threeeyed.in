import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="bg-[#1E1E1E] flex justify-between items-center">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-16 flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Careers area */}
          <div
            data-aos="fade-left"
            className="px-6 py-10 lg:py-16 md:text-center lg:text-left w-full lg:w-1/2"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl my-4 text-white">
              Join Our Tech Team
            </h1>
            <p className="text-base sm:text-lg mb-10 text-white">
              Passionate about coding, design, or problem-solving? Be part of
              our mission to build smarter digital experiences.
            </p>
            <Link to={"/jointeam"}>
              <button className="py-4 w-full px-6 border text-sm border-white text-white hover:bg-white hover:text-black hover:scale-105 active:bg-white active:text-black active:scale-95 transition duration-180 transform">
                VIEW OPENINGS
              </button>
            </Link>
          </div>

          {/* hr line */}
          <div className="lg:block">
            <hr className="bg-gray-200 md:w-52 w-68 md:rotate-90" />
          </div>

          {/* Contact area */}
          <div
            data-aos="fade-right"
            className="px-6 py-10 lg:py-16 md:text-center lg:text-left w-full lg:w-1/2"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl my-4 text-white">
              Let’s Build Something Great
            </h1>
            <p className="text-base sm:text-lg lg:mb-18 mb-10 text-white">
              Whether it's a website, app, or platform — let's talk about how we
              can bring your vision to life.
            </p>
            <Link to={"/getcontact"}>
              <button className="py-4 w-full px-6 border text-sm border-white text-white hover:bg-white hover:text-black hover:scale-105 active:bg-white active:text-black active:scale-95 transition duration-180 transform">
                GET IN TOUCH
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
