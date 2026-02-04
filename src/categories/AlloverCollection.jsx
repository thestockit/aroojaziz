import React, { useState, useEffect } from "react";
import { FaHeart, FaTimes } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";
import { products } from "../data/Allover";

const AlloverCollection = () => {
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [quickView, setQuickView] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // BODY SCROLL LOCK
  useEffect(() => {
    document.body.style.overflow = quickView ? "hidden" : "auto";
  }, [quickView]);

  // SAME IMAGE LOGIC
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
      {/* GRID */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-[5%]">
        {products.map((product) => (
          <div key={product.id} className="relative group">
            {/* ❤️ WISHLIST */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleWishlist(product, product.brand, "allover");
              }}
              className={`absolute top-3 right-3 z-20 p-2 rounded-full shadow ${
                isInWishlist(product, product.brand, "allover")
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              <FaHeart size={14} />
            </button>

            {/* IMAGE */}
            <div className="aspect-[2/3] bg-gray-100 overflow-hidden relative">
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
                  setQuantity(1);
                }}
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100
                           flex items-center justify-center transition"
              >
                <span className="border border-white text-white px-5 py-2">
                  Quick View
                </span>
              </button>
            </div>

            {/* INFO */}
            <div className="mt-2 text-center">
              <h3 className="text-sm font-semibold truncate">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </section>

      {quickView && (
        <div className="fixed inset-0 z-50 bg-black/50 overflow-y-auto">
          <div className="relative top-[110px] pb-20 flex justify-center px-4">
            {/* 🔴 RELATIVE REQUIRED */}
            <div className="bg-white w-full max-w-6xl relative">
              {/* ❌ CLOSE BUTTON — SAME AS SHOP PAGE */}
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
                <div className="px-8 pt-16 pb-10">
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
                          activeIndex === i ? "border-black" : "border-gray-300"
                        }`}
                        alt=""
                      />
                    ))}
                  </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="px-8 pt-16 pb-10">
                  {/* NAME */}
                  <h2 className="text-3xl font-light mb-4">{quickView.name}</h2>

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
                      <p className="text-sm text-gray-500">{quickView.size}</p>
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
                      <p className="text-sm text-gray-600 mb-1">Description</p>
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
                      <p className="text-sm text-gray-600 mb-1">Perfect For</p>
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
      )}
    </>
  );
};

export default AlloverCollection;
