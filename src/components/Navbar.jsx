import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaBars, FaTimes } from "react-icons/fa";
import { FiShoppingCart, FiHeart, FiMapPin, FiPhone } from "react-icons/fi";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[999] bg-white shadow-sm">
      {/* ================= TOP BAR ================= */}
      <div className="border-b bg-[#f7f1f0]">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-6 text-gray-700">
          {/* Address (Desktop only) */}
          <div className="hidden md:flex items-center gap-2 hover:text-[#DF0000] transition text-sm">
            <FiMapPin size={14} />
            <span>Plot-014A-GF Hall, DHA Phase 7</span>
          </div>

          <span className="hidden md:block w-px h-4 bg-gray-300" />

          {/* Phone (Desktop only) */}
          <a
            href="tel:+923330601258"
            className="hidden md:flex items-center gap-2 hover:text-[#DF0000] transition text-sm"
          >
            <FiPhone size={14} />
            0333-0601258
          </a>

          <span className="hidden md:block w-px h-4 bg-gray-300" />

          {/* Social Icons (Center on Mobile & Desktop) */}
          <div className="flex items-center gap-5 justify-center">
            <FaInstagram className="cursor-pointer hover:text-pink-500 text-xl md:text-base" />
            <FaFacebookF className="cursor-pointer hover:text-blue-600 text-xl md:text-base" />
          </div>
        </div>
      </div>

      {/* ================= LOGO ================= */}
      <div className="py-4 border-b">
        <h1 className="text-center text-xl md:text-2xl tracking-[4px] font-medium">
          AROOJ AZIZ
        </h1>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="relative">
        <div className="flex items-center px-4 py-4">
          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>

          {/* ================= DESKTOP MENU ================= */}
          <ul className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 text-sm font-medium">
            <NavLink to="/" className="hover:text-[#DF0000]">
              HOME
            </NavLink>

            <li className="relative group">
              <NavLink
                to="/shop"
                className="hover:text-[#DF0000] cursor-pointer"
              >
                BRIDAL
              </NavLink>

              {/* DROPDOWN */}
              <div
                className="
      absolute top-full left-1/2 -translate-x-1/2
      mt-0
      w-44
      bg-white
      shadow-lg
      rounded-md
      opacity-0
      invisible
      group-hover:opacity-100
      group-hover:visible
      transition-all
      duration-200
      z-50
    "
              >
                <NavLink
                  to="/chahatcollection/embroidery/suit"
                  className="block px-4 py-2 text-center text-sm hover:bg-gray-100"
                >
                  Pearl Majesty
                </NavLink>

                <NavLink
                  to="/chahatcollection/kids/suit"
                  className="block px-4 py-2 text-center text-sm hover:bg-gray-100"
                >
                  RANG E ISHQ
                </NavLink>

                <NavLink
                  to="/chahatcollection/2pc/suit"
                  className="block px-4 py-2 text-center text-sm hover:bg-gray-100"
                >
                  SHAHANA
                </NavLink>
              </div>
            </li>

            {/* LUXURY PRET DROPDOWN */}
            <li className="relative group cursor-pointer">
              <span className="hover:text-[#DF0000]">LUXURY PRET</span>

              <div
                className="absolute top-full left-1/2 -translate-x-1/2
      mt-0
      w-44
      bg-white
      shadow-lg
      rounded-md
      opacity-0
      invisible
      group-hover:opacity-100
      group-hover:visible
      transition-all
      duration-200
      z-50"
              >
                <NavLink
                  to="/chahatcollection/allover/suit"
                  className="block px-4 py-2 text-center hover:bg-gray-100"
                >
                  Aaira
                </NavLink>

                <NavLink
                  to="/chahatcollection/kurti&trouser/suit"
                  className="block px-4 py-2 text-center text-sm hover:bg-gray-100"
                >
                  Wania
                </NavLink>
              </div>
            </li>

            <NavLink
              to="/chahatcollection/3pc/suit"
              className="hover:text-[#DF0000]"
            >
              FORMAL
            </NavLink>
          </ul>

          {/* ================= MOBILE MENU ================= */}
          {mobileMenu && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden">
              <ul className="flex flex-col items-center py-6 gap-4 text-sm font-medium">
                <NavLink to="/" onClick={() => setMobileMenu(false)}>
                  HOME
                </NavLink>

                <NavLink to="/shop" onClick={() => setMobileMenu(false)}>
                  BRIDAL
                </NavLink>

                {/* MOBILE DROPDOWN */}
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="font-medium"
                >
                  LUXURY PRET
                </button>

                {mobileDropdownOpen && (
                  <div className="w-full flex flex-col items-center bg-gray-100 py-2">
                    <NavLink
                      to="/chahatcollection/allover/suit"
                      className="py-2"
                      onClick={() => setMobileMenu(false)}
                    >
                      Aaira
                    </NavLink>
                    <NavLink
                      to="/chahatcollection/kurti&trouser/suit"
                      className="py-2"
                      onClick={() => setMobileMenu(false)}
                    >
                      Wania
                    </NavLink>
                  </div>
                )}

                <NavLink
                  to="//chahatcollection/3pc/suit"
                  onClick={() => setMobileMenu(false)}
                >
                  FORMAL
                </NavLink>
              </ul>
            </div>
          )}

          {/* ================= RIGHT ICONS ================= */}
          <div className="ml-auto flex gap-4">
            <FiShoppingCart className="hover:text-[#DF0000] cursor-pointer" />
            <FiHeart className="hover:text-[#DF0000] cursor-pointer" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
