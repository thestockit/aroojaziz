// src/components/EmbroideryCollection.jsx
import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { getProducts } from "../data/Embroidery";

const EmbroideryCollection = () => {
  const products = getProducts();

  const [quickView, setQuickView] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const sizes = ["S", "M", "L"];

  useEffect(() => {
    document.body.style.overflow = quickView ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [quickView]);

  const getPreviewImages = (product) => {
    if (!product?.images || product.images.length === 0)
      return product.image ? [product.image] : [];

    let imgs = product.images.slice(0, 3);
    while (imgs.length < 3) imgs.push(product.images[0]);
    return imgs;
  };

  const resetState = () => {
    setActiveIndex(0);
    setQuantity(1);
    setSelectedSize(null);
    setSelectedColor(null);
  };

  const closeModal = () => {
    setQuickView(null);
    resetState();
  };

  return (
    <>
      {/* ================= HEADING ================= */}
      <div className="px-4 py-6 text-center">
        <h1 className="text-3xl tracking-wide">EMBROIDERY COLLECTION</h1>
      </div>

      {/* ================= PRODUCT DETAIL PAGE ================= */}
      {selectedProduct ? (
        <div className="relative px-[8%] py-20 grid md:grid-cols-2 gap-12 overflow-y-auto min-h-screen">
          <button
            onClick={() => {
              setSelectedProduct(null);
              resetState();
            }}
            className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full 
              bg-gray-200 text-gray-600 flex items-center justify-center 
              shadow-lg hover:scale-110 transition"
          >
            <FaTimes size={18} />
          </button>

          {/* LEFT */}
          <div>
            <img
              src={getPreviewImages(selectedProduct)[activeIndex]}
              alt={selectedProduct.name}
              className="w-full max-h-[80vh] object-contain rounded-md"
            />
            <div className="flex gap-4 mt-6">
              {getPreviewImages(selectedProduct).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="thumb"
                  onClick={() => setActiveIndex(index)}
                  className={`w-24 h-32 object-cover cursor-pointer border rounded-md ${
                    activeIndex === index ? "border-black" : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <h2 className="text-3xl font-medium">{selectedProduct.name}</h2>

            {selectedProduct.price && (
              <p className="text-lg font-semibold">{selectedProduct.price}</p>
            )}

            {/* COLORS */}
            {selectedProduct.colors && (
              <div>
                <p className="text-sm font-bold mb-2">Color</p>
                <div className="flex gap-3 flex-wrap">
                  {selectedProduct.colors.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(color)}
                      className={`border-2 w-12 h-10 text-sm bg-white rounded transition ${
                        selectedColor === color
                          ? "border-black"
                          : "border-gray-300 hover:border-black"
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
                    className={`border-2 w-12 h-10 text-sm bg-white rounded transition ${
                      selectedSize === size
                        ? "border-black"
                        : "border-gray-300 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {selectedProduct.description && (
              <p className="text-sm leading-relaxed">
                <strong>Description:</strong> {selectedProduct.description}
              </p>
            )}
          </div>
        </div>
      ) : (
        /* ================= PRODUCTS GRID ================= */
        <section className="w-full px-4 md:px-8 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-[2/3] bg-gray-100 overflow-hidden rounded-lg relative">
                  <img
                    src={product.images?.[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105 cursor-pointer rounded-md"
                    onClick={() => {
                      setSelectedProduct(product);
                      setActiveIndex(0);
                    }}
                  />

                  {/* QUICK VIEW BUTTON MOBILE & DESKTOP */}
                  <div
                    className="
    absolute bottom-4 left-0 w-full px-4
    opacity-0
    md:opacity-0 md:group-hover:opacity-100
    transition duration-300
    hidden md:block
  "
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setQuickView(product);
                        setActiveIndex(0);
                        setQuantity(1);
                        setSelectedSize(null);
                        setSelectedColor(null);
                      }}
                      className="w-full bg-white text-black border border-black rounded py-2 text-sm truncate"
                    >
                      QUICK VIEW
                    </button>
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  {product.price && (
                    <p className="text-sm text-gray-600">{product.price}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= QUICK VIEW MODAL ================= */}
      {quickView && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex justify-center items-start overflow-y-auto"
          onClick={closeModal}
        >
          <div
            className="relative mt-32 w-full max-w-6xl rounded-lg shadow-lg p-6 bg-[rgb(247,241,240)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON DESKTOP */}
            <button
              onClick={() => setQuickView(null)}
              className="hidden md:flex absolute top-3 right-3 z-50 w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center shadow-md hover:bg-gray-300 transition"
            >
              <FaTimes size={18} />
            </button>

            <div className="grid md:grid-cols-2 gap-6">
              {/* LEFT */}
              <div>
                <img
                  src={getPreviewImages(quickView)[activeIndex]}
                  alt={quickView.name}
                  className="w-full max-h-[70vh] object-contain rounded-md"
                />
                <div className="flex gap-4 mt-4">
                  {getPreviewImages(quickView).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="thumb"
                      onClick={() => setActiveIndex(i)}
                      className={`w-24 h-32 object-cover cursor-pointer border rounded-md ${
                        activeIndex === i ? "border-black" : "border-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* CLOSE BUTTON MOBILE */}
                <div className="flex justify-end mt-3 md:hidden">
                  <button
                    onClick={() => setQuickView(null)}
                    className="w-9 h-9 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center shadow-md"
                  >
                    <FaTimes size={16} />
                  </button>
                </div>
              </div>

              {/* RIGHT */}
              <div className="space-y-6">
                <h2 className="text-2xl font-medium">{quickView.name}</h2>

                {quickView.price && (
                  <p className="text-lg font-semibold">{quickView.price}</p>
                )}

                {/* COLORS */}
                {quickView.colors.length > 0 && (
                  <div>
                    <h3 className="text-sm font-bold mb-2">Color</h3>
                    <div className="flex gap-3 flex-wrap">
                      {quickView.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`border-2 min-w-[70px] h-10 px-2 text-sm bg-white rounded whitespace-nowrap ${
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
                  <div className="flex gap-3 flex-wrap">
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

                {/* FABRIC DETAILS */}
                <div>
                  <h3 className="font-medium mb-2">Fabric Details:</h3>
                  <ul className="list-disc list-inside text-sm">
                    {Object.entries(quickView.fabricDetails).map(
                      ([key, value], idx) => (
                        <li key={idx}>
                          <strong>{key}:</strong> {value}
                        </li>
                      ),
                    )}
                  </ul>
                </div>

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

export default EmbroideryCollection;
