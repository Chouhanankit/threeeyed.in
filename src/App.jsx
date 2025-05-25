import React, { useEffect } from "react";
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
import MarketingPage from "./screens/MarketingPage";
import AboutPage from "./screens/AboutPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/About";
import FounderPage from "./screens/FounderPage";

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
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="toast-container-fullwidth"
      />

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/getcontact" element={<GetContact />} />
        <Route path="/jointeam" element={<GetJoinTeam />} />
        <Route path="/getcapabilities" element={<GetCapabilities />} />
        <Route path="/" element={<CapabilitiesList />} />
        <Route path="/capabilities/:slug" element={<CapabilityPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/marketing" element={<MarketingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/careers" element={<About />} />
        <Route path="/about/team" element={<FounderPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
