import React, { useState } from "react";
import { Link } from "react-router-dom";

const Button = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 500);
  };

  return (
    <div className="inline-block">
      <Link to={"/getcontact"}>
        <h1
          onClick={handleClick}
          className={`group relative inline-flex items-center justify-center w-36 h-10 md:w-48 md:h-12 bg-transparent border border-white rounded-full cursor-pointer outline-none overflow-hidden ${
            clicked ? "clicked" : ""
          }`}
          style={{ touchAction: "manipulation" }}
        >
          {/* Animated Circle */}
          <span
            className={`circle absolute left-0 w-12 h-12 bg-[#EA7900] rounded-full transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] z-0 ${
              clicked ? "w-full" : "group-hover:w-full"
            }`}
          ></span>

          {/* Arrow Icon */}
          <span
            className={`icon-arrow absolute left-4 w-[0.125rem] h-[0.9rem] transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] z-10 ${
              clicked ? "translate-x-4" : "group-hover:translate-x-4"
            }`}
          >
            <span className="block absolute top-0 left-[-0.50rem] w-[0.625rem] h-[0.625rem] border-t-2 border-r-2 border-white rotate-45"></span>
          </span>

          <span className="relative z-10 text-white font-bold text-[10px] md:text-xs uppercase tracking-wider pl-8 pr-4 md:pl-10 md:pr-6 text-center">
            Contact Us
          </span>
        </h1>
      </Link>
    </div>
  );
};

export default Button;
