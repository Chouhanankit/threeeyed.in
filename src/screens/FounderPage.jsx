import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Ravi Patel",
    feedback:
      "Working with Ankit was an incredible experience. He transformed our digital strategy and delivered beyond expectations.",
  },
  {
    name: "Priya Mehra",
    feedback:
      "Three-Eyed Pvt. Ltd. brought a fresh perspective to our branding. Ankit’s leadership clearly reflects in the quality they deliver.",
  },
];

const FounderPage = () => {
  return (
    <div className="bg-gradient-to-b mt-14 from-[#0F172A] to-[#1E293B] text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-4">
        <motion.img
          src="https://ik.imagekit.io/mcyibc35n/ChatGPT%20Image%20May%2025,%202025,%2004_02_20%20PM%20(1)%20(1).png"
          alt="Ankit Chouhan"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-40 h-40 rounded-full border-4 border-orange-500 shadow-xl mb-6"
        />
        <motion.h1
          className="text-4xl font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Ankit Chouhan
        </motion.h1>
        <motion.h2
          className="text-orange-400 mt-2 text-xl font-medium"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Owner & Co-founder – Three-Eyed Pvt. Ltd.
        </motion.h2>
        <motion.p
          className="mt-4 max-w-2xl text-gray-300 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Visionary leader and digital innovator behind a high-performing web development
          & marketing company delivering creative and technical excellence.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
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

      {/* Testimonials */}
      <section className="bg-white text-gray-800 py-12 px-6 md:px-20 rounded-t-3xl">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
          What People Say
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-2xl shadow p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <FaQuoteLeft className="text-orange-500 text-3xl mb-4" />
              <p className="text-gray-700 mb-4">{testimonial.feedback}</p>
              <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FounderPage;
