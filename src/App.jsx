import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Static Components
import Navbar from "./components/Navbar";
import WhatsAppChat from "./components/WhatsAppChat";

// Lazy-loaded Screens
const Home = lazy(() => import("./screens/Home"));
const NotFound = lazy(() => import("./screens/NotFound"));
const GetContact = lazy(() => import("./screens/GetContact"));
const GetJoinTeam = lazy(() => import("./screens/GetJoinTeam"));
const GetCapabilities = lazy(() => import("./screens/GetCapabilities"));
const CapabilitiesList = lazy(() => import("./screens/CapabilitiesList"));
const CapabilityPage = lazy(() => import("./screens/CapabilityPage"));
const IndustriesPage = lazy(() => import("./screens/IndustriesPage"));
const AboutPage = lazy(() => import("./screens/AboutPage"));
const About = lazy(() => import("./components/About"));
const FounderPage = lazy(() => import("./screens/FounderPage"));
const PrivacyPolicy = lazy(() => import("./screens/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./screens/TermsConditions"));
const PortfolioPage = lazy(() => import("./screens/PortfolioPage"));
const Footer = lazy(() => import("./components/Footer"));
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollTopComp";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <ToastContainer
        position="top-center"
        toastClassName="w-[90vw] max-w-sm sm:w-auto !rounded-lg !shadow-md"
      />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getcontact" element={<GetContact />} />
          <Route path="/jointeam" element={<GetJoinTeam />} />
          <Route path="/services" element={<GetCapabilities />} />
          <Route path="/capabilities" element={<CapabilitiesList />} />
          <Route path="/service/:slug" element={<CapabilityPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/careers" element={<About />} />
          <Route path="/about/team" element={<FounderPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>

      <WhatsAppChat />
    </Router>
  );
};

export default App;
