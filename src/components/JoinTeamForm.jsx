import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export default function JoinTeamForm() {
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [skill, setSkill] = useState("");
  const [skillsList, setSkillsList] = useState([]);
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

  const URL = "https://threeeyed-backend.onrender.com/api/user";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("resume", formData.resume); // 👈 PDF file
    formDataToSend.append("position", selectedPosition);
    formDataToSend.append("skills", skillsList.join(", "));
    formDataToSend.append("employment_status", employmentStatus);

    try {
      const res = await fetch(`${URL}/join/team`, {
        method: "POST",
        body: formDataToSend,
      });

      if (res.ok) {
        toast.success("Application submitted successfully!");
        resetForm();
      } else {
        toast.error("Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-black p-4">
      <div className="bg-white shadow-md w-full max-w-3xl lg:p-12 p-8 pt-8">
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
                className="flex-1 border border-gray-300 rounded-0 p-2"
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
              className="bg-[#EA7900] hover:bg-blue-400 text-white font-semibold py-2 px-6 rounded-0"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
