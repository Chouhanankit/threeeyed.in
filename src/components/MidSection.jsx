import React from "react";
import { motion } from "framer-motion";
const MidSection = () => {
  return (
    <>
      {/* Top Navigation Tags (layout-fixed + animated content) */}
      <div className="relative z-10">
        <div className="rounded-t-4xl overflow-hidden">
          <motion.div className="bg-gradient-to-r from-[#FF512F] to-[#F09819]">
            <div className="flex flex-wrap justify-center md:justify-evenly py-4 md:py-7 text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold gap-3 sm:gap-5 px-3">
              {[
                "Digital Marketing",
                "Graphics Design",
                "Website Development",
                "UI/UX",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 + i * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="flex items-center gap-1 sm:gap-2 uppercase"
                >
                  <span>➤</span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MidSection;
