import React from "react";

const GetCapaComp = ({ section, capabilities }) => {
  const sections = section ? [section] : capabilities;

  const renderSection = (section) => (
    <section
      key={section.title}
      className="bg-white lg:pt-40 pt-22 py-16 px-6 md:px-20 border-b"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="lg:text-4xl text-2xl font-bold text-gray-900 mb-6">
          {section.title}
        </h2>
        <p className="text-lg text-gray-700 mb-10">{section.intro}</p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          {section.definitionTitle}
        </h3>
        <p className="text-gray-700 mb-8">{section.definition}</p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          {section.featuresTitle}
        </h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-8">
          {section.features.map((feature, index) => (
            <li key={index}>
              <strong>{feature.split(":")[0]}:</strong> {feature.split(":")[1]}
            </li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          {section.techTitle}
        </h3>
        <p className="text-gray-700 mb-8">{section.techIntro}</p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-8">
          {section.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          {section.whyTitle}
        </h3>
        <p className="text-gray-700 mb-8">{section.whyText}</p>

        <div className="text-center">
          <a
            href={section.ctaLink}
            className="inline-block border-2 border-blue-500 bg-amber-400 text-white text-lg font-medium py-3 px-6 rounded-0 hover:bg-amber-700 transition"
          >
            {section.ctaText}
          </a>
        </div>
      </div>
    </section>
  );

  return <>{sections.map(renderSection)}</>;
};

export default GetCapaComp;
