import React from "react";
import ContactCard from "../components/ContactCard";
import { Helmet } from "react-helmet";

const GetContact = () => {
  return (
    <div className="min-h-screen pt-20 sm:px-6 lg:px-0">
      <Helmet>
          <title>Contact Us | Three-Eyed Limited</title>
          <meta
            name="description"
            content="Learn about Three-Eyed Limited, a leading IT company in Indore, offering web development, digital marketing, branding, and full-stack solutions."
          />
          <meta
            name="keywords"
            content="Three-Eyed, Contact Us , IT Company Indore, Web Development, Digital Marketing, SEO, Team"
          />
          <meta name="author" content="Three-Eyed Limited" />

          {/* Open Graph Meta */}
          <meta property="og:title" content="Contact Us  | Three-Eyed Limited" />
          <meta
            property="og:description"
            content="Explore the journey, mission, and values of Three-Eyed Limited — a full-stack web and marketing company based in India."
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dg2seao8x/image/upload/v1752144375/og-banner_ftgeyc.webp"
          />
          <meta
            property="og:url"
            content="https://www.threeeyedlimited.com/getcontact"
          />
          <meta property="og:type" content="website" />
        </Helmet>
      <ContactCard />
    </div>
  );
};

export default GetContact;
