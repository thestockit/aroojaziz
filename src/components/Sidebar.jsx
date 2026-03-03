import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import img1 from "../assets/3pc/lalishiq.webp";
import img2 from "../assets/3pc/peral.webp";
import img3 from "../assets/3pc/orange.webp";
import img4 from "../assets/3pc/pink.webp";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    { img: img1, link: "/chahatcollection/allover/suit" },
    { img: img2, link: "/chahatcollection/embroidery/suit" },
    { img: img3, link: "/chahatcollection/3pc/suit" },
    { img: img4, link: "/chahatcollection/kids/suit" },
  ];

  /* ✅ Stable Auto Slider */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === sliderImages.length - 1 ? 0 : prev + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1,
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === sliderImages.length - 1 ? 0 : prev + 1,
    );
  };

  const categories = [
    { name: "PERAL MAJEST", link: "/chahatcollection/embroidery/suit" },
    { name: "Rang e ishq", link: "/chahatcollection/kids/suit" },
    { name: "Gule e surkh", link: "/chahatcollection/3pc/suit" },
    { name: "Shahana", link: "/chahatcollection/2pc/suit" },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="flex items-center justify-between p-4 text-white bg-black md:hidden">
        <h1 className="text-xl font-semibold">Menu</h1>

        {!sidebarOpen ? (
          <MdOutlineLibraryAdd
            size={24}
            className="cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          />
        ) : (
          <FiX
            size={24}
            className="cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0
          w-72 h-screen
          bg-[#1a1a1a]
          text-white p-6 space-y-8
          overflow-y-auto
          transform transition-transform duration-300
          z-50
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          md:static md:h-screen
        `}
      >
        {/* Category Section */}
        <div>
          <h2 className="pb-2 mb-4 text-lg font-semibold border-b border-gray-600">
            BRIDAL
          </h2>

          <ul className="space-y-2">
            {categories.map((cat, i) => (
              <li key={i}>
                <Link
                  to={cat.link}
                  className="block text-gray-300 hover:text-white transition"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Featured Products Slider */}
        <div>
          <h2 className="pb-2 mb-4 text-lg font-semibold border-b border-gray-600">
            Featured Products
          </h2>

          <div className="relative w-full aspect-[3/4] bg-black rounded-lg overflow-hidden">
            <Link to={sliderImages[currentSlide].link}>
              <img
                src={sliderImages[currentSlide].img}
                alt="Featured"
                className="w-full h-full object-cover object-center"
              />
            </Link>

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-700 p-2 rounded-full hover:bg-white hover:text-black transition"
            >
              <FaChevronLeft size={16} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 p-2 rounded-full hover:bg-white hover:text-black transition"
            >
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
