import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import GetContact from "./screens/GetContact";
import GetJoinTeam from "./screens/GetJoinTeam";
import GetCapabilities from "./screens/GetCapabilities";
import CapabilitiesList from "./screens/CapabilitiesList";
import CapabilityPage from "./screens/CapabilityPage";
import IndustriesPage from "./screens/IndustriesPage";
import AboutPage from "./screens/AboutPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/About";
import FounderPage from "./screens/FounderPage";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import TermsConditions from "./screens/TermsConditions";
import WhatsAppChat from "./components/WhatsAppChat";
import PortfolioPage from "./screens/PortfolioPage";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <ToastContainer
        position="top-center"
        toastClassName="w-[90vw] max-w-sm sm:w-auto !rounded-lg !shadow-md"
      />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/getcontact" element={<GetContact />} />
        <Route path="/jointeam" element={<GetJoinTeam />} />
        <Route path="/services" element={<GetCapabilities />} />
        <Route path="/" element={<CapabilitiesList />} />
        <Route path="/service/:slug" element={<CapabilityPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/careers" element={<About />} />
        <Route path="/about/team" element={<FounderPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
      <WhatsAppChat />
      <Footer />
    </Router>
  );
};

export default App;
