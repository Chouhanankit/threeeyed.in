import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import footerlogo from "../assets/logo3eyed.jpg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Footer = () => {
  const [toastShown, setToastShown] = useState(false);

  const handleInfo = () => {
    if (!toastShown) {
      toast.info("It's coming very soon....");
      setToastShown(true);
      setTimeout(() => setToastShown(false), 4000); // reset after 4 seconds
    }
  };

  return (
    <footer className="bg-gradient-to-t from-[#0a0a0a] to-[#1c1c1c] text-white">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-10">
        <div className="md:flex md:justify-between md:items-center">
          <div className="mb-8 md:mb-0">
            <a href="/" className="flex items-center">
              <img src={footerlogo} className="h-14 me-3 rounded-md" alt="Three-Eyed Logo" />
            </a>
            <p className="text-sm text-gray-400 mt-3 max-w-sm">
              Empowering businesses with digital transformation and marketing excellence — let's build a smarter future together.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="text-orange-400 font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:text-orange-400">About Us</Link></li>
                <li><Link to="/services" className="hover:text-orange-400">Services</Link></li>
                <li><Link to="/industries" className="hover:text-orange-400">Industries</Link></li>
                <li><Link to="/getcontact" className="hover:text-orange-400">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-orange-400 font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/about/careers" className="hover:text-orange-400">Careers</Link></li>
                <li><Link to="/portfolio" className="hover:text-orange-400">Portfolio</Link></li>
                <li><Link to="/" onClick={handleInfo} className="hover:text-orange-400">Investor Portal</Link></li>
                <li><Link to="/getcontact" className="hover:text-orange-400">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-orange-400 font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/threeeyedlimited/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff1e72]">Instagram</a>
                <a href="https://www.linkedin.com/company/three-eyed-it-solutions-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs text-gray-400">
          <p className="text-center sm:text-left mb-2 sm:mb-0">
            © 2025 <Link to="/" className="hover:underline">Three-Eyed Pvt. Ltd.</Link> All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/privacy" className="hover:text-orange-400">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms-conditions" className="hover:text-orange-400">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
