import React, { useState, useEffect } from "react";
import { FaHeart, FaTimes } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";
import { products } from "../data/Kids";

const KidsCollection = () => {
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [quickView, setQuickView] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // 🔒 BODY SCROLL LOCK
  useEffect(() => {
    document.body.style.overflow = quickView ? "hidden" : "auto";
  }, [quickView]);

  // 🔁 SAME IMAGE HANDLING
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

  return (
    <>
      {/* TITLE */}
      <div className="px-4 py-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold">RANG E ISHQ</h1>
      </div>

      {/* PRODUCTS GRID */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-[5%]">
        {products.map((product) => (
          <div key={product.id} className="relative group">
            {/* WISHLIST */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleWishlist(product, product.brand, "kids");
              }}
              className={`absolute top-3 right-3 z-20 p-2 rounded-full shadow ${
                isInWishlist(product, product.brand, "kids")
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              <FaHeart size={14} />
            </button>

            {/* IMAGE */}
            <div className="relative aspect-[2/3] bg-gray-100 overflow-hidden">
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
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition"
              >
                <span className="border border-white text-white px-5 py-2 text-sm">
                  Quick View
                </span>
              </button>
            </div>

            {/* INFO */}
            <div className="mt-3 text-center">
              <h3 className="text-sm font-semibold truncate">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </section>

      {/* QUICK VIEW MODAL */}
      {quickView &&
        (() => {
          const previewImages = getPreviewImages(quickView);

          return (
            <div className="fixed inset-0 z-50 bg-black/50 overflow-y-auto">
              <div className="relative top-[120px] pb-24 flex justify-center px-4">
                <div className="bg-white w-full max-w-6xl relative">
                  {/* CLOSE BUTTON */}
                  <button
                    onClick={() => setQuickView(null)}
                    className="absolute top-6 right-6
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
                    <div className="px-8 pt-20 pb-10">
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
                    <div className="px-8 pt-20 pb-10">
                      <h2 className="text-3xl font-light mb-4">
                        {quickView.name}
                      </h2>

                      <p className="text-xl text-gray-700 mb-8">
                        {quickView.price}
                      </p>

                      {/* Color */}
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">Color</p>
                        <span className="border px-6 py-3 inline-block text-sm">
                          {quickView.color || "Crimson Red"}
                        </span>
                      </div>

                      {/* Fabric */}
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">Fabric</p>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {quickView.fabric
                            ? Array.isArray(quickView.fabric)
                              ? quickView.fabric.map((f, i) => (
                                  <span key={i}>
                                    {f}
                                    <br />
                                  </span>
                                ))
                              : quickView.fabric
                            : "N/A"}
                        </p>
                      </div>

                      {/* Description */}
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">
                          Description
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed max-w-[420px]">
                          {quickView.colorDesign || quickView.description}
                        </p>
                      </div>

                      {/* Customization */}
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">
                          Customization
                        </p>
                        <p className="text-sm text-gray-500">
                          {quickView.customization ||
                            "For Customization please contact our Fashion consultant."}
                        </p>
                      </div>

                      {/* Note */}
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">Note</p>
                        <p className="text-sm text-gray-500">
                          {quickView.note ||
                            "Please note that the color of the item you receive may vary slightly from that shown in the product shoot. This can happen due to the variation in light at the time of product and fashion shoot."}
                        </p>
                      </div>

                      {/* Shipping */}
                      <div className="mb-8">
                        <p className="text-sm text-gray-600 mb-2">
                          Shipping Time
                        </p>
                        <p className="text-sm text-gray-500">
                          {quickView.shippingTime || "3 to 4 Months"}
                        </p>
                      </div>

                      {/* Quantity */}
                      <div className="mb-10">
                        <p className="text-sm text-gray-600 mb-2">Quantity</p>
                        <div className="flex border w-fit">
                          <button
                            className="px-5 py-3"
                            onClick={() =>
                              setQuantity((q) => Math.max(1, q - 1))
                            }
                          >
                            −
                          </button>
                          <span className="px-6 py-3">{quantity}</span>
                          <button
                            className="px-5 py-3"
                            onClick={() => setQuantity((q) => q + 1)}
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

export default KidsCollection;
