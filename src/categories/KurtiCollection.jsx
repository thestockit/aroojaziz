import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { products } from "../data/Kurti.js";

const KurtiCollection = () => {
  const navigate = useNavigate();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [quickView, setQuickView] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    document.body.style.overflow = quickView ? "hidden" : "auto";
  }, [quickView]);

  const getPreviewImages = (product) => {
    let imgs =
      product.images && product.images.length
        ? product.images.slice(0, 3)
        : [product.image];

    while (imgs.length < 3) {
      imgs.push(product.image);
    }
    return imgs;
  };

  const handleProductClick = (id) => {
    navigate(`/chahatcollection/kurti&trouser/suit/${id}`);
  };

  return (
    <>
      <div className="px-4 py-3 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold">
          Best Luxury Dresses - WANIA
        </h1>
      </div>

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-[5%]">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product.id)}
            className="relative cursor-pointer group"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleWishlist(product, product.brand, "kurti");
              }}
              className={`absolute top-3 right-3 z-20 p-2 rounded-full shadow-md ${
                isInWishlist(product, product.brand, "kurti")
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              <FaHeart size={14} />
            </button>

            <div className="relative w-full aspect-[2/3] overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setQuickView(product);
                  setActiveIndex(0);
                  setQuantity(1);
                }}
                className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition"
              >
                <span className="px-6 py-2 text-sm text-white border border-white">
                  Quick View
                </span>
              </button>
            </div>

            <div className="mt-3 text-center">
              <h3 className="text-sm font-semibold truncate">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </section>

      {/* 🔲 QUICK VIEW MODAL */}
      {quickView &&
        (() => {
          const previewImages = getPreviewImages(quickView);

          return (
            <div className="fixed inset-0 z-50 bg-black/50 overflow-y-auto">
              <div className="relative top-[110px] pb-20 flex justify-center px-4">
                {/* CARD */}
                <div className="bg-white w-full max-w-6xl relative">
                  {/* ✅ ALLOVER STYLE CROSS BUTTON */}
                  <button
                    onClick={() => setQuickView(null)}
                    className="absolute -top-5 -right-5 z-30
                               w-10 h-10 flex items-center justify-center
                               bg-white border rounded-full shadow-lg
                               text-xl text-gray-700
                               hover:bg-black hover:text-white transition"
                  >
                    ✕
                  </button>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* LEFT */}
                    <div className="px-8 pt-16 pb-10">
                      <img
                        src={previewImages[activeIndex]}
                        alt={quickView.name}
                        className="w-full max-h-[70vh] object-contain mx-auto"
                      />

                      <div className="flex justify-center gap-4 mt-6">
                        {previewImages.map((img, i) => (
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

                    {/* RIGHT */}
                    {/* RIGHT CONTENT */}
                    <div className="px-8 pt-16 pb-10">
                      {/* NAME */}
                      <h2 className="text-3xl font-light mb-4">
                        {quickView.name}
                      </h2>

                      {/* PRICE */}
                      {quickView.price && (
                        <p className="text-xl text-gray-700 mb-4">
                          {quickView.price}
                        </p>
                      )}

                      {/* FABRIC */}
                      {quickView.fabric && (
                        <div className="mb-4">
                          <p className="text-sm text-gray-600 mb-1">Fabric</p>
                          {Array.isArray(quickView.fabric) ? (
                            <ul className="list-disc list-inside text-sm text-gray-500">
                              {quickView.fabric.map((f, i) => (
                                <li key={i}>{f}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-gray-500">
                              {quickView.fabric}
                            </p>
                          )}
                        </div>
                      )}

                      {/* SIZE */}
                      {quickView.size && (
                        <div className="mb-4">
                          <p className="text-sm text-gray-600 mb-1">Size</p>
                          <p className="text-sm text-gray-500">
                            {quickView.size}
                          </p>
                        </div>
                      )}

                      {/* COLOR */}
                      {quickView.color && (
                        <div className="mb-4">
                          <p className="text-sm text-gray-600 mb-1">Color</p>
                          <span className="border px-6 py-3 inline-block text-sm">
                            {quickView.color}
                          </span>
                        </div>
                      )}

                      {/* DESCRIPTION */}
                      {quickView.description && (
                        <div className="mb-6">
                          <p className="text-sm text-gray-600 mb-1">
                            Description
                          </p>
                          <p className="text-sm text-gray-500 leading-relaxed">
                            {quickView.description}
                          </p>
                        </div>
                      )}

                      {/* FEATURES */}
                      {quickView.features && (
                        <div className="mb-6">
                          <p className="text-sm text-gray-600 mb-1">Features</p>
                          <ul className="list-disc list-inside text-sm text-gray-500">
                            {quickView.features.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* CARE INSTRUCTIONS */}
                      {quickView.careInstructions && (
                        <div className="mb-6">
                          <p className="text-sm text-gray-600 mb-1">
                            Care Instructions
                          </p>
                          <p className="text-sm text-gray-500">
                            {quickView.careInstructions}
                          </p>
                        </div>
                      )}

                      {/* PERFECT FOR */}
                      {quickView.perfectFor && (
                        <div className="mb-10">
                          <p className="text-sm text-gray-600 mb-1">
                            Perfect For
                          </p>
                          <p className="text-sm text-gray-500">
                            {quickView.perfectFor}
                          </p>
                        </div>
                      )}

                      {/* QUANTITY */}
                      <div className="mb-10">
                        <p className="text-sm text-gray-600 mb-2">Quantity</p>
                        <div className="flex border w-fit">
                          <button
                            className="px-5 py-3"
                            onClick={() =>
                              quantity > 1 && setQuantity(quantity - 1)
                            }
                          >
                            −
                          </button>
                          <span className="px-6 py-3">{quantity}</span>
                          <button
                            className="px-5 py-3"
                            onClick={() => setQuantity(quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
    </>
  );
};

export default KurtiCollection;
