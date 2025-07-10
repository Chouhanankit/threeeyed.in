import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[#0E0E0E]">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0.9, 1.2, 0.9] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        className="w-16 h-16 border-4 border-[#EA7900] border-t-transparent rounded-full"
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
