import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Web", "Marketing"];

const portfolioData = [
  {
    title: "Bindal Developers Real Estate Platform",
    category: "Web",
    description:
      "We built a modern, responsive real estate website with integrated lead capture and a CMS for Bindal Developers, enhancing their online visibility.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "SEO", "Google Ads"],
    outcome:
      "3x increase in lead conversions and a 45% boost in traffic within 3 months",
    link: "https://bindaldevelopersindia.com",
  },
  {
    title: "E-Commerce Web App",
    category: "Web",
    description:
      "Developed a scalable e-commerce website with real-time inventory management and payment integration.",
    techStack: ["React", "Node.js", "MongoDB"],
    outcome: "Increased online sales by 45% within 3 months.",
  },
  {
    title: "Digital Marketing Campaign",
    category: "Marketing",
    description:
      "Planned and executed a targeted digital marketing campaign for a fashion brand.",
    techStack: ["Meta Ads", "Google Analytics", "SEMrush"],
    outcome: "Increased traffic by 70% and conversions by 30%.",
  },
  {
    title: "Portfolio Website",
    category: "Web",
    description:
      "Designed and built a personal portfolio website with animated transitions and dark mode support.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    outcome: "Boosted client inquiries by 50%.",
  },
  {
    title: "SEO Optimization Project",
    category: "Marketing",
    description:
      "Optimized website structure, metadata, and content to improve organic search rankings.",
    techStack: ["Yoast", "Screaming Frog", "Google Search Console"],
    outcome: "Achieved first-page ranking for 8 target keywords.",
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory);

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#dedfe0] to-white/80  lg:py-20 py-6 px-2 md:px-4 text-white">
      <div className="max-w-8xl mx-auto">
        <div className="lg:flex justify-between items-start text-start mb-12 px-2">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          ></motion.div>

          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 text-transparent bg-clip-text inline-block"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Project Showcase
          </motion.h2>

          {/* Subheading Description */}
          <motion.p
            className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore a curated selection of web apps and marketing
            projects that demonstrate innovation, functionality, and real-world
            impact using cutting-edge technologies.
          </motion.p>
        </div>
        {/* Category Filter */}
        <motion.div
          className="flex justify-center gap-4 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-5 py-2.5 rounded-full border-2 font-semibold text-sm transition-all duration-300 backdrop-blur-md shadow-md ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-orange-500 to-yellow-400 border-orange-400 text-white scale-105"
                  : "border-orange-400 text-orange-400 hover:bg-orange-500 hover:text-white hover:scale-105"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a] rounded-xl p-6 shadow-md border border-gray-700 hover:shadow-orange-500/30 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-orange-400 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 mb-2 italic">
                Category: {item.category}
              </p>
              <p className="text-sm text-gray-300 mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-gray-400 mb-4">
                {item.techStack.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-800 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm italic text-green-400">
                Outcome: {item.outcome}
              </p>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-md transition"
                >
                  Visit Website
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
