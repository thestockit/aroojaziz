// src/components/KidsCollection.jsx
import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { products } from "../data/Kids";

const KidsCollection = () => {
  const [quickView, setQuickView] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const sizes = ["XS", "S", "M", "L"];

  /* BODY SCROLL LOCK FOR QUICK VIEW */
  useEffect(() => {
    document.body.style.overflow = quickView ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [quickView]);

  const getPreviewImages = (product) => {
    if (!product) return [];
    let imgs = product.images?.slice(0, 3) || [];
    if (imgs.length === 0 && product.image) imgs = [product.image];
    while (imgs.length < 3 && imgs.length > 0) imgs.push(imgs[0]);
    return imgs;
  };

  const closeModal = () => {
    setQuickView(null);
    setActiveIndex(0);
    setQuantity(1);
    setSelectedSize(null);
    setSelectedColor(null);
  };

  return (
    <>
      {/* TITLE */}
      <div className="px-4 py-6 text-center">
        <h1 className="text-3xl tracking-wide">RANG E ISHQ</h1>
      </div>

      {/* ================= FULL PRODUCT DETAIL PAGE ================= */}
      {selectedProduct ? (
        <div className="relative px-[8%] py-20 grid md:grid-cols-2 gap-12 min-h-screen">
          {/* CLOSE BUTTON DESKTOP */}
          <button
            onClick={() => {
              setSelectedProduct(null);
              setActiveIndex(0);
              setSelectedSize(null);
            }}
            className="hidden md:flex absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shadow-lg"
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
              {getPreviewImages(selectedProduct).map((img, i) => (
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

            {/* MOBILE CLOSE BUTTON */}
            <div className="flex justify-end mt-3 md:hidden">
              <button
                onClick={() => setSelectedProduct(null)}
                className="w-9 h-9 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center shadow-md"
              >
                <FaTimes size={16} />
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <h2 className="text-3xl font-medium">{selectedProduct.name}</h2>
            <p className="text-lg font-semibold">{selectedProduct.price}</p>

            {/* COLORS */}
            {selectedProduct.colors?.length > 0 && (
              <div>
                <p className="text-sm font-bold mb-2">Color</p>
                <div className="flex gap-3 flex-wrap">
                  {selectedProduct.colors.map((color, i) => (
                    <button
                      key={i}
                      className={`border-2 w-12 h-10 text-sm bg-white rounded ${
                        selectedColor === color
                          ? "border-black"
                          : "border-gray-300"
                      }`}
                      onClick={() => setSelectedColor(color)}
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
                      selectedSize === size ? "border-black" : "border-gray-300"
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

            {/* FABRIC DETAILS */}
            {selectedProduct.fabricDetails && (
              <div>
                <p className="text-sm font-bold mb-2">Fabric Details</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  {Object.entries(selectedProduct.fabricDetails).map(
                    ([k, v], i) => (
                      <li key={i}>
                        <strong>{k}:</strong> {v}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            )}

            {/* DESCRIPTION */}
            {selectedProduct.description && (
              <div>
                <p className="text-sm font-bold mb-2">Description</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>
            )}

            {/* NOTE */}
            {selectedProduct.note && (
              <div>
                <p className="text-sm font-bold mb-2">Note</p>
                <p className="text-sm text-gray-600">{selectedProduct.note}</p>
              </div>
            )}

            {/* SHIPPING */}
            {selectedProduct.shippingTime && (
              <p className="text-sm">
                <strong>Shipping Time:</strong> {selectedProduct.shippingTime}
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
                    src={product.images?.[0] || product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105 cursor-pointer rounded-md"
                    onClick={() => {
                      setSelectedProduct(product);
                      setActiveIndex(0);
                    }}
                  />

                  {/* QUICK VIEW BUTTON */}
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
              onClick={closeModal}
              className="hidden md:flex absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shadow-md"
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

                {/* MOBILE CLOSE BUTTON */}
                <div className="flex justify-end mt-3 md:hidden">
                  <button
                    onClick={closeModal}
                    className="w-9 h-9 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center shadow-md"
                  >
                    <FaTimes size={16} />
                  </button>
                </div>
              </div>

              {/* RIGHT */}
              <div className="space-y-6">
                <h2 className="text-2xl font-medium">{quickView.name}</h2>
                <p className="text-lg font-semibold">{quickView.price}</p>

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
                <div className="mt-3">
                  <p className="text-sm font-bold mb-2">Size</p>
                  <div className="flex gap-3">
                    {sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`border-2 w-12 h-10 text-sm bg-white rounded ${
                          selectedSize === s
                            ? "border-black"
                            : "border-gray-300"
                        }`}
                      >
                        {s}
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
                        ([k, v], i) => (
                          <li key={i}>
                            <strong>{k}:</strong> {v}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                )}

                {/* DESCRIPTION */}
                {quickView.description && (
                  <div>
                    <p className="text-sm font-bold mb-2">Description</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {quickView.description}
                    </p>
                  </div>
                )}

                {/* NOTE */}
                {quickView.note && (
                  <div>
                    <p className="text-sm font-bold mb-2">Note</p>
                    <p className="text-sm text-gray-600">{quickView.note}</p>
                  </div>
                )}

                {/* SHIPPING */}
                {quickView.shippingTime && (
                  <p className="text-sm">
                    <strong>Shipping Time:</strong> {quickView.shippingTime}
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

export default KidsCollection;
