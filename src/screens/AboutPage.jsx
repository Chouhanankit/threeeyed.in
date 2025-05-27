import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#EA7900] lg:pt-40 pt-10 text-white py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl lg:pt-5 pt-12 md:pt-24 sm:text-5xl font-extrabold mb-4">
            About Three-Eyed Pvt. Ltd.
          </h1>
          <p className="text-lg sm:text-xl font-light max-w-3xl mx-auto">
            Building high-impact digital experiences with world-class web and
            app development solutions.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto space-y-10 text-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-[#EA7900] mb-3">
              Who We Are
            </h2>
            <p className="text-base leading-relaxed">
              <strong>Three-Eyed Pvt. Ltd.</strong> is a fast-growing IT
              solutions company based in Indore, established in 2025. We
              specialize in delivering robust and scalable digital products
              including custom website design, full-stack development, eCommerce
              platforms, UI/UX design, mobile app development, cloud
              integration, and digital marketing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#EA7900] mb-3">
              Our Mission
            </h2>
            <p className="text-base leading-relaxed">
              Our mission at Three-Eyed is to empower businesses through
              transformative digital solutions. We aim to become a globally
              admired technology company by building long-term partnerships and
              delivering measurable value.
            </p>
            <p className="mt-4 text-base leading-relaxed">
              From consultation to post-launch support, our agile teams craft
              tailored solutions that drive innovation, performance, and digital
              success.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#EA7900] mb-3">
              What Sets Us Apart
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-base">
              <li>
                <strong>Client-Centric Approach:</strong> We listen, understand,
                and deliver strategic outcomes.
              </li>
              <li>
                <strong>End-to-End Solutions:</strong> Branding, development,
                marketing — all in one place.
              </li>
              <li>
                <strong>Scalable & Agile:</strong> We build flexible solutions
                that grow with your business.
              </li>
              <li>
                <strong>Innovative Team:</strong> A passionate crew of
                designers, developers, and strategists.
              </li>
              <li>
                <strong>Results-Driven:</strong> We focus on ROI and long-term
                impact.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#EA7900] mb-3">
              Industries We Serve
            </h2>
            <p className="text-base leading-relaxed">
              Startups, SMEs, enterprises — our clients span industries
              including eCommerce, healthcare, real estate, education, and more.
              If you’re looking to build or transform your digital presence,
              we’re your strategic partner.
            </p>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-[#EA7900] mb-3">
              Let’s Build Something Great
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Ready to bring your digital vision to life? Partner with
              Three-Eyed Pvt. Ltd. for innovative, reliable, and scalable
              solutions.
            </p>
            <Link to={"/getcontact"}>
              <p className="inline-block bg-[#EA7900] hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 shadow-md">
                Get in Touch
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
