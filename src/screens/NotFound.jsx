import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-4">
        <div className="text-white text-center p-8 rounded-3xl backdrop-blur-lg bg-white/10 shadow-2xl border border-white/20 max-w-xl w-full animate-fade-in">
          <h1 className="text-8xl font-bold tracking-widest drop-shadow-lg text-white/90">
            404
          </h1>
          <p className="text-2xl mt-4 font-semibold">Page Not Found</p>
          <p className="mt-2 text-gray-300">
            Oops! The page you're looking for doesn’t exist or has been moved.
          </p>
          <div className="mt-6">
            <a
              href="/"
              className="inline-block px-6 py-3 text-sm font-medium rounded-full bg-white text-gray-900 hover:bg-gray-200 transition-all duration-300 shadow-lg"
            >
              ← Go Back Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
