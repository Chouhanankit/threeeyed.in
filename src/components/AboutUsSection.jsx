import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaHandshake, FaSmile } from "react-icons/fa";
import teamImage from "../assets/about.webp";

const AboutUsSection = () => {
  return (
    <section className="bg-[#171717] bg-noise text-white/90">
      <div className="max-w-8xl mx-auto px-5 sm:px-6 md:px-10 py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-[500px] mx-auto group"
        >
          <div className="absolute top-3 left-3 w-full h-full bg-[#EA7900] rounded-3xl z-0 shadow-xl"></div>

          <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl border border-gray-700 w-full h-auto aspect-[4/3]">
            <img
              src={teamImage}
              alt="Our Team"
              className="w-full h-full object-cover rounded-3xl"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all duration-500 rounded-3xl" />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* ✅ Proper heading order */}
          <h2 className="text-4xl font-bold text-[#EA7900]">About Us</h2>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
            Get to Know Us:{" "}
            <span className="text-[#EA7900]">Pioneering Innovation</span> in IT
            & Marketing
          </h3>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            We are a forward-thinking IT and technology company dedicated to
            delivering innovative solutions that empower businesses and fuel
            their growth.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            <div className="flex items-center gap-3">
              <FaUsers
                className="text-[#EA7900] text-2xl sm:text-3xl"
                aria-label="Team Members Icon"
              />
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#EA7900]">
                  30+
                </h4>
                <p className="text-gray-400 text-sm">Team Members</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaHandshake
                className="text-[#EA7900] text-2xl sm:text-3xl"
                aria-label="Clients Icon"
              />
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#EA7900]">
                  200+
                </h4>
                <p className="text-gray-400 text-sm">Our Clients</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaSmile
                className="text-[#EA7900] text-2xl sm:text-3xl"
                aria-label="Satisfaction Icon"
              />
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#EA7900]">
                  99%
                </h4>
                <p className="text-gray-400 text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
