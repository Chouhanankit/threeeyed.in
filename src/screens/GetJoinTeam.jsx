// import React from "react";
// import JoinTeamForm from "../components/JoinTeamForm";

// const GetJoinTeam = () => {
//   return (
//     <>
//       <div className="pt-24 bg-gray-300 min-h-screen">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
//             {/* Text Content */}
//             <div
//               data-aos="fade-right"
//               className="text-center lg:pt-8 pt-4 lg:text-left "
//             >
//               <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-black">
//                 Join Our Tech Team
//               </h1>
//               <p className="text-gray-700 text-base sm:text-lg md:text-xl py-4 lg:w-[35rem] p-2 mx-auto lg:mx-0">
//                 Passionate about coding, design, or problem-solving? Be part of
//                 our mission to build smarter digital experiences.
//               </p>
//             </div>

//             {/* Form */}
//             <div data-aos="fade-left" className="w-full lg:w-1/2">
//               <JoinTeamForm />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default GetJoinTeam;








import React, { useState } from "react";
import { toast } from "react-toastify";

const GetJoinTeam = () => {
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [skill, setSkill] = useState("");
  const [skillsList, setSkillsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: null,
  });

  const handleAddSkill = () => {
    if (skill.trim()) {
      setSkillsList([...skillsList, skill.trim()]);
      setSkill("");
    }
  };

  const removeSkill = (index) => {
    setSkillsList(skillsList.filter((_, i) => i !== index));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      resume: null,
    });
    setSelectedPosition("");
    setEmploymentStatus("");
    setSkillsList([]);
    setSkill("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("resume", formData.resume);
    formDataToSend.append("position", selectedPosition);
    formDataToSend.append("skills", skillsList.join(", "));
    formDataToSend.append("employment_status", employmentStatus);

    const request = fetch(
      `https://threeeyedbackend-1.onrender.com/api/user/join/team`,
      {
        method: "POST",
        body: formDataToSend,
      }
    ).then(async (res) => {
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Submission failed");
      }
      return res.json();
    });

    toast
      .promise(request, {
        pending: "Submitting your application...",
        success: {
          render({ data }) {
            resetForm();
            return data.message || "Application submitted successfully!";
          },
        },
        error: {
          render({ data }) {
            return data.message || "Submission failed!";
          },
        },
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 pt-16 sm:pt-20">
      {/* Header Section */}
      <div className="relative bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#EA7900] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#EA7900] rounded-full animate-pulse"></span>
              We're Hiring Talented Developers & Designers
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#001F3D] mb-4 sm:mb-6">
              Join Our{" "}
              <span className="bg-gradient-to-r from-[#EA7900] to-orange-500 bg-clip-text text-transparent">
                Tech Team
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Passionate about coding, design, or problem-solving? Be part of our mission 
              to build smarter digital experiences that make a real impact.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Side - Benefits & Info */}
          <div className="lg:col-span-1 space-y-8">
          
            {/* Benefits */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-[#001F3D] mb-4">Why Join Us?</h3>
              <div className="space-y-4">
                {[
                  "Competitive salary & equity",
                  "Flexible remote work options",
                  "Latest tech stack & tools",
                  "Continuous learning budget",
                  "Health & wellness benefits",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[#EA7900] text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-[#001F3D] mb-4">Hiring Process</h3>
              <div className="space-y-3">
                {[
                  { step: "1", title: "Application Review", desc: "3-5 working days" },
                  { step: "2", title: "Technical Interview", desc: "1-2 hours" },
                  { step: "3", title: "Team Fit Assessment", desc: "30-45 mins" },
                  { step: "4", title: "Offer & Onboarding", desc: "1 week" }
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#001F3D] text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#001F3D]">{item.title}</div>
                      <div className="text-xs text-gray-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#001F3D]">Application Form</h2>
                <p className="text-gray-600 mt-2">Fill out your details and we'll get back to you soon</p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#001F3D] mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full border text-black border-gray-300 rounded-xl px-4 py-3 focus:border-[#EA7900] focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#001F3D] mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full border text-black border-gray-300 rounded-xl px-4 py-3 focus:border-[#EA7900] focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#001F3D] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 text-black rounded-xl px-4 py-3 focus:border-[#EA7900] focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                      placeholder="username@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#001F3D] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border text-black border-gray-300 rounded-xl px-4 py-3 focus:border-[#EA7900] focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                      placeholder="+91 6260718771"
                      required
                    />
                  </div>
                </div>

                {/* Position */}
                <div>
                  <label className="block text-sm font-medium text-[#001F3D] mb-2">
                    Desired Position *
                  </label>
                  <select
                    value={selectedPosition}
                    onChange={(e) => setSelectedPosition(e.target.value)}
                    className="w-full border border-gray-300 text-black rounded-xl px-4 py-3 focus:border-[#EA7900] focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                    required
                  >
                    <option value="">Select a position</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Full-Stack Developer">Full-Stack Developer</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                    <option value="Content Creator">Content Creator</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Skills */}
                <div>
                  <label className="block text-sm font-medium text-[#001F3D] mb-2">
                    Technical Skills
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) => setSkill(e.target.value)}
                      placeholder="e.g., React, Node.js, Python, Figma"
                      className="flex-1 border border-gray-300 text-black rounded-xl px-4 py-3 focus:border-[#EA7900] focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())}
                    />
                    <button
                      type="button"
                      onClick={handleAddSkill}
                      className="bg-[#001F3D] text-white px-6 py-3 rounded-xl hover:bg-[#001a33] transition-all duration-200 font-medium whitespace-nowrap"
                    >
                      Add Skill
                    </button>
                  </div>
                  
                  {skillsList.length > 0 && (
                    <div className="mt-3">
                      <div className="flex flex-wrap gap-2">
                        {skillsList.map((sk, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center bg-orange-100 text-[#EA7900] px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {sk}
                            <button
                              onClick={() => removeSkill(index)}
                              className="ml-2 text-[#EA7900] hover:text-orange-700 transition-colors duration-200"
                              type="button"
                            >
                              &times;
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Employment Status */}
                <div>
                  <label className="block text-sm font-medium text-[#001F3D] mb-3">
                    Current Employment Status *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["Employed", "Self-Employed", "Unemployed", "Student"].map(
                      (status) => (
                        <label key={status} className="flex items-center space-x-2 p-3 border  border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200 cursor-pointer has-[:checked]:bg-orange-50 has-[:checked]:border-[#EA7900]">
                          <input
                            type="radio"
                            name="employmentStatus"
                            value={status}
                            checked={employmentStatus === status}
                            onChange={() => setEmploymentStatus(status)}
                            className="text-[#EA7900] focus:ring-[#EA7900]"
                          />
                          <span className="text-sm font-medium text-[#001F3D]">{status}</span>
                        </label>
                      )
                    )}
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-sm font-medium text-[#001F3D] mb-3">
                    Upload Resume (PDF, max 5MB) *
                  </label>
                  <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();
                      const file = e.dataTransfer.files[0];
                      if (file && file.type === "application/pdf") {
                        setFormData({ ...formData, resume: file });
                      } else {
                        toast.error("Please upload a valid PDF file.");
                      }
                    }}
                    onClick={() => document.getElementById("resumeInput").click()}
                    className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center cursor-pointer hover:border-[#EA7900] hover:bg-orange-50 transition-all duration-200"
                  >
                    <div className="text-3xl text-gray-400 mb-2">📄</div>
                    <p className="text-gray-600 font-medium">
                      {formData.resume ? "Change resume file" : "Drag & drop your resume here"}
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      or click to browse • PDF only
                    </p>
                    {formData.resume && (
                      <p className="text-[#EA7900] font-medium mt-2">
                        ✓ {formData.resume.name}
                      </p>
                    )}
                  </div>
                  <input
                    type="file"
                    id="resumeInput"
                    accept="application/pdf"
                    className="hidden"
                    onChange={(e) =>
                      setFormData({ ...formData, resume: e.target.files[0] })
                    }
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#EA7900] to-orange-500 hover:from-orange-600 hover:to-orange-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing Application...
                    </span>
                  ) : (
                    "Submit Application"
                  )}
                </button>

                <p className="text-center text-gray-500 text-sm">
                  We typically respond within 3-5 working days
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetJoinTeam;