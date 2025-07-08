import React from "react";
import Portfolio from "../components/Portfolio";
import { motion } from "framer-motion";
import Contact from "../components/Contact";
import { Sparkles } from "lucide-react";
const PortfolioPage = () => {
  return (
    <>
      <section className="relative py-40 px-4 sm:px-8 lg:px-20 bg-[#001F3D] text-white overflow-hidden">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1f1f1f] to-[#EA7900]/20 opacity-40 blur-2xl z-0"></div>

        {/* Glowing Circle Light */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#EA7900]/20 rounded-full blur-3xl z-0 animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Icon (Optional) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <div className="p-4 rounded-full bg-[#EA7900]/20 text-[#EA7900] border border-[#EA7900] shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold uppercase bg-gradient-to-r from-[#EA7900] via-yellow-400 to-[#EA7900] bg-clip-text text-transparent mb-6 tracking-wider drop-shadow-md"
          >
            Projects That Made an Impact
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Explore our cutting-edge work in{" "}
            <span className="text-[#EA7900] font-medium">web development</span>{" "}
            {" and "}
            <span className="text-[#EA7900] font-medium">
              digital marketing
            </span>{" "}
            — engineered to solve real-world challenges, elevate experiences,
            and drive measurable growth.
          </motion.p>
        </div>
      </section>
      <Portfolio />
      <Contact />
    </>
  );
};

export default PortfolioPage;
