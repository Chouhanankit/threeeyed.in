import React, { useState } from "react";
import threeeyedlogo from "../assets/logo3eyed.png";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [Navbar, setNavbar] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // for mobile dropdowns

  const handleNavbar = () => {
    setNavbar(!Navbar);
  };

  const NavbarItems = [
    {
      id: 1,
      text: "ABOUT",
      link: "/about",
      dropdown: [
        {
          id: "1-1",
          text: "Company",
          news: "Latest Update",
          investor: "Financial Report",
          corporate: "Tech Mahindra Foundation",
          link: "/about/company",
        },
        {
          id: "1-2",
          text: "Team",
          news: "Aaj Tak",
          corporate: "Educational Institutions",
          link: "/about/team",
        },
        {
          id: "1-3",
          text: "Company",
          corporate: "Social Responsibility",
          link: "/about/company",
        },
      ],
    },
    {
      id: 2,
      text: "CAPABILITIES",
      link: "/capabilities",
      dropdown: [
        {
          id: "2-1",
          text: "Development",
          link: "/capabilities/development",
        },
        { id: "2-2", text: "Design", link: "/capabilities/design" },
        {
          id: "2-3",
          text: "Cloud Services",
          link: "/capabilities/cloud-services",
        },
        {
          id: "2-4",
          text: "AI & Machine Learning",
          link: "/capabilities/ai-ml",
        },
        {
          id: "2-5",
          text: "Cybersecurity",
          link: "/capabilities/cybersecurity",
        },
        {
          id: "2-6",
          text: "DevOps & Automation",
          link: "/capabilities/devops",
        },
        { id: "2-7", text: "Quality Assurance", link: "/capabilities/qa" },
        {
          id: "2-8",
          text: "Enterprise Solutions",
          link: "/capabilities/enterprise-solutions",
        },
      ],
    },
    {
      id: 3,
      text: "INDUSTRIES",
      link: "/industries",
      dropdown: [
        {
          id: "3-2",
          text: "Company",
          news: "Company Fasted Growth",
          investor: "Ambani and tata group",
          corporate: "Three-Eyed Foundation",
          link: "/industries/company",
        },
        {
          id: "3-3",
          text: "Team",
          news: "ABP NEWAS",
          corporate: "Bansal Group",
          link: "/industries/team",
        },
        {
          id: "3-4",
          text: "Company",
          corporate: "Three Eyed Pvt.Ltd",
          link: "/industries/company",
        },
      ],
    },
    {
      id: 4,
      text: "INSIGHTS",
      link: "/insights",
      dropdown: [
        { id: "4-1", text: "Blog", link: "/insights/blog" },
        { id: "4-2", text: "News", link: "/insights/news" },
      ],
    },
    {
      id: 5,
      text: "CONTACT",
      link: "/contact",
      dropdown: [
        { id: "5-1", text: "Support", link: "/contact/support" },
        { id: "5-2", text: "Sales", link: "/contact/sales" },
      ],
    },
  ];

  return (
    <div className="bg-black fixed z-40 shadow top-0 w-full flex justify-between items-center md:h-24 h-18  max-w mx-auto sm:px-8 md:px-8 px-3 text-white">
      {/* Logo */}
      <Link to={"/"}>
        <img src={threeeyedlogo} className="md:h-18 sm:h-18 h-12" alt="" />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 relative w-full justify-end">
        {NavbarItems.map((item) => (
          <div
            key={item.id}
            className="relative group"
            onMouseEnter={() => setOpenDropdown(item.id)}
            onMouseLeave={() => {
              setTimeout(() => {
                setOpenDropdown((prev) => (prev === item.id ? null : prev));
              }, 2000); // 2 seconds delay
            }}
          >
            <Link
              to={item.link}
              className="px-4 py-2 text-white flex items-center justify-between hover:text-[#EA7900] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-[#EA7900] md:p-0 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-left"
            >
              {item.text}
            </Link>

            {/* Full-screen dropdown on hover */}
            {item.dropdown && openDropdown === item.id && (
              <div className="fixed left-0 top-24 w-full bg-white text-black z-40 transition-all duration-300 shadow-lg">
                <div className="max-w-8xl mx-auto px-10 py-8">
                  {/* Left Content: Menu Columns */}
                  <div className="col-span-3 grid grid-cols-3 gap-8">
                    {/* Title */}
                    <div>
                      <h3 className="text-2xl font-bold mb-6">About Us</h3>
                    </div>

                    {/* Column 1 */}
                    <div>
                      <h4 className="font-semibold mb-3">Corporate Overview</h4>
                      <ul className="space-y-2 text-sm">
                        {item.dropdown.map((sub) => (
                          <li key={sub.id}>
                            <Link
                              to={sub.link}
                              className="hover:text-[#EA7900] flex flex-col justify-around "
                            >
                              {/* {sub.text} */}
                              <h6>{sub.text}</h6>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                      <h4 className="font-semibold mb-3">News</h4>
                      <ul className="space-y-2 text-sm mb-6">
                        {item.dropdown.map((sub) => (
                          <li key={sub.id}>
                            <Link
                              to={sub.link}
                              className="hover:text-[#EA7900] flex flex-col justify-around "
                            >
                              {/* {sub.text} */}
                              <h6>{sub.news}</h6>
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <h4 className="font-semibold mb-3">Investor Relations</h4>
                      <ul className="space-y-2 text-sm mb-6">
                        {item.dropdown.map((sub) => (
                          <li key={sub.id}>
                            <Link
                              to={sub.link}
                              className="hover:text-[#EA7900] flex flex-col justify-around "
                            >
                              {/* {sub.text} */}
                              <h6>{sub.investor}</h6>
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <h4 className="font-semibold mb-3">
                        Corporate Citizenship
                      </h4>
                      <ul className="space-y-2 text-sm">
                        {item.dropdown.map((sub) => (
                          <li key={sub.id}>
                            <Link
                              to={sub.link}
                              className="hover:text-[#EA7900] flex flex-col justify-around "
                            >
                              {/* {sub.text} */}
                              <h6>{sub.corporate}</h6>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Cont vent: Image Cards */}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div onClick={handleNavbar} className="block md:hidden">
        {Navbar ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          Navbar
            ? "fixed md:hidden left-0 top-0 w-[70%] h-full border-r border-gray-900 bg-[#000300] z-50 ease-in-out duration-500"
            : "fixed top-0 left-[-100%] w-[70%] h-full ease-in-out duration-500"
        }
      >
        <Link to={"/"}>
          <h1 className="text-2xl font-bold text-[#EA7900] m-4">Three Eyed</h1>
        </Link>

        {NavbarItems.map((item) => (
          <div key={item.id}>
            <li
              onClick={() =>
                setOpenDropdown(openDropdown === item.id ? null : item.id)
              }
              className="p-4 border-b rounded-xl hover:bg-[#EA7900] hover:text-black duration-300 cursor-pointer border-gray-600"
            >
              {item.text}
            </li>

            {/* Mobile Dropdown */}
            {item.dropdown && openDropdown === item.id && (
              <ul className="pl-6 bg-black">
                {item.dropdown.map((sub) => (
                  <li
                    key={sub.id}
                    className="py-2 text-sm text-white hover:text-[#EA7900]"
                  >
                    <Link to={sub.link}>{sub.text}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

{
  /* <div className="footerflex justify-around items-start h-[70vh] pt-15 text-base-content">
<aside>
  <svg
    width="50"
    height="50"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    className="fill-current"
  >
    <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
  </svg>
  <p>
    ACME Industries Ltd.
    <br />
    Providing reliable tech since 1992
  </p>
</aside>
<nav>
  <h6 className="footer-title">Services</h6>
  <a className="link link-hover">Branding</a>
  <a className="link link-hover">Design</a>
  <a className="link link-hover">Marketing</a>
  <a className="link link-hover">Advertisement</a>
</nav>
<nav>
  <h6 className="footer-title">Company</h6>
  <a className="link link-hover">About us</a>
  <a className="link link-hover">Contact</a>
  <a className="link link-hover">Jobs</a>
  <a className="link link-hover">Press kit</a>
</nav>
<nav>
  <h6 className="footer-title">Legal</h6>
  <a className="link link-hover">Terms of use</a>
  <a className="link link-hover">Privacy policy</a>
  <a className="link link-hover">Cookie policy</a>
</nav>
</div> */
}

// {item.dropdown && openDropdown === item.id && (
//   <div className="fixed left-0 top-24 w-full bg-amber-200 bg-opacity-95 text-white z-40 transition-all duration-300">
//     <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//       {/* Dropdown Links */}
//       <div className="col-span-2">
//         <h3 className="text-2xl font-bold text-black mb-4">Explore More</h3>
//         <ul className="space-y-3">
// {item.dropdown.map((sub) => (
//   <li key={sub.id}>
//     <Link
//       to={sub.link}
//       className="text-lg hover:text-[#EA7900] transition duration-300 text-black"
//     >
//       {sub.text}
//     </Link>
//   </li>
// ))}
//         </ul>
//       </div>

//       {/* Info Section */}
//       <div className="col-span-1 flex flex-col justify-between bg-white p-6 rounded-xl shadow-lg text-black">
//         <div>
//           <h4 className="text-xl font-semibold mb-2">Why Choose Us?</h4>
//           <p className="text-sm text-gray-700 mb-4">
//             Discover our innovative solutions tailored to your business needs. Our team delivers with excellence.
//           </p>
//         </div>
//         <Link
//           to="/contact"
//           className="bg-[#EA7900] text-white px-4 py-2 rounded hover:bg-white hover:text-[#EA7900] border border-[#EA7900] transition duration-300 text-center mt-4"
//         >
//           Get in Touch
//         </Link>
//       </div>

//       {/* Optional Visual or Icon Block */}
//       <div className="hidden lg:flex items-center justify-center bg-black rounded-xl p-4">
//         <span className="text-4xl text-[#EA7900] font-bold">🔥</span>
//       </div>
//     </div>
//   </div>
// )}

// copy
// {item.dropdown && openDropdown === item.id && (
//   <div className="fixed left-0 top-24 w-full bg-white text-black z-40 transition-all duration-300 shadow-lg">
//     <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-4 gap-8">

//       {/* Left Content: Menu Columns */}
//       <div className="col-span-3 grid grid-cols-3 gap-8">
//         {/* Title */}
//         <div>
//           <h3 className="text-2xl font-bold mb-6">About Us</h3>
//         </div>

//         {/* Column 1 */}
//         <div>
//           <h4 className="font-semibold mb-3">Corporate Overview</h4>
//           <ul className="space-y-2 text-sm">
//             <li><Link to="/leadership" className="hover:text-[#EA7900]">Leadership</Link></li>
//             <li><Link to="/our-brand" className="hover:text-[#EA7900]">Our Brand</Link></li>
//             <li><Link to="/sustainability" className="hover:text-[#EA7900]">Sustainability</Link></li>
//             <li><Link to="/recognition" className="hover:text-[#EA7900]">Recognition</Link></li>
//             <li><Link to="/customer-speak" className="hover:text-[#EA7900]">Customer Speak</Link></li>
//             <li><Link to="/partners" className="hover:text-[#EA7900]">Partners Ecosystem</Link></li>
//             <li><Link to="/portfolio" className="hover:text-[#EA7900]">Portfolio Companies</Link></li>
//           </ul>
//         </div>

//         {/* Column 2 */}
//         <div>
//           <h4 className="font-semibold mb-3">News</h4>
//           <ul className="space-y-2 text-sm mb-6">
//             <li><Link to="/news" className="hover:text-[#EA7900]">Latest Updates</Link></li>
//           </ul>

//           <h4 className="font-semibold mb-3">Investor Relations</h4>
//           <ul className="space-y-2 text-sm mb-6">
//             <li><Link to="/investors" className="hover:text-[#EA7900]">Financial Reports</Link></li>
//           </ul>

//           <h4 className="font-semibold mb-3">Corporate Citizenship</h4>
//           <ul className="space-y-2 text-sm">
//             <li><Link to="/foundation" className="hover:text-[#EA7900]">Tech Mahindra Foundation</Link></li>
//             <li><Link to="/education" className="hover:text-[#EA7900]">Educational Institutions</Link></li>
//             <li><Link to="/social-responsibility" className="hover:text-[#EA7900]">Social Responsibility</Link></li>
//           </ul>
//         </div>
//       </div>

//       {/* Right Content: Image Cards */}
//       <div className="col-span-1 flex flex-col space-y-4">
//         {/* Card 1 */}
//         <div
//           className="h-40 rounded-lg bg-cover bg-center p-4 text-white flex flex-col justify-end"
//           style={{ backgroundImage: "url('/your-image-1.jpg')" }}
//         >
//           <h4 className="text-lg font-semibold">Our Promise</h4>
//           <p className="text-sm mb-2">Scale at Speed™</p>
//           <Link to="/promise" className="text-xs underline">LEARN MORE</Link>
//         </div>

//         {/* Card 2 */}
//         <div
//           className="h-40 rounded-lg bg-cover bg-center p-4 text-white flex flex-col justify-end"
//           style={{ backgroundImage: "url('/your-image-2.jpg')" }}
//         >
//           <h4 className="text-lg font-semibold">The Indus Project</h4>
//           <p className="text-sm mb-2">Building India’s own large language model</p>
//           <Link to="/indus" className="text-xs underline">LEARN MORE</Link>
//         </div>
//       </div>
//     </div>
//   </div>
// )}

// image section
// <div className="col-span-1 flex flex-col space-y-4">
// {/* Card 1 */}
// <div
//   className="h-40 rounded-lg bg-cover bg-center p-4 text-white flex flex-col justify-end"
//   style={{ backgroundImage: "url('/public/4.png')" }}
// >
//   <h4 className="text-lg font-semibold">Our Promise</h4>
//   <p className="text-sm mb-2">Scale at Speed™</p>
//   <Link to="/promise" className="text-xs underline">
//     LEARN MORE
//   </Link>
// </div>

// {/* Card 2 */}
// <div
//   className="h-40 rounded-lg bg-cover bg-center p-4 text-white flex flex-col justify-end"
//   style={{ backgroundImage: "url('/public/2.png')" }}
// >
//   <h4 className="text-lg font-semibold">
//     The Indus Project
//   </h4>
//   <p className="text-sm mb-2">
//     Building India’s own large language model
//   </p>
//   <Link to="/indus" className="text-xs underline">
//     LEARN MORE
//   </Link>
// </div>
// </div>
