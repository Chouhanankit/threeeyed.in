import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PortfolioCTA = () => {
  return (
    <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] py-16 px-4 flex justify-center">
      <div className="relative w-full max-w-7xl rounded-3xl bg-gradient-to-br from-[#0a0a0a] via-[#112233] to-[#1c2b3a] text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12 shadow-xl overflow-hidden">
        {/* Left Image or SVG Placeholder */}
        <div className="hidden md:block w-1/4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6062/6062649.png"
            alt="Visual"
            className="w-full max-w-[120px] object-contain"
          />
        </div>

        {/* Content */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
            Want to See More?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mb-6">
            Explore our portfolio of websites, applications, and digital
            strategies built to scale brands and solve real business problems.
          </p>

          <Link
            to="/portfolio"
            className="inline-flex items-center bg-[#EA7900]/80 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-[#e07000] transition"
          >
            View Our Projects <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        {/* Right Image or SVG Placeholder */}
        <div className="hidden md:block w-1/4 text-right">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6062/6062650.png"
            alt="Visual"
            className="w-full max-w-[120px] object-contain ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioCTA;
