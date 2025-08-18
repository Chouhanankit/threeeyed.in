import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const slides = [
  {
    heading: "Crafting Digital Excellence",
    subtext:
      "At Three-Eyed Limited, we build next-gen websites and intelligent marketing strategies that drive real business growth.",
  },
  {
    heading: "Innovative IT & Marketing Solutions",
    subtext:
      "From design to development and promotion, our team delivers data-driven strategies tailored to your brand.",
  },
  {
    heading: "Your Vision, Our Expertise",
    subtext:
      "Partner with us to unlock digital potential through creativity, technology, and performance-driven campaigns.",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative px-6 bg-noise md:px-12 lg:px-24 bg-[#171717] text-white overflow-hidden flex items-center justify-start h-[92vh]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#00ffc3]/10 blur-[150px] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0" />

      {/* Main Content */}
      <div className="relative z-10 text-left max-w-8xl w-full flex flex-col items-start justify-center space-y-6 px-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-snug text-white uppercase break-words w-full max-w-full mb-4">
              <span className="text-[#EA7900] inline-block">
                <Typewriter
                  words={[slides[current].heading]}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-300 py-6 text-base md:text-lg lg:text-xl max-w-2xl"
            >
              {slides[current].subtext}
            </motion.p>
          </motion.div>
        </AnimatePresence>
        <Link to="/getcontact">
          <button
            className="transition-all duration-500 text-base sm:text-lg px-5 py-2 sm:px-6 sm:py-3
               bg-[#de6c01] text-white rounded-md shadow-[2px_2px_0px_#ef9432,4px_4px_0px_#ffb347,6px_6px_0px_#ff9800,8px_8px_0px_#fb8c00]
               hover:bg-[#b84d00] hover:shadow-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Contact Us
          </button>
        </Link>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-green-400/10 via-transparent to-transparent z-0" />
    </section>
  );
};

export default HeroCarousel;
