import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Contact from "../components/Contact";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const AboutPage = () => {
  return (
    <div className="bg-noise bg-[#171717] text-white/90 font-sans">
      <Helmet>
        <title>About Us | Three-Eyed Limited</title>
        <meta
          name="description"
          content="Learn about Three-Eyed Limited, a leading IT company in Indore, offering web development, digital marketing, branding, and full-stack solutions."
        />
        <meta
          name="keywords"
          content="Three-Eyed, About Us, IT Company Indore, Web Development, Digital Marketing, SEO, Team"
        />
        <meta name="author" content="Three-Eyed Limited" />

        {/* Open Graph Meta */}
        <meta property="og:title" content="About Us | Three-Eyed Limited" />
        <meta
          property="og:description"
          content="Explore the journey, mission, and values of Three-Eyed Limited — a full-stack web and marketing company based in India."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dg2seao8x/image/upload/v1752144375/og-banner_ftgeyc.webp"
        />
        <meta
          property="og:url"
          content="https://www.threeeyedlimited.com/about"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-[#EA7900] lg:pt-40 pt-20 pb-24 px-6 sm:px-12 lg:px-24 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            About Three-Eyed Limited
          </h1>
          <p className="text-lg sm:text-xl font-light max-w-3xl mx-auto">
            Building high-impact digital experiences with world-class web and
            app development solutions.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto space-y-16 text-white/90">
          {[
            {
              title: "Who We Are",
              content: (
                <p>
                  <strong>Three-Eyed Limited</strong> is a fast-growing IT
                  solutions company based in Indore, established in 2025. We
                  specialize in delivering robust and scalable digital products
                  including custom website design, full-stack development,
                  eCommerce platforms, UI/UX design, mobile app development,
                  cloud integration, and digital marketing.
                </p>
              ),
            },
            {
              title: "Our Mission",
              content: (
                <>
                  <p>
                    Our mission at Three-Eyed is to empower businesses through
                    transformative digital solutions. We aim to become a
                    globally admired technology company by building long-term
                    partnerships and delivering measurable value.
                  </p>
                  <p className="mt-4">
                    From consultation to post-launch support, our agile teams
                    craft tailored solutions that drive innovation, performance,
                    and digital success.
                  </p>
                </>
              ),
            },
            {
              title: "What Sets Us Apart",
              content: (
                <ul className="list-disc pl-6 space-y-2 text-base">
                  <li>
                    <strong>Client-Centric Approach:</strong> We listen,
                    understand, and deliver strategic outcomes.
                  </li>
                  <li>
                    <strong>End-to-End Solutions:</strong> Branding,
                    development, marketing — all in one place.
                  </li>
                  <li>
                    <strong>Scalable & Agile:</strong> We build flexible
                    solutions that grow with your business.
                  </li>
                  <li>
                    <strong>Innovative Team:</strong> A passionate crew of
                    designers, developers, and strategists.
                  </li>
                  <li>
                    <strong>Results-Driven:</strong> We focus on ROI and
                    long-term impact.
                  </li>
                </ul>
              ),
            },
            {
              title: "Industries We Serve",
              content: (
                <p>
                  Startups, SMEs, enterprises — our clients span industries
                  including eCommerce, healthcare, real estate, education, and
                  more. If you’re looking to build or transform your digital
                  presence, we’re your strategic partner.
                </p>
              ),
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold text-[#EA7900] mb-3">
                {section.title}
              </h2>
              <div className="text-base leading-relaxed">{section.content}</div>
            </motion.div>
          ))}

          {/* Final CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center pt-12"
          >
            <h2 className="text-2xl font-bold text-[#EA7900] mb-3">
              Let’s Build Something Great
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Ready to bring your digital vision to life? Partner with
              Three-Eyed Limited for innovative, reliable, and scalable
              solutions.
            </p>
            <div className="border-2 border-[#EA7900] w-full"></div>
            {/* Contact Form Section */}
            <Contact />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
