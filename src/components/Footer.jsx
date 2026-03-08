import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-6 py-16 mt-20 bg-[#f7f1f0]">
      <div className="mx-auto max-w-[1000px] grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* About Us */}
        <div className="md:col-span-2 flex flex-col space-y-6 pr-0 md:pr-12">
          <h2 className="text-[14px] tracking-[0.2em] text-[#171717] font-normal uppercase">
            About us
          </h2>
          <p className="text-[15px] leading-[1.8] text-[#676869] font-normal">
            The house of Arooj Aziz is synonymous with sophistication and
            elegance. Imbued with a time-honoured aesthetic and inimitable
            artistry the brand stands as an icon of our gloriously regal
            heritage reimagined through a kaleidoscope of colour, cut and craft.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-[14px] tracking-[0.2em] text-[#171717] font-normal uppercase">
            Quick links
          </h2>
          <ul className="space-y-4 text-[15px] text-[#676869] font-normal">
            <li>
              <Link to="/" className="hover:text-[#171717] transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/collections/bridal" className="hover:text-[#171717] transition-colors duration-300">
                Bridal
              </Link>
            </li>
            <li>
              <Link to="/collections/luxury-pret" className="hover:text-[#171717] transition-colors duration-300">
                Luxury pret
              </Link>
            </li>
            <li>
              <Link to="/collections/formal" className="hover:text-[#171717] transition-colors duration-300">
                Formal
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col space-y-6 md:items-end">
          <h2 className="text-[14px] tracking-[0.2em] text-[#171717] font-normal uppercase">
            Follow us
          </h2>
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/p/Arooj-Aziz-100063690026718/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#676869] hover:text-[#171717] transition-all duration-300 hover:-translate-y-1"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://www.instagram.com/aroojaziz_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#676869] hover:text-[#171717] transition-all duration-300 hover:-translate-y-1"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://wa.me/923330601258"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#676869] hover:text-[#171717] transition-all duration-300 hover:-translate-y-1"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-20 pt-10 border-t border-gray-200/60 text-center">
        <p className="text-[12px] tracking-[0.3em] text-[#676869] font-normal uppercase opacity-80">
          © {new Date().getFullYear()} Arooj Aziz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;