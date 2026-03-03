// src/components/BestSeller.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import img1 from "../assets/3pc/black-dress.webp";
import img11 from "../assets/3pc/jet2.webp";
import img12 from "../assets/3pc/jet3.webp";

import img2 from "../assets/3pc/red-suit.webp";
import img13 from "../assets/3pc/hot2.webp";
import img14 from "../assets/3pc/hot3.webp";

import img3 from "../assets/3pc/gresh-suit.webp";
import img15 from "../assets/3pc/magenta2.webp";
import img16 from "../assets/3pc/magenta3.webp";

import img4 from "../assets/3pc/dark-suit.webp";
import img17 from "../assets/3pc/zinc_2.webp";
import img18 from "../assets/3pc/zinc_3.webp";

import img5 from "../assets/3pc/megenta.webp";
import img19 from "../assets/3pc/jetblack2.webp";
import img20 from "../assets/3pc/jetblack3.webp";

const products = [
  {
    images: [img1, img11, img12],
    name: "Wania | Jet Black 2",
    colors: ["Jet Black"],
    description:
      "Elegance redefined in our stunning black dress with silver embellishments. Floor length maxi made of crinkle chiffon is embellished beautifully in an A-symmetrical pattern using crystals and swarovski. The maxi comes with a grip silk under shirt and cigarette pants.",
    fabricDetails: {
      Gown: "Crinkle Chiffon",
      Undershirt: "Grip Silk",
      Pants: "Korean Raw Silk",
      Dupatta: "Soft Net",
      Color: "Jet Black",
    },
  },
  {
    images: [img2, img13, img14],
    name: "Wania | Hot Pink",
    colors: ["Hot Pink"],
    description:
      "A symphony of pinks, with a hint of silver and a dash of elegance, this attire consists of a flairy georgette top with sheer neckline which is hand embellished with pearls and swarovski and a sharara with swarovski chan.",
    fabricDetails: {
      TOP: "Georgette",
      SHARARA: "Georgette",
      Inner: "Malai Silk",
      Dupatta: "Organza",
      Color: "Hot Pink",
    },
  },
  {
    images: [img5, img15, img16],
    name: "Wania | Magenta",
    colors: ["Magenta"],
    description:
      "Add a touch of sophistication to your wardrobe with this classy magenta side drop gown.",
    fabricDetails: {
      Fabric: "Chiffon",
      Color: "Magenta",
    },
  },
  {
    images: [img3, img17, img18],
    name: "Wania | Zinc",
    colors: ["Sage Green"],
    description:
      "This teal attire with gold embroidery is a must-have. Front open floor length shirt is beautifully hand embellished with swarovski and pearls. It comes with a plain pant and dupatta.",
    fabricDetails: {
      Shirt: "Tassel Silk",
      Pants: "Korean Raw Silk",
      Color: "Zinc",
    },
  },
  {
    images: [img4, img19, img20],
    name: "Wania | Jet Black",
    colors: ["Jet Black"],
    description:
      "Black beauty adorned with vibrant embroidery! This sleek long silk shirt with sheer neckline is a fresh yet classic attire to elevate your style. Vibrate floral embroidery gives a fresh summer vibe. The shirt is paired with plain cigarette pants and chiffon dupatta.",
    fabricDetails: {
      Shirt: "Katan Silk",
      Pants: "Korean Raw Silk",
      Dupatta: "Crinkle Chiffon",
      Work: "Multi-color Embroidery",
      Color: "Jet Black",
    },
  },
];

