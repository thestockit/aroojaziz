import React, { useState } from "react";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("Subscribed successfully!");
    setEmail("");
  };

  return (
    <footer className="px-6 py-12 mt-20 text-black bg-[#f7f1f0]">
      <div className="grid grid-cols-1 gap-10 mx-auto max-w-7xl md:grid-cols-4">
        {/* About Us */}
        <div>
          <h2 className="mb-4 text-lg font-semibold uppercase">About Us</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            The house of Arooj Aziz is synonymous with sophistication and
            elegance. Imbued with a time-honoured aesthetic and inimitable
            artistry the brand stands as an icon of our gloriously regal
            heritage reimagined through a kaleidoscope of colour, cut and craft.
            Built over a decade of brilliance, the fashion powerhouse has carved
            a niche for itself by constantly reinvigorating the elite craft of
            both bridal and haute couture.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="mb-4 text-lg font-semibold uppercase">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-800">
            <li>
              <Link to="/" className="hover:text-black transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-black transition">
                BRIDAL
              </Link>
            </li>
            <li>
              <Link to="/mencollection" className="hover:text-black transition">
                LUXURY PRET
              </Link>
            </li>
            <li>
              <Link
                to="/womencollection"
                className="hover:text-black transition"
              >
                FORMAL
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="mb-4 text-lg font-semibold uppercase">
            Stay In Touch
          </h2>
          <form onSubmit={handleSubscribe} className="space-y-3">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 text-sm text-black bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
            />
            <button
              type="submit"
              className="px-6 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 transition"
            >
              Subscribe
            </button>
            {message && <p className="text-sm text-gray-700">{message}</p>}
          </form>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="mb-4 text-lg font-semibold uppercase">Follow Us</h2>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/aroojaziz_/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-300 text-black hover:bg-black hover:text-white transition"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="https://wa.me/923330601258"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-300 text-black hover:bg-black hover:text-white transition"
            >
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-6 mt-10 text-sm text-center text-gray-600 border-t border-gray-300">
        © {new Date().getFullYear()}{" "}
        <a
          href="https://thestockit.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          The Stockit
        </a>
      </div>
    </footer>
  );
};

export default Footer;
