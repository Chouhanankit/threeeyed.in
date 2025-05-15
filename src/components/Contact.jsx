import React from "react";

const Contact = () => {
  return (
    <>
      <div className="bg-[#1E1E1E] flex justify-between items-center">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-16 flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Careers area */}
          <div className="px-6 py-10 lg:py-16 md:text-center lg:text-left w-full lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl my-4 text-white">
              Careers
            </h1>
            <p className="text-base sm:text-lg mb-10 text-white">
              Gain a heritage. Leave a legacy.
            </p>
            <button className="py-4 w-full px-6 border text-sm border-white text-white hover:bg-white hover:text-black hover:scale-105 active:bg-white active:text-black active:scale-95 transition duration-180 transform">
              JOIN US
            </button>
          </div>

          {/* hr line */}
          <div className="lg:block">
            <hr className="bg-gray-200 md:w-52 w-68 md:rotate-90" />
          </div>

          {/* Contact area */}
          <div className="px-6 py-10 lg:py-16 md:text-center lg:text-left w-full lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl my-4 text-white">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg mb-10 text-white">
              What can we help you achieve.
            </p>
            <button className="py-4 w-full px-6 border text-sm border-white text-white hover:bg-white hover:text-black hover:scale-105 active:bg-white active:text-black active:scale-95 transition duration-180 transform">
              SPEAK WITH US
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
