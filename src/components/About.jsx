import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-white pt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-6 flex flex-col text-center justify-center items-center">
          <div>
            <h2 className="text-3xl pb-4 sm:text-4xl lg:text-5xl font-bold text-black">
              About Us
            </h2>
          </div>
          <div className="text-base text-gray-800 max-w-md">
            <p>
              Designing & Developing Stunning UI/UX Web and App for advance
              upgrade of customer experience
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center py-4">
          <hr className="w-full max-w-7xl border-t border-gray-800" />
        </div>

        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-black text-left text-sm sm:text-base leading-relaxed">
            Three-Eyed is the website designing company based in Indore,
            established in 2025 providing web services & solutions such as
            website design, website development in Indore, Domain Registration,
            web hosting, Android App Development, eCommerce web development,
            Search Engine Optimization, etc. We have good experience in
            developing different platform websites and we keep our eye on the
            latest technologies to implement on the website for better
            conversion and user experience. 
          </p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-6 lg:items-center py-6 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
              Our Mission
            </h2>
          </div>
          <div className="text-gray-800 text-sm sm:text-base leading-relaxed lg:w-2/3">
            <p>
              Our target is to earn global admiration as an IT Company, work for
              building and maintaining long-lasting relationships with people by
              giving excellent service. Our target at providing the highest
              quality of services in every step of Client Relationship, from
              initial contact to follow up support. We are having happy
              customers across all over India for website design, website
              development, and SEO. We make sure the client gets exactly what he
              needs. Our developers take ideas from the client as per their
              requirements and brainstorm them to provide a customized product.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
