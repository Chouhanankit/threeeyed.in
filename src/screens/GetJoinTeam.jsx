import React from "react";
import JoinTeamForm from "../components/JoinTeamForm";

const GetJoinTeam = () => {
  return (
    <>
      <div className="pt-24 bg-gray-300 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
            {/* Text Content */}
            <div
              data-aos="fade-right"
              className="text-center lg:pt-8 pt-4 lg:text-left "
            >
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-black">
                Join Our Tech Team
              </h1>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl py-4 lg:w-[35rem] p-2 mx-auto lg:mx-0">
                Passionate about coding, design, or problem-solving? Be part of
                our mission to build smarter digital experiences.
              </p>
            </div>

            {/* Form */}
            <div data-aos="fade-left" className="w-full lg:w-1/2">
              <JoinTeamForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetJoinTeam;
