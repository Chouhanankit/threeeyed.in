import React from "react";
import capabilities from "../js/capabilitiesData";
import CapabilityCard from "../components/CapabilityCard";

const CapabilitiesList = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {capabilities.map((cap) => (
        <CapabilityCard
          key={cap.slug}
          title={cap.title}
          slug={cap.slug}
          image={cap.image || "https://via.placeholder.com/150"}
        />
      ))}
    </div>
  );
};

export default CapabilitiesList;
