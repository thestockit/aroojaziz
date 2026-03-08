import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FiMapPin, FiPhone } from "react-icons/fi";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileDropdownBridal, setMobileDropdownBridal] = useState(false);

  const MenuDivider = () => (
    <div className="w-[92%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-100" />
  );

  const linkStyles =
    "block w-full px-6 py-2.5 text-center text-[13px] tracking-[0.1em] text-[#676869] hover:text-[#171717] hover:bg-gray-50/80 transition-all duration-300 font-normal";

  return (
    <header className="sticky top-0 z-[999] bg-white shadow-sm">
      {/* ================= TOP BAR ================= */}
      <div className="border-b bg-[#f7f1f0]">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-center gap-6 md:gap-12 text-[#676869]">
          <div className="hidden md:flex items-center gap-3 text-[11px] font-normal tracking-wider">
            <FiMapPin size={12} />
            <span>Plot-014A-GF Hall, DHA Phase 7</span>
          </div>

          <span className="hidden md:block w-px h-3 bg-gray-300/60" />

          <a
            href="tel:+923330601258"
            className="hidden md:flex items-center gap-3 text-[11px] font-normal tracking-wider hover:text-[#171717]"
          >
            <FiPhone size={12} />
            0333-0601258
          </a>

          <span className="hidden md:block w-px h-3 bg-gray-300/60" />

          <div className="flex items-center gap-7">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#171717]"><FaFacebookF size={13} /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#171717]"><FaInstagram size={14} /></a>
            <a href="https://wa.me/923330601258?text=Hi%20I%20would%20like%20to%20book%20an%20appointment" target="_blank" rel="noreferrer" className="hover:text-[#171717]"><FaWhatsapp size={15} /></a>
          </div>
        </div>
      </div>

{/* ================= LOGO ================= */}
<div className="py-4 px-6 border-b border-gray-100 flex items-center justify-between md:justify-center">
  <a href="/" className="hover:opacity-80 transition-opacity">
    <h1 className="text-lg md:text-xl tracking-[5px] font-normal text-[#171717]">AROOJ AZIZ</h1>
  </a>
  <button className="md:hidden text-[#676869]" onClick={() => setMobileMenu(!mobileMenu)}>
    {mobileMenu ? <FaTimes size={22} /> : <FaBars size={22} />}
  </button>
</div>

      {/* ================= DESKTOP NAV ================= */}
      <nav className="relative bg-white border-b border-gray-100 hidden md:block">
        <div className="flex items-center justify-center px-6 py-3">
          <ul className="flex items-center gap-14 text-[12px] tracking-[0.2em] font-normal text-[#676869]">
            <li><NavLink to="/" className="hover:text-[#171717]">HOME</NavLink></li>

            {/* BRIDAL DROPDOWN */}
            <li className="relative group py-1">
              <NavLink to="/collections/bridal" className="hover:text-[#171717] uppercase">Bridal</NavLink>
              <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-48 bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="flex flex-col py-1">
                  <NavLink to="/collections/bridal/pearl-majesty" className={linkStyles}>Pearl majesty</NavLink>
                  <MenuDivider />
                  <NavLink to="/collections/bridal/rang-e-ishq" className={linkStyles}>Rang e ishq</NavLink>
                  <MenuDivider />
                  <NavLink to="/collections/bridal/shahana" className={linkStyles}>Shahana</NavLink>
                </div>
              </div>
            </li>

            {/* LUXURY PRET DROPDOWN */}
            <li className="relative group py-1">
              <NavLink to="/collections/luxury-pret" className="hover:text-[#171717] uppercase">Luxury pret</NavLink>
              <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-48 bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="flex flex-col py-1">
                  <NavLink to="/collections/luxury-pret/aaira" className={linkStyles}>Aaira</NavLink>
                  <MenuDivider />
                  <NavLink to="/collections/luxury-pret/wania" className={linkStyles}>Wania</NavLink>
                </div>
              </div>
            </li>

            {/* FORMAL */}
            <li><NavLink to="/collections/formal" className="hover:text-[#171717] uppercase">Formal</NavLink></li>

          </ul>
        </div>
      </nav>

      {/* ================= MOBILE NAV ================= */}
      {mobileMenu && (
        <div className="absolute top-full left-0 w-full bg-white shadow-2xl md:hidden z-[1000] border-t">
          <ul className="flex flex-col text-[13px] tracking-widest text-[#676869]">
            <NavLink to="/" className="py-4 text-center border-b" onClick={() => setMobileMenu(false)}>Home</NavLink>
            
            <button onClick={() => setMobileDropdownBridal(!mobileDropdownBridal)} className="py-4 border-b">Bridal</button>
            {mobileDropdownBridal && (
              <div className="bg-gray-50 flex flex-col">
                <NavLink to="/collections/bridal/pearl-majesty" className="py-3 text-center" onClick={() => setMobileMenu(false)}>Pearl Majesty</NavLink>
                <NavLink to="/collections/bridal/rang-e-ishq" className="py-3 text-center" onClick={() => setMobileMenu(false)}>Rang e Ishq</NavLink>
                <NavLink to="/collections/bridal/shahana" className="py-3 text-center" onClick={() => setMobileMenu(false)}>Shahana</NavLink>
              </div>
            )}

            <button onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)} className="py-4 border-b">Luxury Pret</button>
            {mobileDropdownOpen && (
              <div className="bg-gray-50 flex flex-col">
                <NavLink to="/collections/luxury-pret/aaira" className="py-3 text-center" onClick={() => setMobileMenu(false)}>Aaira</NavLink>
                <NavLink to="/collections/luxury-pret/wania" className="py-3 text-center" onClick={() => setMobileMenu(false)}>Wania</NavLink>
              </div>
            )}

            <NavLink to="/collections/formal" className="py-4 text-center" onClick={() => setMobileMenu(false)}>Formal</NavLink>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;