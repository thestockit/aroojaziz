// src/components/KurtiCollection.jsx
import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { products } from "../data/Kurti";

const KurtiCollection = () => {
  const [quickView, setQuickView] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const sizes = ["S", "M", "L"];

  // ✅ PAGE LOAD PAR TOP SE START HOGA
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ MODAL OPEN HONE PAR BODY SCROLL LOCK
  useEffect(() => {
    document.body.style.overflow =
      quickView || selectedProduct ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [quickView, selectedProduct]);

  const getPreviewImages = (product) => {
    if (!product) return [];
    let imgs = product.images?.slice(0, 3) || [product.image];
    while (imgs.length < 3) imgs.push(product.image);
    return imgs;
  };

  const closeAll = () => {
    setQuickView(null);
    setSelectedProduct(null);
    setActiveIndex(0);
    setQuantity(1);
    setSelectedSize(null);
    setSelectedColor(null);

    // ✅ CLOSE PAR BHI TOP PAR LE JAYE
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="px-4 py-6 text-center">
        <h1 className="text-3xl tracking-wide">KURTI COLLECTION</h1>
      </div>

      {/* FULL PRODUCT DETAIL */}
      {selectedProduct ? (
        <div className="relative px-[8%] py-20 grid md:grid-cols-2 gap-12 min-h-screen">
          <button
            onClick={closeAll}
            className="hidden md:flex absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-200 items-center justify-center hover:bg-gray-300 transition"
          >
            <FaTimes size={18} />
          </button>

          {/* LEFT SIDE IMAGES */}
          <div className="flex flex-col items-center">
            <img
              src={getPreviewImages(selectedProduct)[activeIndex]}
              alt={selectedProduct.name}
              className="w-full max-h-[80vh] object-contain rounded-md"
            />

            <div className="flex gap-4 mt-6 flex-col">
              <div className="flex gap-4">
                {getPreviewImages(selectedProduct).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`thumb-${i}`}
                    onClick={() => setActiveIndex(i)}
                    className={`w-24 h-32 object-cover cursor-pointer border rounded-md ${
                      activeIndex === i ? "border-black" : "border-gray-300"
                    }`}
                  />
                ))}
              </div>

              <div className="flex justify-end mt-2 md:hidden">
                <button
                  onClick={closeAll}
                  className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center shadow-md"
                >
                  <FaTimes size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE DETAILS */}
          <div className="space-y-6">
            <h2 className="text-3xl font-medium">{selectedProduct.name}</h2>

            {selectedProduct.price && (
              <p className="text-xl font-semibold">
                {selectedProduct.price}
              </p>
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

            {/* QUANTITY */}
            <div>
              <p className="text-sm font-bold mb-2">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  className="border w-10 h-10"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  −
                </button>
                <span className="border w-12 h-10 flex items-center justify-center">
                  {quantity}
                </span>
                <button
                  className="border w-10 h-10"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* PRODUCT GRID */
        <section className="px-4 md:px-[5%] pb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="relative aspect-[2/3] bg-gray-100 overflow-hidden rounded-lg">
                  <img
                    src={product.images?.[0] || product.image}
                    alt={product.name}
                    className="w-full h-full object-cover cursor-pointer transition duration-500 group-hover:scale-105 rounded-md"
                    onClick={() => {
                      setSelectedProduct(product);
                      setActiveIndex(0);
                      setSelectedSize(null);
                      setSelectedColor(null);
                      setQuantity(1);
                      window.scrollTo(0, 0);
                    }}
                  />
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
    </>
  );
};

export default KurtiCollection;