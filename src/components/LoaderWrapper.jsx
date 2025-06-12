import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const LoaderWrapper = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    setLoading(true);
    setAnimateOut(false);

    const timer = setTimeout(() => {
      setAnimateOut(true);
      setTimeout(() => setLoading(false), 700);
    }, 700);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-all duration-700 ease-in-out ${
            animateOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="flex space-x-4 text-2xl text-orange-500 tracking-widest font-semibold">
            {"LOADING".split("").map((letter, index) => (
              <span
                key={index}
                className="animate-pulse"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: "1s",
                  animationIterationCount: "infinite",
                  animationTimingFunction: "ease-in-out",
                  opacity: 0.1 + index * 0.1,
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className={loading ? "overflow-hidden h-screen" : ""}>
        {children}
      </div>
    </>
  );
};

export default LoaderWrapper;
