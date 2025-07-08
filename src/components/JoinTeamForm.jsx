import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export default function JoinTeamForm() {
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
    resumeUrl: "",
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
      resumeUrl: "",
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
    <div className="min-h-screen flex items-center justify-center text-black p-2 py-4">
      <div className="bg-white shadow-md w-full rounded-xl max-w-3xl lg:p-12 p-8 pt-8">
        <div className="text-center mb-6">
          <p className="text-xs text-[#EA7900]">
            It will take about 3-5 working days for us to reply to you.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 w-full border border-[#EA7900] rounded-0 p-2"
                placeholder="First Name"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 w-full border border-[#EA7900] rounded-0 p-2"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full border border-[#EA7900] rounded-0 p-2"
                placeholder="example@example.com"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 w-full border border-[#EA7900] rounded-0 p-2"
                placeholder="(000) 000-0000"
                required
              />
            </div>
          </div>

          {/* Position */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              What position are you applying for?
            </label>
            <select
              className="w-full border border-gray-300 rounded-0 p-2"
              value={selectedPosition}
              onChange={(e) => setSelectedPosition(e.target.value)}
              required
            >
              <option value="">Select a Position</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Full-Stack Developer">Full-Stack Developer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Add a Skill
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                placeholder="e.g. React, Node.js"
                className="w-full border border-gray-300 rounded-0 p-2"
              />
              <button
                type="button"
                onClick={handleAddSkill}
                className="bg-[#EA7900] text-white px-4 py-2 rounded-0 hover:bg-green-700"
              >
                Add
              </button>
            </div>
          </div>

          {skillsList.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Skills Added:
              </label>
              <div className="flex flex-wrap gap-2">
                {skillsList.map((sk, index) => (
                  <span
                    key={index}
                    className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                  >
                    {sk}
                    <button
                      onClick={() => removeSkill(index)}
                      className="ml-2 text-red-600 hover:text-red-800"
                      title="Remove"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Employment Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              What is your current employment status?
            </label>
            <div className="flex flex-wrap gap-4">
              {["Employed", "Self-Employed", "Unemployed", "Student"].map(
                (status) => (
                  <label key={status} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="employmentStatus"
                      value={status}
                      checked={employmentStatus === status}
                      onChange={() => setEmploymentStatus(status)}
                    />
                    <span>{status}</span>
                  </label>
                )
              )}
            </div>
          </div>

          {/* Resume  Only */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Resume (PDF only)
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
              className="w-full flex flex-col items-center justify-center border-2 border-dashed border-[#EA7900] rounded-md p-6 text-center cursor-pointer hover:bg-orange-50 transition"
            >
              <p className="text-sm text-gray-600">
                Drag & Drop your resume here
              </p>
              <p className="text-xs text-gray-500">
                or click to browse (PDF only)
              </p>
              {formData.resume && (
                <p className="mt-2 text-green-700 font-medium">
                  Selected: {formData.resume.name}
                </p>
              )}
            </div>

            <input
              type="file"
              id="resumeInput"
              accept="application/pdf"
              name="resume"
              className="hidden"
              onChange={(e) =>
                setFormData({ ...formData, resume: e.target.files[0] })
              }
              required
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`font-semibold py-2 px-6 rounded-0 w-full transition ${
                loading
                  ? "bg-orange-300 cursor-not-allowed"
                  : "bg-[#EA7900] hover:bg-orange-600 text-white"
              }`}
            >
              {loading ? (
                <span className="flex justify-center items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                    ></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit Application"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
