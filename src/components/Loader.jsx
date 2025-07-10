import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="border-4 border-orange-400 border-t-transparent rounded-full w-12 h-12"
      ></motion.div>
      <span className="ml-4 text-lg font-semibold tracking-wide">
        Loading...
      </span>
    </div>
  );
};

export default Loader;
