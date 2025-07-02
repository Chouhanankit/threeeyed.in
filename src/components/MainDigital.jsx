import React from "react";
import insta from "../assets/instagram.webp";
import google from "../assets/google.webp";
import youtube from "../assets/youtube.webp";
import facebook from "../assets/facebook.webp";
import social from "../assets/socialmedia.webp";
import content from "../assets/content.webp";
import linkedin from "../assets/linkedin.webp";
import twitter from "../assets/twitter.webp";

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

const MainDigital = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      {digitalMarketingServices.map((service, index) => (
        <div
          key={index}
          data-aos="flip-up"
          className="w-full bg-gradient-to-br from-[#1c2e5a] to-[#0b1c35] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center text-white shadow-xl border border-white/10 backdrop-blur-lg hover:scale-[1.01] transition duration-300"
        >
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
            <img
              src={service.backgroundImage}
              alt={service.title}
              className="w-32 h-32 object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-2">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <hr className="my-1 border-white/20" />
            <p className="text-sm text-gray-300">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainDigital;
