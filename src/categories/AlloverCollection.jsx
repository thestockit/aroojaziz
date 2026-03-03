// src/components/AlloverCollection.jsx
import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { products } from "../data/Allover";

const AlloverCollection = () => {
  const [quickView, setQuickView] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const sizes = ["S", "M", "L"];

  useEffect(() => {
    document.body.style.overflow =
      quickView || selectedProduct ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [quickView, selectedProduct]);

  const previewImages = (product) => {
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
  };

  const renderProductDetails = (product) => (
    <>
      {product.colors?.length > 0 && (
        <div>
          <p className="text-sm font-bold mb-2">Color</p>
          <div className="flex gap-3 flex-wrap">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`border-2 min-w-[70px] h-10 px-2 text-sm bg-white rounded whitespace-nowrap ${
                  selectedColor === color ? "border-black" : "border-gray-300"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}

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
                  : "border-gray-300 hover:border-black"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-3">
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

      {product.fabricDetails && (
        <div className="mt-3">
          <p className="text-sm font-bold mb-2">Fabric Details</p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {Object.entries(product.fabricDetails).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}

      {product.description && (
        <p className="text-sm text-gray-600 mt-3">
          <strong>Description:</strong> {product.description}
        </p>
      )}

      {product.note && (
        <p className="text-sm text-gray-600 mt-2">
          <strong>Note:</strong> {product.note}
        </p>
      )}

      {product.shippingTime && (
        <p className="text-sm text-gray-600 mt-2">
          <strong>Shipping Time:</strong> {product.shippingTime}
        </p>
      )}
    </>
  );

  return (
    <>
      <div className="py-6 text-center">
        <h1 className="text-3xl tracking-wide">AAIRA - Luxury Pret</h1>
      </div>

      {!selectedProduct && (
        <section className="px-[5%]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="relative group">
                <div className="relative aspect-[2/3] overflow-hidden bg-gray-100 rounded-lg">
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
                    }}
                  />
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

      {selectedProduct && (
        <div className="relative px-[8%] py-20 grid md:grid-cols-2 gap-12 min-h-screen overflow-y-auto">
          {/* DESKTOP CLOSE BUTTON */}
          <button
            onClick={closeAll}
            className="hidden md:flex absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
          >
            <FaTimes size={18} />
          </button>

          {/* LEFT IMAGES */}
          <div className="flex flex-col items-center">
            <img
              src={previewImages(selectedProduct)[activeIndex]}
              alt={selectedProduct.name}
              className="w-full max-h-[75vh] object-contain"
            />

            {/* PREVIEW IMAGES ROW */}
            <div className="flex gap-4 mt-6 flex-col">
              <div className="flex gap-4">
                {previewImages(selectedProduct).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    onClick={() => setActiveIndex(i)}
                    className={`w-24 h-32 object-cover cursor-pointer border ${
                      activeIndex === i ? "border-black" : "border-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* MOBILE CLOSE BUTTON BELOW IMAGES */}
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

          {/* RIGHT DETAILS */}
          <div className="space-y-6">
            <h2 className="text-3xl font-medium">{selectedProduct.name}</h2>
            {selectedProduct.price && (
              <p className="text-xl font-semibold">{selectedProduct.price}</p>
            )}
            {renderProductDetails(selectedProduct)}
          </div>
        </div>
      )}

      {quickView && (
        <div
          className="fixed inset-0 z-50 bg-black/50 overflow-y-auto flex justify-center items-start"
          onClick={closeAll}
        >
          <div
            className="relative mt-32 w-full max-w-6xl rounded-lg shadow-lg p-6 bg-[rgb(247,241,240)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* DESKTOP CLOSE BUTTON */}
            <button
              onClick={closeAll}
              className="hidden md:flex absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
            >
              <FaTimes size={18} />
            </button>

            <div className="grid md:grid-cols-2 gap-6">
              {/* LEFT */}
              <div>
                <img
                  src={previewImages(quickView)[activeIndex]}
                  alt={quickView.name}
                  className="w-full max-h-[70vh] object-contain"
                />
                <div className="flex gap-4 mt-4 flex-col">
                  <div className="flex gap-4">
                    {previewImages(quickView).map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt=""
                        onClick={() => setActiveIndex(i)}
                        className={`w-24 h-32 object-cover cursor-pointer border ${
                          activeIndex === i ? "border-black" : "border-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* MOBILE CLOSE BUTTON BELOW PREVIEW */}
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

              {/* RIGHT */}
              <div className="space-y-6">
                <h2 className="text-2xl font-medium">{quickView.name}</h2>
                {quickView.price && (
                  <p className="text-lg font-semibold">{quickView.price}</p>
                )}
                {renderProductDetails(quickView)}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AlloverCollection;
