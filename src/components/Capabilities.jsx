import React from "react";
import CardComponent from "./CardComponent";

const Capabilities = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-14">
          {/* Text Area */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl text-black font-bold">
              Capabilities
            </h1>
            <p className="text-[14px] sm:text-lg lg:text-lg text-black lg:w-[40%]">
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
