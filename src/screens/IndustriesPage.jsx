import React, { useEffect, useState } from "react";
import GetIndustries from "../components/GetIndustries";
import ReactPlayer from "react-player";

const carouselItems = [
  {
    videoUrl:
      "https://res.cloudinary.com/dg2seao8x/video/upload/v1747993361/2818564-uhd_3840_2160_24fps_rfkvne.mp4",
  },
];
const IndustriesPage = () => {
  const [current, setCurrent] = useState(0);
  const item = carouselItems[current];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="w-full min-h-screen  bg-white">
        <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
          {/* Left diagonal section - 60% */}
          <div className="absolute md:top-0 top-0 md:left-0 md:w-[100%]  h-full bg-white clip-left z-20 flex justify-center items-center mx-auto max-w-screen-xl">
            {/* Text Half */}
            <div
              data-aos="fade-up"
              className="absolute text-black w-[90%] left-0 md:left-24 top-32 md:w-1/2 md:top-40 p-2 md:p-0 "
            >
              <h1
                data-aos-duration="3000"
                className="text-2xl md:text-6xl font-bold mb-3 md:mb-6"
              >
                Industries We Serve
              </h1>
              <p className="text-[12px] w-[60%] md:w-full md:text-base">
                Three-Eyed Pvt. Ltd. is an Indore-based IT company specializing
                in delivering cutting-edge technology solutions. Our expertise
                spans 13 diverse industries, including banking, insurance,
                telecommunications, media, entertainment, distribution, retail,
                and many more.
              </p>
            </div>
          </div>

          {/* Right diagonal section - 40% */}
          <div className="relative w-full h-screen z-0 overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
              <ReactPlayer
                url={item.videoUrl}
                playing
                loop
                muted
                controls={false}
                playsinline
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
                config={{
                  file: {
                    attributes: {
                      playsInline: true,
                      muted: true,
                      autoPlay: true,
                      preload: "auto",
                      style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>

        {/* Grid Cards */}
        <div className="mx-auto px-6 g:px-0 w-full max-w-8xl">
          <h1 className="text-black font-bold lg:text-5xl text-xl py-15">
            Our Contacts
          </h1>
          <GetIndustries />
        </div>
      </div>

      <style>{`
    .clip-left {
      clip-path: polygon(0 0, 110% 0, 0% 100%, 0 100%);
    }

   .clip-right {
  clip-path: polygon(60% 0, 100% 0, 100% 100%, 0 100%);
}

  @media (max-width: 768px) {
  .clip-left,
  .clip-right {
    width: 100%;
    position: absolute;
    margin: 0;
    padding: 0;
  }


@media (max-width: 768px) {
  .clip-left {
    clip-path: polygon(0 0, 100% 0, 0 100%, 0 100%);
  }

  .clip-right {
    clip-path: polygon(75% 0, 100% 0, 100% 100%, 0 100%);
  }
}


  `}</style>
    </>
  );
};

export default IndustriesPage;
