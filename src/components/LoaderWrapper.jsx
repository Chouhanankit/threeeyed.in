import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const LoaderWrapper = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLoading(true);
    setAnimateOut(false);

    const timer = setTimeout(() => {
      const storedData = localStorage.getItem("userData");
      if (storedData) {
        setUserData(JSON.parse(storedData));
      }

      setAnimateOut(true);
      setTimeout(() => setLoading(false), 700);
    }, 700);
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    const letters = "LOADING".split("");

    return (
      <div
        className={`flex items-center justify-center h-screen bg-black transition-all duration-700 ease-in-out ${
          animateOut
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <div className="flex space-x-4 text-2xl text-orange-500 tracking-widest font-semibold">
          {letters.map((letter, index) => (
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
    );
  }

  return <>{children}</>;
};

export default LoaderWrapper;
