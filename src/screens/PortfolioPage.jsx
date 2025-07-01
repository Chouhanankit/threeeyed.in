import React from "react";
import Portfolio from "../components/Portfolio";
import { motion } from "framer-motion";
import Contact from "../components/Contact";

const PortfolioPage = () => {
  return (
    <>
      <section className="bg-noise bg-[#0F172A] to-[#1E293B] min-h-screen py-40 px-4 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-orange-400 mb-4 uppercase ">
              Projects That Made an Impact
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Explore our recent work in web development, mobile apps, and
              digital marketing — all crafted to solve real-world challenges and
              drive results.
            </p>
          </motion.div>
          <Portfolio />
        </div>
      </section>
      <Contact />
    </>
  );
};

export default PortfolioPage;
