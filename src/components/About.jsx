import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-white pt-12 px-4 sm:px-6 lg:px-8">
        <div
          data-aos="fade-down"
          className="max-w-7xl mx-auto py-6 flex flex-col text-center justify-center items-center"
        >
          <div>
            <h2 className="text-3xl pt-10 pb-4 sm:text-4xl lg:text-5xl font-bold text-black">
              About Us
            </h2>
          </div>
          <div className="text-base text-gray-800 max-w-md">
            <p>
              Building high-impact digital experiences with world-class web and
              app development solutions.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center py-4">
          <hr className="w-full max-w-7xl border-t border-gray-800" />
        </div>

        <div
          data-aos="zoom-in"
          className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"
        >
          <p className="text-black text-left text-sm sm:text-base leading-relaxed">
            <strong>Three-Eyed Pvt. Ltd.</strong> is a fast-growing IT solutions
            company based in Indore, established in 2025. We specialize in
            delivering robust and scalable digital products, including custom
            website design, full-stack web development, eCommerce platforms,
            UI/UX design, mobile app development, cloud integration, and digital
            marketing. At Three-Eyed, we combine creativity, cutting-edge
            technology, and customer-first strategies to help businesses grow in
            the digital landscape.
            <br />
            <br />
            With a strong focus on quality, innovation, and customer
            satisfaction, we have partnered with startups, SMEs, and enterprises
            across India to launch meaningful and measurable web solutions.
            Whether you're looking to revamp your brand’s online presence or
            develop a product from scratch, we are your strategic technology
            partner.
          </p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-6 lg:items-center py-6 px-4 sm:px-6 lg:px-8">
          <div>
            <h2
              data-aos="fade-left"
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-black"
            >
              Our Mission
            </h2>
          </div>
          <div
            data-aos="zoom-in"
            className="text-gray-800 text-sm sm:text-base leading-relaxed lg:w-2/3"
          >
            <p>
              Our mission at Three-Eyed is to empower businesses through
              transformative digital solutions. We aim to become a globally
              admired technology company by building long-term partnerships and
              delivering measurable value to our clients. From initial
              consultation to post-launch support, we ensure each client gets a
              tailored solution that meets their goals and exceeds expectations.
              Our agile teams are committed to driving innovation, performance,
              and digital success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
