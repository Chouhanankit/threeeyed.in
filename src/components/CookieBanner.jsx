// CookieBanner.jsx
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const CookieBanner = ({ forceShow }) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent || forceShow) {
      setShowBanner(true);
    }
  }, [forceShow]);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    setShowBanner(false);
  };

  const handleCustomize = () => {
    toast.info("Custom preferences modal coming soon...");
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex flex-col md:flex-row justify-between items-center z-50">
      <p className="mb-2 md:mb-0">
        We use cookies to improve your experience.{" "}
        <a href="/privacy" className="underline">
          Learn more
        </a>
        .
      </p>
      <div className="space-x-2">
        <button
          onClick={handleAcceptAll}
          className="bg-[#EA7900] px-4 py-2 rounded hover:bg-[#ea7900c2]"
        >
          Accept All
        </button>
        <button
          onClick={handleCustomize}
          className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
        >
          Customize
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
