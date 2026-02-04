import React, { useState } from "react";
import Category from "../components/Category.jsx";
import AlloverCollection from "../categories/AlloverCollection.jsx";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <>
      <div className="w-full">
        {/* AllOver Collection */}
        <AlloverCollection />
      </div>

      {/* Categories */}
      <Category />
      <div className="relative flex items-center justify-center min-h-screen p-6">
        {/* Glass card */}
        <div className="w-full max-w-lg p-8 text-white bg-black border shadow-2xl rounded-2xl backdrop-blur-lg border-white/10 animate-fadeInUp">
          <h1 className="mb-6 text-3xl font-bold tracking-wide text-center">
            Contact Us
          </h1>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-[#222222] text-white placeholder-gray-400 border border-gray-600 focus:border-white transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-[#222222] text-white placeholder-gray-400 border border-gray-600 focus:border-white transition"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 rounded-lg bg-[#222222] text-white placeholder-gray-400 border border-gray-600 focus:border-white transition resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-[#4d4d4d] to-[#222222] text-white hover:scale-105 transition-transform"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="space-y-5 text-center animate-fadeInUp">
              <div className="text-6xl text-green-400"></div>
              <p className="text-lg">Your message has been sent!</p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-lg bg-[#4d4d4d] text-white hover:scale-105 transition-transform"
              >
                Send Another
              </button>
            </div>
          )}
        </div>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/923330601258"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M20.52 3.48A11.91 11.91 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.15 1.59 5.95L0 24l6.22-1.63A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.92 9.92 0 01-5.06-1.38l-.36-.21-3.69.96.99-3.6-.23-.37A9.93 9.93 0 012 12C2 6.48 6.48 2 12 2c2.66 0 5.17 1.04 7.07 2.93A9.92 9.92 0 0122 12c0 5.52-4.48 10-10 10zm5.1-7.4c-.28-.14-1.65-.81-1.91-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.08-.17.19-.35.21-.63.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.56-1.93-.17-.28-.02-.43.13-.57.13-.13.28-.35.42-.52.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.1-.23-.56-.47-.48-.64-.49-.17 0-.37-.01-.57-.01-.2 0-.53.07-.81.35-.28.28-1.07 1.04-1.07 2.54s1.1 2.94 1.26 3.14c.16.21 2.16 3.3 5.23 4.63.73.31 1.3.49 1.74.62.73.23 1.39.2 1.91.12.58-.09 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33z" />
          </svg>
        </a>

        {/* Animations */}
        <style>
          {`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        `}
        </style>
      </div>
    </>
  );
}
