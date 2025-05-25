import React from "react";
import insta from "../assets/instagram.jpg";
import youtube from "../assets/youtube.jpg";
import facebook from "../assets/facebook.jpg";
import content from "../assets/content.jpg";
import linkedin from "../assets/linkedin.jpg";
import social from "../assets/socialmedia.jpg";
import google from "../assets/google.jpg";
import twitter from "../assets/twitter.jpg";

const digitalMarketingServices = [
  {
    title: "Instagram Marketing",
    description: "Engage with your audience and grow your brand visually.",
    backgroundImage: insta,
  },
  {
    title: "Google Business Management",
    description:
      "Optimize and maintain your Google Business profile for visibility and trust.",
    backgroundImage: google,
  },
  {
    title: "YouTube Promotion",
    description: "Boost your video reach and grow subscribers effectively.",
    backgroundImage: youtube,
  },
  {
    title: "Facebook Advertising",
    description: "Target your ideal customers with powerful ad campaigns.",
    backgroundImage: facebook,
  },
  {
    title: "Social Media Optimization",
    description: "Enhance your online presence across all platforms.",
    backgroundImage: social,
  },
  {
    title: "Content Marketing",
    description:
      "Create and distribute valuable content to attract and retain customers.",
    backgroundImage: content,
  },
  {
    title: "LinkedIn Outreach",
    description: "Connect with professionals and generate B2B leads.",
    backgroundImage: linkedin,
  },
  {
    title: "Twitter Marketing",
    description: "Engage in real-time conversations and trend visibility.",
    backgroundImage: twitter,
  },
];

const GetMarketing = () => {
  return (
    <>
      <div className="flex-col pb-10 overflow-x-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {digitalMarketingServices.map((service, index) => (
          <div
            data-aos="zoom-in"
            key={index}
            className="min-w-[280px] sm:w-full h-96 flex-shrink-0 sm:flex-shrink bg-cover bg-center relative rounded-0 shadow-lg group"
            style={{
              backgroundImage: `url(${service.backgroundImage})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 lg:group-hover:backdrop-blur-md lg:group-hover:bg-black/70 transition duration-300"></div>

            {/* Text Content */}
            <div className="absolute top-10 left-6 right-6 text-white transition-all duration-300">
              <h2 className="text-xl font-bold">{service.title}</h2>
              {service.description && (
                <p className="mt-4 text-sm opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition duration-300">
                  {service.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetMarketing;
