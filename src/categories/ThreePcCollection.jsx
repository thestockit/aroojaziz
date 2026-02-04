import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { products } from "../data/3pc";

const ThreePcCollection = () => {
  const [quickView, setQuickView] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // SAME LOGIC AS EMBROIDERY
  const getPreviewImages = (product) => {
    let imgs =
      product.images && product.images.length
        ? product.images.slice(0, 3)
        : [product.image];

    while (imgs.length < 3) imgs.push(product.image);
    return imgs;
  };

  return (
    <>
      {/* HEADING */}
      <div className="px-4 py-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold">FORMAL</h1>
      </div>

      {/* PRODUCT GRID */}
      <section className="w-full px-[5%]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="relative group">
              {/* IMAGE */}
              <div className="relative aspect-[2/3] overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* QUICK VIEW */}
                <button
                  onClick={() => {
                    setQuickView(product);
                    setActiveIndex(0);
                  }}
                  className="absolute inset-0 flex items-center justify-center
                             opacity-0 group-hover:opacity-100
                             transition bg-black/40"
                >
                  <span className="border border-white text-white px-5 py-2 text-sm">
                    Quick View
                  </span>
                </button>
              </div>

              {/* INFO */}
              <div className="mt-3 text-center">
                <h3 className="text-sm font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK VIEW MODAL */}
      <AnimatePresence>
        {quickView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 overflow-y-auto"
          >
            <div className="relative top-[120px] pb-24 flex justify-center px-4">
              {/* RELATIVE REQUIRED */}
              <div className="bg-white w-full max-w-6xl relative">
                {/* ❌ CLOSE BUTTON — SAME AS EMBROIDERY */}
                <button
                  onClick={() => setQuickView(null)}
                  className="absolute top-24 right-6
                             z-50
                             w-11 h-11 rounded-full
                             bg-black text-white
                             flex items-center justify-center
                             shadow-lg
                             hover:scale-110 transition"
                >
                  <FaTimes size={18} />
                </button>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* LEFT IMAGE */}
                  <div className="px-8 pt-20 pb-10">
                    <img
                      src={getPreviewImages(quickView)[activeIndex]}
                      alt={quickView.name}
                      className="w-full max-h-[70vh] object-contain mx-auto"
                    />

                    <div className="flex justify-center gap-4 mt-6">
                      {getPreviewImages(quickView).map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          onClick={() => setActiveIndex(i)}
                          className={`w-24 h-32 object-cover cursor-pointer border ${
                            activeIndex === i
                              ? "border-black"
                              : "border-gray-300"
                          }`}
                          alt=""
                        />
                      ))}
                    </div>
                  </div>

                  {/* RIGHT CONTENT */}
                  <div className="px-8 pt-20 pb-10 space-y-4">
                    <h2 className="text-3xl font-light">{quickView.name}</h2>

                    {/* Color */}
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Color</p>
                      <span className="border px-6 py-2 inline-block">
                        {quickView.color}
                      </span>
                    </div>

                    {/* Fabrics */}
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Fabrics</p>
                      <ul className="list-disc list-inside text-sm text-gray-500">
                        {quickView.fabric.map((fab, idx) => (
                          <li key={idx}>{fab}</li>
                        ))}
                      </ul>
                      <p className="text-sm">
                        <strong>Pishwaas:</strong> {quickView.pishwaas}
                      </p>
                      <p className="text-sm">
                        <strong>Lengha:</strong> {quickView.lengha}
                      </p>
                      <p className="text-sm">
                        <strong>Dupatta:</strong> {quickView.dupataFabric}
                      </p>
                    </div>

                    {/* Description */}
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Description</p>
                      <p className="text-sm text-gray-500">
                        {quickView.description}
                      </p>
                    </div>

                    {/* Design / Embellishment */}
                    <div>
                      <p className="text-sm text-gray-600 mb-1">
                        Design / Embellishment
                      </p>
                      <p className="text-sm text-gray-500">
                        {quickView.colorDesign}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Features</p>
                      <ul className="list-disc list-inside text-sm text-gray-500">
                        {quickView.features.map((feat, idx) => (
                          <li key={idx}>{feat}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Care Instructions */}
                    <p className="text-sm">
                      <strong>Care Instructions:</strong>{" "}
                      {quickView.careInstructions}
                    </p>

                    {/* Perfect For */}
                    <p className="text-sm">
                      <strong>Perfect For:</strong> {quickView.perfectFor}
                    </p>

                    {/* Customization */}
                    <p className="text-sm">
                      <strong>Customization:</strong> {quickView.customization}
                    </p>

                    {/* Note */}
                    <p className="text-sm">
                      <strong>Note:</strong> {quickView.note}
                    </p>

                    {/* Shipping Time */}
                    <p className="text-sm">
                      <strong>Shipping Time:</strong> {quickView.shippingTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThreePcCollection;
