import React from "react";
import CardComponent from "./CardComponent";

const Capabilities = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-14">
          {/* Text Area */}
          <div
            data-aos="fade-up"
            className="absolute text-black w-[90%] left-0 md:left-24 top-32 md:w-1/2 md:top-40 p-2 md:p-0 "
          >
            <h1
              data-aos-duration="3000"
              className="text-xl md:text-6xl font-bold mb-3 md:mb-6"
            >
              Capabilities
            </h1>
            <p className="text-[12px] w-[70%] md:w-full md:text-base">
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
