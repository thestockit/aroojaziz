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

  // --- Separate Slider Setup ---
  const sliderImages = [
    { img: img1, link: "/chahatcollection/allover/suit" },
    { img: img2, link: "/chahatcollection/embroidery/suit" },
    { img: img3, link: "/chahatcollection/3pc/suit" },
    { img: img4, link: "/chahatcollection/kids/suit" },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === sliderImages.length - 1 ? 0 : prev + 1,
      );
    }, 3000);
    return () => clearInterval(timer);
  }, [currentSlide]);

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

  // --- Dummy sections from your original sidebar ---
  const brands = [];
  const categories = [
    { name: "PERAL MAJEST", link: "/chahatcollection/embroidery/suit" },
    { name: "Rang e ishq", link: "/chahatcollection/kids/suit" },
    { name: "Gule e surkh", link: "/chahatcollection/3pc/suit" },
    { name: "shahana", link: "/chahatcollection/2pc/suit" },
  ];
  const seller = [
    { img: "img3", name: "Aaira", link: "/chahatcollection/allover/suit" },
  ];
  const Wania = [
    {
      img: "img4",
      name: "Wania",
      link: "/chahatcollection/kurti&trouser/suit",
    },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="flex items-center justify-between p-4 text-white bg-blackShade md:hidden">
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

      <aside
        className={`
          fixed top-0 left-0 text-white p-6 space-y-8
          w-64 h-full overflow-y-auto
          transform transition-transform duration-300 ease-in-out
          bg-[#1a1a1a]
          md:static md:translate-x-0 md:h-auto md:w-64
          ${sidebarOpen ? "translate-x-0 shadow-lg z-50" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Shop by Brand */}
        <div>
          <h2 className="pb-2 mb-4 text-lg font-semibold border-b border-gray-600">
            Shop By Brand
          </h2>
          <ul className="space-y-2">
            {brands.map((brand, i) => (
              <li key={i}>
                <Link
                  to={brand.link}
                  className="block text-gray-300 transition-colors hover:text-white"
                >
                  {brand.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Shop by Category */}
        <div>
          <h2 className="pb-2 mb-4 text-lg font-semibold border-b border-gray-600">
            BRIDAL
          </h2>
          <ul className="space-y-2">
            {categories.map((cat, i) => (
              <li key={i}>
                <Link
                  to={cat.link}
                  className="block text-gray-300 transition-colors hover:text-white"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Separate Slider Section */}
        <div>
          <h2 className="pb-2 mb-4 text-lg font-semibold border-b border-gray-600">
            Featured Products
          </h2>
          <div className="relative w-full h-48 overflow-hidden rounded-lg">
            <Link to={sliderImages[currentSlide].link}>
              <img
                src={sliderImages[currentSlide].img}
                alt="Featured"
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </Link>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute p-1 transition transform -translate-y-1/2 rounded-full top-1/2 left-2 bg-grayShade hover:bg-white hover:text-black1"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute p-1 transition transform -translate-y-1/2 rounded-full top-1/2 right-2 bg-grayShade hover:bg-white hover:text-black1"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Sellers */}
        <div>
          <h2 className="pb-2 mb-4 text-lg font-semibold border-b border-gray-600">
            Aaira
          </h2>
          <ul className="space-y-2">
            {seller.map((cat, i) => (
              <li key={i}>
                <Link
                  to={cat.link}
                  className="block text-gray-300 transition-colors hover:text-white"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="pb-2 mb-4 text-lg font-semibold border-b border-gray-600">
            Wania
          </h2>
          <ul className="space-y-2">
            {Wania.map((cat, i) => (
              <li key={i}>
                <Link
                  to={cat.link}
                  className="block text-gray-300 transition-colors hover:text-white"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
