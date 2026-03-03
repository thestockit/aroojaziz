// src/components/ThreePcCollection.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { products } from "../data/3pc";

const ThreePcCollection = () => {
  const [quickView, setQuickView] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const sizes = ["S", "M", "L"];

  /* ================= SCROLL TO TOP ================= */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  /* ================= BODY SCROLL LOCK ================= */
  useEffect(() => {
    if (quickView || selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [quickView, selectedProduct]);

  /* ================= PREVIEW IMAGES ================= */
  const getPreviewImages = (product) => {
    if (!product) return [];
    let imgs =
      product.images && product.images.length
        ? product.images.slice(0, 3)
        : [product.image];

    while (imgs.length < 3) imgs.push(product.image);
    return imgs;
  };

  /* ================= CLOSE FUNCTION ================= */
  const closeAll = () => {
    setQuickView(null);
    setSelectedProduct(null);
    setActiveIndex(0);
    setSelectedSize(null);
    setSelectedColor(null);
    setQuantity(1);
  };

  return (
    <>
      {/* ================= HEADING ================= */}
      {!selectedProduct && (
        <div className="px-4 py-6 text-center">
          <h1 className="text-3xl tracking-wide">FORMAL</h1>
        </div>
      )}

      {/* ================= FULL PRODUCT PAGE ================= */}
      {selectedProduct ? (
        <div className="relative px-4 md:px-[8%] lg:px-[10%] py-20 grid md:grid-cols-2 gap-12 min-h-screen">
          
          {/* CLOSE BUTTON DESKTOP */}
          <button
            onClick={closeAll}
            className="hidden md:flex absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-200 items-center justify-center hover:bg-gray-300 transition"
          >
            <FaTimes size={18} />
          </button>

          {/* LEFT IMAGES */}
          <div className="flex flex-col items-center">
            <img
              src={getPreviewImages(selectedProduct)[activeIndex]}
              alt={selectedProduct.name}
              className="w-full max-h-[80vh] object-contain rounded-md"
            />

            <div className="flex gap-4 mt-6">
              {getPreviewImages(selectedProduct).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setActiveIndex(i)}
                  className={`w-24 h-32 object-cover cursor-pointer border rounded-md ${
                    activeIndex === i ? "border-black" : "border-gray-300"
                  }`}
                  alt={`thumb-${i}`}
                />
              ))}
            </div>

            {/* CLOSE BUTTON MOBILE */}
            <div className="flex justify-end mt-4 md:hidden w-full">
              <button
                onClick={closeAll}
                className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center shadow-md"
              >
                <FaTimes size={16} />
              </button>
            </div>
          </div>

          {/* RIGHT DETAILS */}
          <div className="space-y-6">
            <h1 className="text-3xl font-light">
              {selectedProduct.name}
            </h1>

            {selectedProduct.price && (
              <p className="text-xl font-semibold">
                {selectedProduct.price}
              </p>
            )}

            {/* COLORS */}
            {selectedProduct.colors?.length > 0 && (
              <div>
                <p className="text-sm font-bold mb-2">Color</p>
                <div className="flex gap-3 flex-wrap">
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`border-2 min-w-[70px] h-10 px-2 text-sm bg-white rounded ${
                        selectedColor === color
                          ? "border-black"
                          : "border-gray-300"
                      }`}
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
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border-2 w-12 h-10 text-sm bg-white rounded ${
                      selectedSize === size
                        ? "border-black"
                        : "border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* DESCRIPTION */}
            {selectedProduct.description && (
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>Description:</strong>{" "}
                {selectedProduct.description}
              </p>
            )}

            {selectedProduct.shippingTime && (
              <p className="text-sm text-gray-600">
                <strong>Shipping Time:</strong>{" "}
                {selectedProduct.shippingTime}
              </p>
            )}

            {selectedProduct.note && (
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> {selectedProduct.note}
              </p>
            )}
          </div>
        </div>
      ) : (
        /* ================= GRID ================= */
        <section className="w-full px-4 md:px-8 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-[2/3] bg-gray-100 overflow-hidden rounded-lg relative">
                  <img
                    src={product.images?.[0] || product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105 cursor-pointer"
                    onClick={() => {
                      setSelectedProduct(product);
                      setActiveIndex(0);
                      setSelectedSize(null);
                      setSelectedColor(null);
                    }}
                  />

                  {/* QUICK VIEW BUTTON */}
                  <div className="absolute bottom-4 left-0 w-full px-4 opacity-0 md:group-hover:opacity-100 transition duration-300 hidden md:block">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setQuickView(product);
                        setActiveIndex(0);
                        setSelectedSize(null);
                        setSelectedColor(null);
                      }}
                      className="w-full bg-white text-black border border-black rounded py-2 text-sm"
                    >
                      QUICK VIEW
                    </button>
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <h3 className="text-sm font-medium">
                    {product.name}
                  </h3>
                  {product.price && (
                    <p className="text-sm text-gray-600">
                      {product.price}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= QUICK VIEW MODAL ================= */}
      <AnimatePresence>
        {quickView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 overflow-y-auto flex justify-center items-start"
            onClick={closeAll}
          >
            <div
              className="relative mt-20 md:mt-32 w-full max-w-6xl rounded-lg shadow-lg p-6 bg-[rgb(247,241,240)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeAll}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
              >
                <FaTimes size={18} />
              </button>

              <div className="grid md:grid-cols-2 gap-6">
                {/* LEFT */}
                <div>
                  <img
                    src={getPreviewImages(quickView)[activeIndex]}
                    alt={quickView.name}
                    className="w-full max-h-[70vh] object-contain"
                  />
                </div>

                {/* RIGHT */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-medium">
                    {quickView.name}
                  </h2>
                  {quickView.price && (
                    <p className="text-lg font-semibold">
                      {quickView.price}
                    </p>
                  )}
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