import React from "react";
import { FaCircle } from "react-icons/fa";
import footerlogo from "../assets/logo3eyed.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-black">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img
                  src={footerlogo}
                  className="sm:h-18 h-12 me-3"
                  alt="Three-Eyed Logo"
                />
                <span className="sr-only self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Three-Eyed
                </span>
              </a>
            </div>

            <div className="w-auto grid grid-cols-2 gap-8 sm:gap-34 sm:grid-cols-3">
              <div>
                <ul className="mb-6 text-sm text-gray-900 dark:text-white">
                  <li className="mb-2">
                    <a
                      href="/our-brand"
                      className="hover:underline hover:text-gray-400"
                    >
                      Our Brand
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="/sustainability"
                      className="hover:underline hover:text-gray-400"
                    >
                      Sustainability
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="/corporate-citizenship"
                      className="hover:underline hover:text-gray-400"
                    >
                      Corporate Citizenship
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="/investor-relations"
                      className="hover:underline hover:text-gray-400"
                    >
                      Investor Relations
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="/contact"
                      className="hover:underline hover:text-gray-400"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="mb-6 text-sm text-gray-900 dark:text-white">
                  <li className="mb-2">
                    <a
                      href="/news"
                      className="hover:underline hover:text-gray-400"
                    >
                      News
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="/events"
                      className="hover:underline hover:text-gray-400"
                    >
                      Events
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="/careers"
                      className="hover:underline hover:text-gray-400"
                    >
                      Careers
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="/alumni"
                      className="hover:underline hover:text-gray-400"
                    >
                      Alumni
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="/sitemap"
                      className="hover:underline hover:text-gray-400"
                    >
                      Sitemap
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="/cookie-preferences"
                      className="hover:underline hover:text-gray-400"
                    >
                      Cookie Preferences
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex sm:justify-end sm:mt-0 space-x-5">
                  <a
                    href="https://www.facebook.com/ThreeEyedPvtLtd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-600"
                    aria-label="Facebook"
                  >
                    {/* Facebook SVG */}
                    <svg
                      className="w-6 h-6 transition-colors duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                    >
                      <g fill="none" stroke="none">
                        {" "}
                        <g transform="scale(5.12,5.12)">
                          <path
                            d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"
                            fill="currentColor"
                          />
                        </g>
                      </g>
                    </svg>
                    <span className="sr-only">Twitter page</span>
                  </a>
                  <a
                    href="https://www.instagram.com/ThreeEyedPvtLtd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-600"
                    aria-label="Instagram"
                  >
                    {/* Instagram SVG */}
                    <svg
                      className="w-6 h-6 text-white hover:text-[#ff1e72] transition-colors duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      fill="currentColor"
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z" />{" "}
                      </g>
                    </svg>
                    <span className="sr-only">Instagram page</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/three-eyed-pvt-ltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-700"
                    aria-label="LinkedIn"
                  >
                    {/* LinkedIn SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 transition-colors duration-300"
                      viewBox="0 0 50 50"
                      fill="currentColor"
                    >
                      <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
                    </svg>

                    <span className="sr-only">Facebook account</span>
                  </a>
                  <a
                    href="https://twitter.com/ThreeEyedPvtLtd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400"
                    aria-label="Twitter"
                  >
                    {/* Twitter SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 transition-colors duration-300"
                      viewBox="0 0 50 50"
                      fill="currentColor"
                    >
                      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                    </svg>

                    <span className="sr-only">Facebook page</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />

          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="sm:text-[0.8rem] text-[10px] text-gray-500 dark:text-gray-400 sm:text-center">
              © 2025{" "}
              <a href="/" className="hover:underline">
                Three-Eyed Pvt. Ltd.
              </a>
              . All rights reserved. Registered in Indore, India.
            </span>

            <ul className="flex items-center text-gray-500 dark:text-gray-400 text-[10px] sm:justify-around">
              <li>
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="px-2">•</li>
              <li>
                <a href="/terms-conditions" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
{
  /* <div>
  <div className="flex sm:justify-end sm:mt-0">
    <a
      href="#"
      className="text-white hover:text-blue-600 dark:hover:text-blue-600"
    >
      <svg
        className="w-6 h-6 transition-colors duration-300"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
      >
        <g fill="none" stroke="none">
          {" "}
          <g transform="scale(5.12,5.12)">
            <path
              d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"
              fill="currentColor"
            />
          </g>
        </g>
      </svg>
      <span className="sr-only">Facebook page</span>
    </a>
    <a
      href="#"
      className="text-white hover:text-gray-900 dark:hover:text-white ms-5"
    >
      <svg
        className="w-6 h-6 text-white hover:text-[#ff1e72] transition-colors duration-300"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        fill="currentColor"
      >
        <g transform="scale(5.12,5.12)">
          <path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z" />{" "}
        </g>
      </svg>
      <span className="sr-only">Instagram page</span>
    </a>
    <a
      href="#"
      className="text-white hover:text-blue-600 dark:hover:text-blue-600 ms-5"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 transition-colors duration-300"
        viewBox="0 0 50 50"
        fill="currentColor"
      >
        <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
      </svg>

      <span className="sr-only">Facebook account</span>
    </a>
    <a
      href="#"
      className="text-white hover:text-blue-600 dark:hover:text-blue-600 ms-5"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 transition-colors duration-300"
        viewBox="0 0 50 50"
        fill="currentColor"
      >
        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
      </svg>

      <span className="sr-only">Twitter page</span>
    </a>
  </div>
</div>; */
}
