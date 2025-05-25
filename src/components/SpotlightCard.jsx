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

const gridSpanClasses = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-1 sm:row-span-2",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-3 sm:row-span-2",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-1 sm:row-span-2",
  "sm:col-span-3 sm:row-span-1",
];

const SpotlightCard = () => {
  return (
    <>
      {/* Dense Grid */}
      {digitalMarketingServices.map((service, index) => (
        <div
          key={index}
          data-aos="zoom-in"
          className={`relative group bg-cover bg-center rounded-0 shadow-md overflow-hidden col-span-1 row-span-1 ${
            gridSpanClasses[index % gridSpanClasses.length]
          }`}
          style={{ backgroundImage: `url(${service.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-300"></div>
          <div className="absolute top-6 left-6 right-6 text-white">
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-sm mt-2 opacity-100 text-gray-300">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default SpotlightCard;