const BestSeller = () => {
  const [quickView, setQuickView] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const sizes = ["S", "M", "L"];

  useEffect(() => {
    document.body.style.overflow = quickView ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [quickView]);

  const getPreviewImages = (product) => {
    if (!product) return [];
    let imgs = product.images?.slice(0, 3) || [product.images[0]];
    while (imgs.length < 3) imgs.push(product.images[0]);
    return imgs;
  };

  const closeAll = () => {
    setQuickView(null);
    setActiveImage(0);
    setSelectedSize(null);
    setSelectedColor(null);
  };

  return (
    <>
      {/* BESTSELLER SECTION */}
      <section className="bg-[#f7f1f0] mt-10 py-12 w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl tracking-wide">
            OUR LATEST WANIA COLLECTIONS
          </h2>
          <Link
            to="/chahatcollection/kurti&trouser/suit"
            className="text-sm text-gray-500"
          >
            View all
          </Link>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-6">
          {products.map((product, i) => (
            <div key={i} className="relative group cursor-pointer">
              <div
                className="relative overflow-hidden"
                onClick={() => {
                  setQuickView(product);
                  setActiveImage(0);
                  setSelectedSize(null);
                  setSelectedColor(null);
                }}
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-[420px] object-cover transition duration-500 group-hover:opacity-0"
                />
                <img
                  src={product.images[1]}
                  alt={product.name}
                  className="w-full h-[420px] object-cover absolute top-0 left-0 opacity-0 transition duration-500 group-hover:opacity-100"
                />

                {/* QUICK VIEW BUTTON DESKTOP */}
                <div className="hidden md:block absolute bottom-4 left-0 w-full px-2 opacity-0 group-hover:opacity-100 transition">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setQuickView(product);
                      setActiveImage(0);
                      setSelectedSize(null);
                      setSelectedColor(null);
                    }}
                    className="w-full bg-white text-black py-3 text-sm border border-black"
                  >
                    QUICK VIEW
                  </button>
                </div>
              </div>
              <div className="mt-2 text-center">
                <h3 className="text-sm font-medium">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK VIEW MODAL */}
      {quickView && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex justify-center items-start sm:items-center overflow-y-auto"
          onClick={closeAll}
        >
          <div
            className="relative mt-20 w-full max-w-6xl bg-[#f7f1f0] rounded-lg shadow-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* DESKTOP CLOSE BUTTON - TOP-RIGHT */}
            <button
              onClick={closeAll}
              className="hidden md:flex absolute top-14 right-4 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shadow-md hover:bg-gray-300 transition"
            >
              <FaTimes size={18} />
            </button>

            <div className="grid md:grid-cols-2 gap-6">
              {/* LEFT - IMAGE */}
              <div>
                <img
                  src={getPreviewImages(quickView)[activeImage]}
                  alt={quickView.name}
                  className="w-full max-h-[70vh] object-contain"
                />
                <div className="flex gap-3 mt-4 justify-center flex-wrap">
                  {getPreviewImages(quickView).map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`thumb-${index}`}
                      onClick={() => setActiveImage(index)}
                      className={`w-16 h-16 object-cover cursor-pointer border-2 rounded-md ${
                        activeImage === index
                          ? "border-black"
                          : "border-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* MOBILE CLOSE BUTTON - BELOW IMAGE */}
                <div className="flex justify-end mt-3 md:hidden">
                  <button
                    onClick={closeAll}
                    className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center shadow-md"
                  >
                    <FaTimes size={16} />
                  </button>
                </div>
              </div>

              {/* RIGHT - CONTENT */}
              <div className="space-y-6">
                <h2 className="text-2xl font-medium">{quickView.name}</h2>

                {/* COLORS */}
                {quickView.colors && quickView.colors.length > 0 && (
                  <div>
                    <p className="text-sm font-bold mb-2">Color</p>
                    <div className="flex gap-3 flex-wrap">
                      {quickView.colors.map((color, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedColor(color)}
                          className={`border-2 min-w-[70px] h-10 px-2 text-sm bg-white rounded whitespace-nowrap ${
                            selectedColor === color
                              ? "border-black"
                              : "border-gray-300"
                          } hover:border-black`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* SIZE */}
                <div>
                  <p className="text-sm font-bold mb-2">Size</p>
                  <div className="flex gap-3 flex-wrap">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`border-2 w-12 h-10 text-sm bg-white rounded ${
                          selectedSize === size
                            ? "border-black"
                            : "border-gray-300"
                        } hover:border-black`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* FABRIC DETAILS */}
                {quickView.fabricDetails && (
                  <div>
                    <p className="text-sm font-bold mb-2">Fabric Details</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      {Object.entries(quickView.fabricDetails).map(
                        ([key, value], idx) => (
                          <li key={idx}>
                            <strong>{key}:</strong> {value}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                )}

                {/* DESCRIPTION */}
                {quickView.description && (
                  <p className="text-sm leading-relaxed">
                    <strong>Description:</strong> {quickView.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BestSeller;
