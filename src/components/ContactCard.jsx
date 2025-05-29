import React, { useState } from "react";
import { useRef } from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import "aos/dist/aos.css";
import { toast } from "react-toastify";

const ContactCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://threeeyedbackend.onrender.com/api/user/register/mail`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await res.json();

      if (res.status === 200) {
        toast.success(result.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(result.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Network or server error");
      console.error("Submit Error:", error);
    }
  };

  const contactDetails = [
    {
      icon: <FaPhoneAlt className="text-[#EA7900] w-5 h-5" />,
      title: "Phone",
      value: (
        <a href="tel:+919617874140" className="text-[#EA7900] hover:underline">
          +91 9617874140
        </a>
      ),
    },
    {
      icon: <FaEnvelope className="text-[#EA7900] w-5 h-5" />,
      title: "Email",
      value: (
        <a
          href="mailto:threeeyed.om@gmail.com"
          className="text-[#EA7900] hover:underline"
        >
          threeeyed.om@gmail.com
        </a>
      ),
    },
    {
      icon: <FaMapMarkerAlt className="text-[#EA7900] w-5 h-5" />,
      title: "Address",
      value: (
        <>
          Om Gurudev Plaza
          <br />
          Scheme No 54
          <br />
          Indore, Madhya Pradesh 452010
        </>
      ),
    },
    {
      icon: <FaClock className="text-[#EA7900] w-5 h-5" />,
      title: "Working Hours",
      value: "Monday - Friday: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-200 py-12 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div
          className="bg-[#FFF6EF] p-6 sm:p-10 rounded-2xl shadow-lg"
          data-aos="fade-right"
        >
          <h2 className="text-3xl font-bold text-[#EA7900] mb-6">
            Contact Info
          </h2>
          <div className="space-y-6 text-gray-800">
            {contactDetails.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                {item.icon}
                <div>
                  <h3 className="text-lg font-semibold text-[#EA7900] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-base lg:pb-[10.5px]">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div
          className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg border border-[#f2f2f2] max-w-2xl mx-auto"
          data-aos="fade-left"
        >
          <h2 className="text-3xl font-bold text-[#EA7900] mb-2">
            Let’s Connect
          </h2>
          <p className="text-gray-600 mb-6">
            Interested in a website, SEO, branding, or digital marketing?
            <br className="hidden sm:block" />
            Fill out the form below and our team will be in touch shortly.
          </p>

          <form ref={form} onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring-[#EA7900] focus:border-[#EA7900] outline-none"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring-[#EA7900] focus:border-[#EA7900] outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring-[#EA7900] focus:border-[#EA7900] outline-none"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject (e.g. Website / SEO / Ads)"
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring-[#EA7900] focus:border-[#EA7900] outline-none"
              />
            </div>

            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your project or what you need help with..."
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring-[#EA7900] focus:border-[#EA7900] outline-none"
            />

            <button
              type="submit"
              className="w-full bg-[#EA7900] text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
