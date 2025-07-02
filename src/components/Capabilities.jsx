import React from "react";
import CardComponent from "./CardComponent";

const Capabilities = () => {
  return (
    <>
      <div className="bg-noise bg-[#171717] text-white/80">
        <div className="mx-auto w-full max-w-8xl py-6 lg:py-14">
          {/* Text Area */}
          <div className="flex p-4 lg:border-t-4 rounded-tl-4xl border-[#EA7900] flex-col lg:flex-row justify-between items-start gap-4">
            <h1
              data-aos="fade-right"
              className="text-2xl lg:border-l-2 lg:border-b-4 lg:border-r-2 border-t-2 lg:border-t-0 border-[#EA7900] rounded-tl-4xl rounded-bl-4xl py-6 px-2 sm:text-4xl lg:text-5xl text-white/80 font-bold"
            >
              Our Services
            </h1>
            <p
              data-aos="fade-left"
              className="text-[14px] py-2 sm:text-lg lg:text-lg text-white/80 lg:w-[60%]"
            >
              We offer a wide range of digital solutions and best-in-class
              platforms to deliver meaningful outcomes, enhance customer
              experiences, and transform industries at scale and with
              unparalleled speed.
            </p>
          </div>

          {/* Row and Col area */}
          <div className="pt-10">
            <CardComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Capabilities;
