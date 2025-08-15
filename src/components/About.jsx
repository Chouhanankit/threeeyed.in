import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 text-gray-900">
      {/* Header */}
      <div
        className="max-w-7xl mx-auto py-30 px-4 sm:px-6 lg:px-8 text-center"
        data-aos="fade-down"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#EA7900] tracking-tight">
          About Three-Eyed Limited 
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          Building high-impact digital experiences with world-class web and
          marketing solutions.
        </p>
      </div>

      {/* About Description */}
      <div className="border-t border-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-start">
          <div data-aos="fade-right">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Three-Eyed Limited</strong> is a fast-growing IT and
              marketing company based in Indore, India. Since our founding in
              2025, we’ve helped businesses thrive online with end-to-end
              solutions including:
              <ul className="list-disc list-inside mt-4 space-y-1">
                <li>Custom Website Design & Full-stack Development</li>
                <li>eCommerce & Mobile App Development</li>
                <li>UI/UX Design & Cloud Integrations</li>
                <li>Digital Marketing, SEO & Branding</li>
              </ul>
            </p>
          </div>
          <div
            data-aos="fade-left"
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-bold text-[#EA7900] mb-2">
              Why Choose Us?
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>✅ 100% Client-Centric Approach</li>
              <li>✅ Innovative, Scalable Tech Solutions</li>
              <li>✅ Agile Teams with Industry Expertise</li>
              <li>✅ Proven Success Across Multiple Sectors</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="bg-[#FFF6EF] py-16 mt-10" data-aos="zoom-in">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          <p className="mt-6 text-base leading-relaxed text-gray-700">
            To empower businesses with transformative digital and marketing
            solutions that drive measurable impact. We strive to build long-term
            partnerships by delivering tailored experiences—from consultation to
            launch and beyond. Through innovation, transparency, and
            collaboration, we are redefining digital growth.
          </p>
        </div>
      </div>

      {/* Values Section (Optional) */}
      <div
        className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
          Core Values That Drive Us
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Innovation",
              desc: "We use cutting-edge tech to deliver creative solutions.",
            },
            {
              title: "Integrity",
              desc: "We build trust through transparency and honesty.",
            },
            {
              title: "Excellence",
              desc: "We’re committed to delivering the highest quality output.",
            },
            {
              title: "Partnership",
              desc: "We work as your extended team, not just vendors.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold text-[#EA7900] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
