import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CapabilityCard = ({ title, slug, image }) => {
  return (
    <div data-aos="zoom-in" className="flex flex-col items-center justify-between p-10 rounded shadow-md bg-gray-200 text-black hover:text-white hover:bg-gray-600 transition duration-300 ease-in-out cursor-pointer">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center justify-between w-full">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Link to={`/capabilities/${slug}`}>
          <ArrowRight className="ml-4" />
        </Link>
      </div>
    </div>
  );
};

export default CapabilityCard;
