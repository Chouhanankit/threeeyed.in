import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Web", "App", "Marketing"];

const portfolioData = [
  {
    title: "E-Commerce Web App",
    category: "Web",
    image: "https://source.unsplash.com/400x300/?ecommerce,website",
    description:
      "Developed a scalable e-commerce website with real-time inventory management and payment integration.",
    techStack: ["React", "Node.js", "MongoDB"],
    outcome: "Increased online sales by 45% within 3 months.",
  },
  {
    title: "Fitness Tracking App",
    category: "App",
    image: "https://source.unsplash.com/400x300/?fitness,app",
    description:
      "Mobile app for real-time fitness tracking, meal planning, and progress analytics.",
    techStack: ["Flutter", "Firebase", "Google Fit API"],
    outcome: "Achieved over 10,000 downloads in the first month.",
  },
  {
    title: "Digital Marketing Campaign",
    category: "Marketing",
    image: "https://source.unsplash.com/400x300/?marketing,ads",
    description:
      "Planned and executed a targeted digital marketing campaign for a fashion brand.",
    techStack: ["Meta Ads", "Google Analytics", "SEMrush"],
    outcome: "Increased traffic by 70% and conversions by 30%.",
  },
  {
    title: "Portfolio Website",
    category: "Web",
    image: "https://source.unsplash.com/400x300/?portfolio,website",
    description:
      "Designed and built a personal portfolio website with animated transitions and dark mode support.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    outcome: "Boosted client inquiries by 50%.",
  },
  {
    title: "Food Delivery App UI",
    category: "App",
    image: "https://source.unsplash.com/400x300/?food,app",
    description:
      "Created a modern UI/UX prototype for a food delivery app with smooth animations and user onboarding.",
    techStack: ["Figma", "React Native"],
    outcome: "Client approved design in the first iteration.",
  },
  {
    title: "SEO Optimization Project",
    category: "Marketing",
    image: "https://source.unsplash.com/400x300/?seo,analytics",
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
    <section className="min-h-screen py-8 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border-2 font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-orange-500 border-orange-500 text-white shadow-lg"
                  : "border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#1f2937] rounded-xl overflow-hidden shadow-lg border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange-400 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-gray-400 mb-2">
                  {item.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm italic text-green-400">
                  Outcome: {item.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
