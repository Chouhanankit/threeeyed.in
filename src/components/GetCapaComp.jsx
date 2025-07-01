import React from "react";
import { Link } from "react-router-dom";
import { FaRocket, FaCheckCircle, FaCogs } from "react-icons/fa";

const GetCapaComp = ({ section, capabilities }) => {
  const sections = section ? [section] : capabilities;

  const renderSection = (section) => (
    <section
      key={section.slug}
      className="bg-gradient-to-b from-[#F8FAFC] to-white lg:pt-36 pt-24 pb-20 px-6 md:px-20 border-b border-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="lg:text-5xl text-3xl font-extrabold text-[#001F3D] mb-6">
          {section.title}
        </h2>

        {/* Intro */}
        <p className="text-lg text-gray-600 mb-10">{section.shortPitch}</p>

        {/* Details */}
        <div className="bg-white shadow-md rounded-2xl p-8 mb-10 border border-gray-200">
          <h3 className="text-2xl font-semibold text-[#001F3D] flex items-center gap-2 mb-4">
            <FaRocket className="text-[#EA7900]" /> What We Deliver
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {section.detailedDescription}
          </p>
        </div>

        {/* Process Steps */}
        {section.processSteps && (
          <div className="bg-[#fffaf4] rounded-2xl p-8 mb-10 border border-orange-200">
            <h3 className="text-2xl font-semibold text-[#EA7900] mb-4">
              {section.processTitle}
            </h3>
            <ul className="list-decimal pl-5 text-gray-800 space-y-2">
              {section.processSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Why Choose Us */}
        {section.whyChooseUs && (
          <div className="bg-white shadow-sm rounded-2xl p-8 mb-10 border border-gray-100">
            <h3 className="text-2xl font-semibold text-[#001F3D] flex items-center gap-2 mb-4">
              <FaCheckCircle className="text-[#EA7900]" />{" "}
              {section.whyChooseUsTitle}
            </h3>
            <ul className="list-disc pl-5 text-gray-800 space-y-2">
              {section.whyChooseUs.map((reason, index) => (
                <li key={index}>{reason}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Quote or Pitch */}
        {section.examplePitch && (
          <blockquote className="border-l-4 border-orange-400 pl-6 italic text-gray-600 mb-10">
            {section.examplePitch}
          </blockquote>
        )}

        {/* CTA Button */}
        {section.ctaText && (
          <div className="text-center mt-10">
            <Link
              to={section.ctaLink}
              className="inline-block bg-[#EA7900] text-white text-lg font-semibold py-3 px-8 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              {section.ctaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );

  return <>{sections.map(renderSection)}</>;
};

export default GetCapaComp;
