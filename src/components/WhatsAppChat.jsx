import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppChat() {
  const phoneNumber = "916260718771";
  const message = encodeURIComponent(
    "Hello Three-Eyed Limited, I have an enquiry and would like to know more about your services."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white lg:p-4 md:p-4 p-2 rounded-full shadow-lg transition-all duration-300 ease-in-out"
      aria-label="Chat with Three-Eyed Limited on WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}
