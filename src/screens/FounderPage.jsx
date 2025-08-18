import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import AkshayNagdiya from "../assets/Akshay.webp"
import Ishan from "../assets/ishan.webp"

const employees = [
  {
    name: "Akshay Nagdiya",
    role: "Full Stack Developer",
    img: AkshayNagdiya, 
    linkedin: "https://www.linkedin.com/in/akshay-nagdiya/", 
    email: "mailto:nagdiyaakshay@gmail.com",
  },
  {
    name: "Ishan Shriwas",
    role: "Digital Marketing Specialist",
    img: Ishan, 
    linkedin: "https://www.linkedin.com/in/ishananilshriwas/",
    email: "mailto:anilshriwas1515@gmail.com",
  },
  // {
  //   name: "Ravi Singh Rajawat",
  //   role: "Digital Marketing Specialist",
  //   img: "https://ik.imagekit.io/mcyibc35n/rahul.jpg",
  //   linkedin: "https://www.linkedin.com/in/ravi-singh-rajawat-88601b287/", 
  //   email: "mailto:sravirajawat07@gmail.com",
  // },
];

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
          Founder – Three-Eyed Limited
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
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=chouhanankit489@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-white text-2xl transition-transform transform hover:scale-125"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </section>

      {/* Leadership Focus */}
      <section className="bg-white text-gray-900 py-16 px-6 md:px-20 rounded-t-3xl">
        <h3 className="text-3xl font-bold text-center mb-10 text-[#EA7900]">
          Leadership Vision
        </h3>
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Strategy
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              With an unwavering focus on client success, our team crafts
              digital transformation strategies that merge tech with
              human-centered design. Goal: ensure every client’s journey ends in
              measurable growth.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Culture
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              At Three-Eyed Limited, culture starts at the top. We believe in
              mentoring talent, cultivating innovation, and maintaining an
              agile, inclusive environment that empowers every team member.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Employee Section */}
      <section className="relative py-20 px-6 md:px-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <h3 className="text-4xl font-extrabold text-center mb-14 text-white">
          Meet Our <span className="text-[#EA7900]">Team</span>
        </h3>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {employees.map((emp, i) => (
            <motion.div
              key={i}
              className="relative group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:border-orange-500/60 transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Glow effect (now non-blocking clicks) */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#EA7900]/20 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>

              <img
                src={emp.img}
                alt={emp.name}
                className="w-28 h-28 mx-auto rounded-full border-4 border-orange-500 shadow-lg mb-5 transform group-hover:scale-110 transition duration-300"
              />
              <h4 className="text-xl font-bold text-white">{emp.name}</h4>
              <p className="text-gray-300 text-sm mt-1">{emp.role}</p>

              {/* Social Links */}
              <div className="flex justify-center gap-6 mt-6 text-orange-400 text-xl">
                <a
                  href={emp.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-transform transform hover:scale-125"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={emp.email}
                  className="hover:text-white transition-transform transform hover:scale-125"
                >
                  <FaEnvelope />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FounderPage;
