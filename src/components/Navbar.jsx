import React, { useState, useRef } from "react";
import threeeyedlogo from "../assets/logo3eyed.jpg";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";

const NavbarItems = [
  {
    id: 1,
    text: "ABOUT",
    link: "/about",
    dropdown: {
      "Our Company": [
        { id: "1-1", text: "Who We Are", link: "/about/" },
        { id: "1-2", text: "Our Team", link: "/about/team" },
        { id: "1-3", text: "Careers", link: "/about/careers" },
      ],
      "Our Values": [
        { id: "1-4", text: "Mission & Vision", link: "/about/careers" },
      ],
      Affiliations: [
        { id: "1-6", text: "Partner Network", link: "/" },
        { id: "1-7", text: "Certifications", link: "/" },
      ],
      "Global Presence": [
        { id: "1-8", text: "Our Offices", link: "/getcontact" },
      ],
    },
  },
  {
    id: 2,
    text: "SERVICES",
    link: "/services",
    dropdown: {
      "Web Development": [
        {
          id: "2-1",
          text: "Frontend Development",
          link: "/service/frontend-development",
        },
        {
          id: "2-2",
          text: "Backend Development",
          link: "/service/backend-development",
        },
        {
          id: "2-3",
          text: "Full-Stack Development",
          link: "/service/custom-web-development",
        },
        {
          id: "2-4",
          text: "E-Commerce Solutions",
          link: "/service/e-commerce-development",
        },
      ],
      "Digital Marketing": [
        { id: "2-5", text: "SEO", link: "/service/website-optimization" },
        {
          id: "2-6",
          text: "Content Marketing",
          link: "/service/content-management-systems",
        },
      ],
      "Other Services": [
        { id: "2-9", text: "UI/UX Design", link: "/service/ui-ux-design" },

        {
          id: "2-11",
          text: "Analytics & Reporting",
          link: "/service/website-maintenance",
        },
      ],
    },
  },
  {
    id: 3,
    text: "INDUSTRIES",
    link: "/industries",
    dropdown: {
      Company: [
        {
          id: "3-1",
          text: "Company Fasted Growth",
          link: "/industries",
        },
        { id: "3-4", text: "Three Eyed Limited", link: "/industries" },
      ],
      Team: [{ id: "3-2", text: "Three-Eyed", link: "/industries" }],
      "Corporate Citizenship": [
        {
          id: "3-3",
          text: "Three-Eyed Foundation",
          link: "/industries",
        },
        { id: "3-5", text: "Bansal Group", link: "/industries" },
      ],
    },
  },
  {
    id: 4,
    text: "PORTFOLIO",
    link: "/portfolio",
    dropdown: {
      "Marketing Campaigns": [
        {
          id: "4-1",
          text: "Instagram Campaign Strategy",
          link: "/portfolio",
        },
        {
          id: "4-2",
          text: "Facebook Ad Funnel Success",
          link: "/portfolio",
        },
        {
          id: "4-3",
          text: "X (Twitter) Trend Engagement",
          link: "/portfolio",
        },
        {
          id: "4-4",
          text: "LinkedIn B2B Lead Outreach",
          link: "/portfolio",
        },
      ],
      "Platform Growth Projects": [
        {
          id: "4-5",
          text: "Google My Business Optimization",
          link: "/portfolio",
        },
        {
          id: "4-6",
          text: "YouTube Organic Promotion",
          link: "/portfolio",
        },
      ],
      "Creative Content & SEO": [
        {
          id: "4-7",
          text: "Social Media SEO Optimization",
          link: "/portfolio",
        },
        {
          id: "4-8",
          text: "Content-Driven Marketing Funnels",
          link: "/portfolio",
        },
      ],
    },
  },
  {
    id: 5,
    text: "CONTACT",
    link: "/getcontact",
    dropdown: {
      "With Us": [
        {
          id: "5-3",
          text: "Join Us",
          link: "/jointeam",
        },
        {
          id: "5-4",
          text: "Get Touch",
          link: "/getcontact",
        },
      ],
      About: [
        { id: "5-1", text: "Support", link: "/getcontact" },
        { id: "5-2", text: "Sales", link: "/getcontact" },
      ],
    },
  },
];

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    setOpenDropdown(null); // Close dropdown when toggling mobile menu
  };

  // Desktop dropdown mouse enter
  const handleMouseEnter = (id) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(id);
  };

  // Keyboard accessibility for desktop dropdown toggle
  const handleKeyDown = (event, id) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpenDropdown((prev) => (prev === id ? null : id));
    }
  };

  // Close mobile menu when clicking a link
  const handleMobileLinkClick = () => {
    setIsNavbarOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-gradient-to-t from-[#0a0a0a] to-[#1c1c1c] fixed z-40 shadow top-0 w-full md:h-24 h-20 mb-0  text-white ">
      <div className="lg:max-w-screen-2xl max-w-screen-xl mx-auto py-4 flex justify-between items-center w-full sm:px-8 md:px-8 px-3">
        {/* Logo */}
        <Link to="/" onClick={handleMobileLinkClick}>
          <img
            src={threeeyedlogo}
            className="lg:h-18 h-12 w-auto max-w-full object-contain"
            alt="Three Eyed Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex max-w-9xl mx-auto space-x-8 relative w-full justify-end">
          {NavbarItems.map((item) => (
            <div
              key={item.id}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(item.id)}
            >
              <Link
                to={item.link}
                className="px-4 py-2 text-white flex items-center justify-between hover:text-[#EA7900] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-[#EA7900] md:p-0 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-left"
                aria-haspopup={!!item.dropdown}
                aria-expanded={openDropdown === item.id}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
                tabIndex={0}
              >
                {item.text}
                {/* Optional down arrow icon */}
              </Link>

              {/* Full-screen dropdown */}
              {item.dropdown && openDropdown === item.id && (
                <div
                  className="fixed left-0 top-24 pb-12 w-full bg-white/90 text-black z-40 shadow-lg"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={() => {
                    setTimeout(() => {
                      setOpenDropdown((prev) =>
                        prev === item.id ? null : prev
                      );
                    }, 0);
                  }}
                >
                  <div className="max-w-8xl mx-auto px-10 py-8 grid grid-cols-4 gap-8">
                    {Object.entries(item.dropdown).map(
                      ([category, links], idx) => (
                        <div key={category || idx}>
                          {category && (
                            <h2 className="font-semibold mb-3 text-[#EA7900]">
                              {category}
                            </h2>
                          )}
                          <ul className="space-y-2 text-sm">
                            {links.map((linkItem) => (
                              <li key={linkItem.id}>
                                <Link
                                  to={linkItem.link}
                                  className="hover:text-[#EA7900]"
                                  onClick={handleMobileLinkClick}
                                >
                                  {linkItem.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleNavbar}
          className="block md:hidden text-white dark:text-white"
          aria-label={isNavbarOpen ? "Close menu" : "Open menu"}
        >
          {isNavbarOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </button>

        {/* Mobile Menu */}
        <ul
          className={`fixed md:hidden top-0 left-0 h-full w-4/5 max-w-xs bg-gradient-to-t from-[#0a0a0a] to-[#1c1c1c] z-50 transition-transform duration-500 ${
            isNavbarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Link to="/" onClick={handleMobileLinkClick}>
            <motion.h1
              className="text-2xl uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#EA7900] via-[#ffae42] to-[#EA7900] m-4 cursor-pointer tracking-wide"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              Three Eyed
            </motion.h1>
          </Link>

          {NavbarItems.map((item) => (
            <div key={item.id}>
              <Link to={item.link}>
                <li
                  onClick={() =>
                    setOpenDropdown((prev) =>
                      prev === item.id ? null : item.id
                    )
                  }
                  className="p-4 border-b  rounded-xl hover:bg-[#EA7900] hover:text-black  duration-300 cursor-pointer border-gray-600 flex justify-between items-center"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setOpenDropdown((prev) =>
                        prev === item.id ? null : item.id
                      );
                    }
                  }}
                >
                  {item.text}
                  {item.dropdown && (
                    <svg
                      className={`h-4 w-4 transition-transform duration-300 ${
                        openDropdown === item.id ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </li>
              </Link>

              {/* Mobile Dropdown */}
              {item.dropdown && openDropdown === item.id && (
                <ul className="pl-6 bg-gradient-to-t from-[#0a0a0a] to-[#1c1c1c]">
                  {item.dropdown && openDropdown === item.id && (
                    <ul className="pl-6 bg-gradient-to-t from-[#0a0a0a] to-[#1c1c1c]">
                      {Object.values(item.dropdown)
                        .flat()
                        .map((sub) => (
                          <li
                            key={sub.id}
                            className="py-2 text-sm text-white hover:text-[#EA7900]"
                          >
                            <Link
                              to={sub.link}
                              onClick={() => {
                                handleMobileLinkClick();
                                setOpenDropdown(null);
                              }}
                            >
                              {sub.text}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
