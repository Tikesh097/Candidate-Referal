import { useState } from "react";
import axios from "../axiosConfig";

const ReferralForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        jobTitle: "",
        resume: null,
    });

    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "resume") {
            const file = files[0];
            if (file && file.type !== "application/pdf") {
                setMessage("Only PDF files are allowed");
                return;
            }
            setFormData({ ...formData, resume: file });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setIsSubmitting(true);

        const data = new FormData();
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("phone", formData.phone);
        data.append("jobTitle", formData.jobTitle);
        if (formData.resume) {
            data.append("resume", formData.resume);
        }

        try {
            const res = await axios.post("/candidates", data);
            setMessage("Candidate referred successfully!");
            setFormData({ name: "", email: "", phone: "", jobTitle: "", resume: null });
            // Reset file input
            document.getElementById("resume").value = "";
        } catch (error) {
            const errMsg = error.response?.data?.error || "Failed to submit";
            setMessage(errMsg);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        Refer a Candidate
                    </h2>
                    <p className="text-gray-600">
                        Help us find great talent by referring qualified candidates
                    </p>
                </div>

                {/* Form Container */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                    {/* Message Alert */}
                    {message && (
                        <div className={`mb-6 p-4 rounded-lg border ${
                            message.includes("successfully") 
                                ? "bg-green-50 border-green-200 text-green-800" 
                                : "bg-red-50 border-red-200 text-red-800"
                        }`}>
                            <div className="flex items-center">
                                {message.includes("successfully") ? (
                                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                )}
                                <span>{message}</span>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Candidate Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter candidate's full name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="candidate@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                            />
                        </div>

                        {/* Phone Field */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number *
                            </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="+1 (555) 123-4567"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                            />
                        </div>

                        {/* Job Title Field */}
                        <div>
                            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                                Job Title *
                            </label>
                            <input
                                type="text"
                                name="jobTitle"
                                id="jobTitle"
                                placeholder="e.g., Software Engineer, Product Manager"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                            />
                        </div>

                        {/* Resume Upload */}
                        <div>
                            <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                                Resume (PDF only)
                            </label>
                            <div className="relative">
                                <input
                                    type="file"
                                    name="resume"
                                    id="resume"
                                    accept=".pdf"
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                                />
                                <div className="mt-2 text-sm text-gray-500">
                                    Upload the candidate's resume in PDF format (optional)
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-200 ${
                                    isSubmitting
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-indigo-500 hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
                                }`}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </div>
                                ) : (
                                    "Submit Referral"
                                )}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Help Text */}
                <div className="mt-8 text-center text-sm text-gray-500">
                    <p>
                        Need help? Contact our HR team at 
                        <a href="mailto:hr@company.com" className="text-indigo-600 hover:text-indigo-800 ml-1">
                            hr@company.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReferralForm;