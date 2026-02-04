import React, { useState, useEffect } from "react";
import { FaHeart, FaTimes } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";
import { products } from "../data/Shop";

const ShopPage = () => {
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [quickView, setQuickView] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // BODY SCROLL LOCK
  useEffect(() => {
    document.body.style.overflow = quickView ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [quickView]);

  // FIXED 3 IMAGES
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
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide">
          BRIDAL
        </h1>
      </div>

      {/* PRODUCT GRID */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-[5%]">
        {products.map((product) => (
          <div key={product.id} className="relative group">
            {/* WISHLIST */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleWishlist(product, product.brand, "shop");
              }}
              className={`absolute top-3 right-3 z-20 p-2 rounded-full ${
                isInWishlist(product, product.brand, "shop")
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              <FaHeart size={14} />
            </button>

            {/* PRODUCT IMAGE */}
            <div className="aspect-[2/3] bg-gray-100 overflow-hidden relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              <button
                onClick={() => {
                  setQuickView(product);
                  setActiveIndex(0);
                  setQuantity(1);
                }}
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition"
              >
                <span className="border border-white text-white px-5 py-2">
                  Quick View
                </span>
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* QUICK VIEW MODAL */}
      {quickView && (
        <div className="fixed inset-0 z-50 bg-black/50 overflow-y-auto">
          <div className="relative top-[100px] pb-20 flex justify-center px-4">
            {/* 🔴 IMPORTANT: relative added */}
            <div className="bg-white w-full max-w-6xl relative">
              {/* ❌ CLOSE BUTTON (FIXED & VISIBLE) */}
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
                {/* LEFT */}
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
                <div className="px-8 pt-16 pb-10 space-y-4">
                  <h2 className="text-3xl font-light mb-2">{quickView.name}</h2>

                  <div>
                    <p className="text-sm text-gray-600 mb-1">Color</p>
                    <span className="border px-6 py-2 text-sm">
                      {quickView.color}
                    </span>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-1">Fabric Details</p>
                    <ul className="list-disc list-inside text-sm text-gray-500">
                      <li>
                        <strong>Shirt:</strong> {quickView.shirtFabric}
                      </li>
                      <li>
                        <strong>Gharara:</strong> {quickView.ghararaFabric}
                      </li>
                      <li>
                        <strong>Head Dupatta:</strong> {quickView.headDupatta}
                      </li>
                      <li>
                        <strong>Shoulders Dupatta:</strong>{" "}
                        {quickView.shouldersDupatta}
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-1">Description</p>
                    <p className="text-sm text-gray-500">
                      {quickView.description}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-1">Customization</p>
                    <p className="text-sm text-gray-500">
                      {quickView.customization}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-1">Note</p>
                    <p className="text-sm text-gray-500">{quickView.note}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-1">Shipping Time</p>
                    <p className="text-sm text-gray-500">
                      {quickView.shippingTime}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-1">Features</p>
                    <ul className="list-disc list-inside text-sm text-gray-500">
                      {quickView.features.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-sm">
                    <strong>Care Instructions:</strong>{" "}
                    {quickView.careInstructions}
                  </p>

                  <p className="text-sm">
                    <strong>Perfect For:</strong> {quickView.perfectFor}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShopPage;
