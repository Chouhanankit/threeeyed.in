import React, { useEffect, useRef } from "react";
import CardIndustries from "./CardIndustries";

const Industries = () => {
  const scrollRef = useRef(null);
  const isPaused = useRef(false);
  const resumeTimeout = useRef(null);

  const scrollAmount = 1;
  const scrollDelay = 20;

  // Manual scroll handler
  const scroll = (direction) => {
    if (!scrollRef.current) return;

    isPaused.current = true;

    scrollRef.current.scrollBy({
      left: direction === "next" ? 300 : -300,
      behavior: "smooth",
    });

    // Resume auto-scroll after 3s
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => {
      isPaused.current = false;
    }, 3000);
  };

  // Auto-scroll + seamless loop
  useEffect(() => {
    const container = scrollRef.current;

    const autoScroll = () => {
      if (!container || isPaused.current) return;

      container.scrollLeft += scrollAmount;

      // If we've reached the "end" of the first half
      if (container.scrollLeft >= container.scrollWidth / 2) {
        // Reset to beginning of loop
        container.scrollLeft = 0;
      }
    };

    const interval = setInterval(autoScroll, scrollDelay);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white pt-12 px-4 sm:px-6 lg:px-0">
      <div className="max-w-9xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10 gap-6 max-w-7xl mx-auto">
          <div>
            <h2
              data-aos="fade-left"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black"
            >
              Industries We Serve
            </h2>
          </div>
          <div data-aos="flip-up" className="text-xs text-gray-600 max-w-md">
            <p>
              Three-Eyed Pvt. Ltd. is an Indore-based IT company specializing in
              delivering cutting-edge technology solutions. Our expertise spans
              13 diverse industries, including banking, insurance,
              telecommunications, media, entertainment, distribution, retail,
              and many more.
            </p>
          </div>
          {/* Arrows */}
          <div
            data-aos="fade-right"
            className="flex space-x-4 self-start lg:self-center"
          >
            <button
              onClick={() => scroll("prev")}
              className="lg:w-20 w-16 lg:h-10 h-6 text-[#EA7900] outline-2 outline-offset-2 outline-[#EA7900] rounded-full flex items-center justify-center hover:bg-gray-100 transition"
              aria-label="Scroll to previous industries"
            >
              Prev
            </button>
            <button
              onClick={() => scroll("next")}
              className="lg:w-20 w-16 lg:h-10 h-6 text-[#EA7900] outline-2 outline-offset-2 outline-[#EA7900] rounded-full flex items-center justify-center hover:bg-gray-100 transition"
              aria-label="Scroll to next industries"
            >
              Next
            </button>
          </div>
        </div>

        {/* Card Area */}
        <CardIndustries scrollRef={scrollRef} />
      </div>
    </section>
  );
};

export default Industries;
