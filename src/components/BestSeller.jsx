import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

import img1 from "../assets/3pc/black-dress.webp";
import img2 from "../assets/3pc/red-suit.webp";
import img3 from "../assets/3pc/gresh-suit.webp";
import img4 from "../assets/3pc/dark-suit.webp";

const products = [
  {
    images: [img1, img2, img3],
    name: "Wania | Jet Black 2",
    color: "Jet Black",
    sizes: ["S", "M", "L"],
    description:
      "Elegance redefined in our stunning black dress with silver embellishments.",
    fabricDetails: {
      gown: "Crinkle Chiffon",
      undershirt: "Grip Silk",
      pants: "Korean Raw Silk",
      color: "Jet Black",
    },
  },
  {
    images: [img2, img1, img4],
    name: "Wania | Hot Pink",
    color: "Hot Pink",
    sizes: ["S", "M", "L"],
    description:
      "A symphony of pinks with a dash of elegance and hand embellishments.",
    fabricDetails: {
      gown: "Georgette Top",
      pants: "Georgette Sharara",
      color: "Hot Pink",
    },
  },
  {
    images: [img3, img1, img2],
    name: "Wania | Sage Green",
    color: "Sage Green",
    sizes: ["S", "M", "L"],
    description: "Front open floor length shirt beautifully hand embellished.",
    fabricDetails: {
      gown: "Chiffon",
      pants: "Korean Raw Silk",
      color: "Zinc",
    },
  },
  {
    images: [img4, img1, img3],
    name: "Wania | Jet Black",
    color: "Jet Black",
    sizes: ["S", "M", "L"],
    description: "Black beauty adorned with vibrant embroidery.",
    fabricDetails: {
      gown: "Velvet",
      pants: "Korean Raw Silk",
      dupatta: "Crinkle Chiffon",
      color: "Jet Black",
    },
  },
];

const BestSeller = () => {
  const [quickView, setQuickView] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <section className="bg-[#f7f1f0] mt-16 pt-12 pb-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold">
          OUR LATEST WANIA COLLECTIONS
        </h2>
        <Link to="/collections" className="text-sm text-gray-500">
          View all
        </Link>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
            onClick={() => {
              setQuickView(product);
              setImageIndex(0);
              setSelectedSize(null);
            }}
          >
            {/* 🔥 HOVER STYLE 1 */}
            <div className="aspect-[3/5] overflow-hidden bg-gray-100">
              <motion.img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-top"
                whileHover={{ scale: 1.08, rotate: 0.4 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>

            <div className="text-center mt-3">
              <h3 className="text-sm font-medium">{product.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* QUICK VIEW */}
      <AnimatePresence>
        {quickView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 overflow-y-auto"
          >
            <div className="relative top-[110px] pb-20 flex justify-center px-4">
              <div className="bg-[#f7f1f0] w-full max-w-5xl relative">
                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setQuickView(null)}
                  className="absolute top-24 right-6 z-50 w-11 h-11 rounded-full
                             bg-black text-white flex items-center justify-center
                             shadow-lg hover:scale-110 transition"
                >
                  <FaTimes size={18} />
                </button>

                <div className="grid md:grid-cols-2 gap-6 p-8 pt-16">
                  {/* LEFT */}
                  <div>
                    <div className="aspect-[3/5] overflow-hidden bg-gray-100">
                      <motion.img
                        src={quickView.images[imageIndex]}
                        className="w-full h-full object-cover"
                        key={imageIndex}
                        initial={{ opacity: 0.6, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>

                    {/* 🔥 HOVER STYLE 2 */}
                    <div className="flex gap-3 justify-center mt-6">
                      {quickView.images.map((img, i) => (
                        <motion.img
                          key={i}
                          src={img}
                          onClick={() => setImageIndex(i)}
                          whileHover={{
                            y: -6,
                            scale: 1.05,
                            boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
                          }}
                          transition={{ duration: 0.3 }}
                          className={`w-20 h-28 object-cover border cursor-pointer ${
                            imageIndex === i
                              ? "border-black"
                              : "border-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div>
                    <h2 className="text-2xl font-semibold">{quickView.name}</h2>

                    <p className="mt-8 mb-10 text-sm flex gap-2">
                      <b>Color:</b>
                      <span>{quickView.color}</span>
                    </p>

                    <p className="text-sm text-gray-600 mb-8">
                      {quickView.description}
                    </p>

                    <div className="mb-8">
                      <p className="text-sm font-semibold mb-2">Size</p>
                      <div className="flex gap-2">
                        {quickView.sizes.map((s) => (
                          <button
                            key={s}
                            className={`w-10 h-10 border ${
                              selectedSize === s ? "bg-black text-white" : ""
                            }`}
                            onClick={() => setSelectedSize(s)}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="text-sm mb-10">
                      <p className="font-semibold mb-2">Fabric Details:</p>
                      {Object.entries(quickView.fabricDetails).map(([k, v]) => (
                        <p key={k}>
                          {k.charAt(0).toUpperCase() + k.slice(1)} - {v}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3">
                      <button className="border py-3">Add to cart</button>
                      <button className="bg-black text-white py-3">
                        Buy it now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BestSeller;
