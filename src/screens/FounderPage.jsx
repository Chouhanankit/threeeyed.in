import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const FounderPage = ({ animationStart = true }) => {
  return (
    <div className="bg-gradient-to-b mt-14 from-[#0F172A] to-[#1E293B] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center py-20 px-4 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#EA7900]/10 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          animate={animationStart ? { opacity: 1 } : {}}
          transition={{ duration: 2 }}
        />

        <motion.img
          src="https://ik.imagekit.io/mcyibc35n/ANKITCHOUHAN_keONmmqvq?updatedAt=1750419725774"
          alt="Ankit Chouhan"
          className="w-40 h-40 rounded-full border-4 border-orange-500 shadow-xl mb-6 z-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={animationStart ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 2 }}
        />

        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-white z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={animationStart ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 1.5 }}
        >
          Ankit Chouhan
        </motion.h1>

        <motion.h2
          className="text-orange-400 mt-2 text-xl font-medium z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={animationStart ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          Founder – Three-Eyed Pvt. Ltd.
        </motion.h2>

        <motion.p
          className="mt-4 max-w-2xl text-gray-300 leading-relaxed z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={animationStart ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 1.5 }}
        >
          A tech visionary and marketing strategist on a mission to reshape
          digital presence for brands across industries through innovation,
          strategy, and impact.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex gap-6 mt-8 z-10"
          initial={{ opacity: 0 }}
          animate={animationStart ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <a
            href="https://www.linkedin.com/in/ankit-chouhan-216b2a251/"
            target="_blank"
            rel="noreferrer"
            className="text-orange-500 hover:text-white text-2xl transition-transform transform hover:scale-125"
          >
            <FaLinkedin />
          </a>
          <Link
            to="/getcontact"
            className="text-orange-500 hover:text-white text-2xl transition-transform transform hover:scale-125"
          >
            <FaEnvelope />
          </Link>
        </motion.div>
      </section>

      {/* Leadership Focus */}
      <section className="bg-white text-gray-900 py-16 px-6 md:px-20 rounded-t-3xl">
        <h3 className="text-3xl font-bold text-center mb-10 text-[#EA7900]">
          Leadership Vision
        </h3>
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            className="bg-gray-100 rounded-xl p-6 shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Strategy
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              With an unwavering focus on client success, Our team crafts digital
              transformation strategies that merge tech with human-centered
              design. His goal: ensure every client’s journey ends in measurable
              growth.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-100 rounded-xl p-6 shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Culture
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              At Three-Eyed, culture starts at the top. Our team believes in
              mentoring talent, cultivating innovation, and maintaining an
              agile, inclusive environment that empowers every team member.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FounderPage;
