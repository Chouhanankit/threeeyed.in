import React from "react";
import { useParams } from "react-router-dom";
import capabilities from "../js/capabilitiesData";
import GetCapaComp from "../components/GetCapaComp";

const CapabilityPage = () => {
  const { slug } = useParams();
  const capability = capabilities.find((c) => c.slug === slug);

  if (!capability) {
    return (
      <p className="text-center mt-40 text-red-500">Capability not found</p>
    );
  }

  return <GetCapaComp section={capability} />;
};

export default CapabilityPage;
