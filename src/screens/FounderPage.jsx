import React from "react";
import { Link } from "react-router-dom";

const FounderPage = () => {
  return (
    <div className="min-h-screen pt-25 lg:pt-0 sm:pt-0 md:pt-0 bg-white flex items-center justify-center p-2">
      <div className="bg-[#EA7900] rounded-2xl shadow-lg p-8 max-w-3xl w-full text-white">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Profile Image */}
          <img
            src="https://ik.imagekit.io/mcyibc35n/ChatGPT%20Image%20May%2025,%202025,%2004_02_20%20PM%20(1)%20(1).png"
            alt="Ankit Chouhan - Owner & Co-founder"
            className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white mb-6 md:mb-0 md:mr-8"
          />

          {/* Text Content */}
          <div>
            <h1 className="text-3xl font-bold">Ankit Chouhan</h1>
            <h2 className="text-xl font-semibold mt-1">Owner & Co-founder</h2>
            <p className="mt-4 leading-relaxed text-white/90">
              Ankit Chouhan is a visionary entrepreneur and the driving force
              behind Three-Eyed Pvt. Ltd, a web development and marketing
              company committed to innovation, quality, and client success. His
              leadership and passion for excellence have helped build a brand
              known for creativity and outstanding customer satisfaction.
            </p>

            {/* Socials or Contact */}
            <div className="mt-6 text-xs lg:text-lg flex space-x-4">
              <Link
                to={"/getcontact"}
                className="bg-white text-[#EA7900] font-semibold px-4 py-2 rounded-xl shadow hover:bg-gray-100 transition"
              >
                Contact Me
              </Link>
              <a
                href="https://www.linkedin.com/in/ankit-chouhan-216b2a251/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white px-4 py-2 rounded-xl hover:bg-white hover:text-[#EA7900] transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderPage;
