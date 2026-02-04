import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext.jsx";
import { products } from "../../data/Kids.js";

const KidsCollection = () => {
  const navigate = useNavigate();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [quickView, setQuickView] = useState(null);

  return (
    <>
      {/* PRODUCTS GRID */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-[5%]">

        {products.map((product) => (
          <div
            key={product.id}
            onClick={() =>
              navigate(`/chahatcollection/kids/suit/${product.id}`)
            }
            className="relative group cursor-pointer"
          >
            {/* ❤️ Wishlist */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleWishlist(product, product.brand, "kids");
              }}
              className={`absolute top-3 right-3 z-30 p-2 rounded-full shadow ${
                isInWishlist(product, product.brand, "kids")
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              <FaHeart size={14} />
            </button>

            {/* IMAGE */}
            <div className="w-full aspect-[2/3] bg-gray-100 overflow-hidden rounded-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
            </div>

            {/* QUICK VIEW BUTTON (ALL PRODUCTS) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setQuickView(product);
              }}
              className="
                absolute inset-0 flex items-center justify-center
                bg-black/30
                opacity-100 md:opacity-0 md:group-hover:opacity-100
                transition
              "
            >
              <span className="border border-white text-white px-4 py-2 text-sm">
                Quick View
              </span>
            </button>

            {/* INFO */}
            <div className="mt-3 text-center">
              <h3 className="text-sm font-semibold truncate">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </section>

      {/* QUICK VIEW MODAL */}
      {quickView && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="relative bg-white max-w-md w-full rounded-lg overflow-hidden">

            <button
              onClick={() => setQuickView(null)}
              className="absolute top-3 right-3 text-xl"
            >
              ✕
            </button>

            <div className="aspect-[2/3] bg-gray-100">
              <img
                src={quickView.image}
                alt={quickView.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 text-center">
              <h2 className="font-semibold">{quickView.name}</h2>
              <p className="text-gray-600 mt-1">{quickView.price}</p>

              <button
                onClick={() =>
                  navigate(`/chahatcollection/kids/suit/${quickView.id}`)
                }
                className="mt-4 w-full py-3 border border-black hover:bg-black hover:text-white transition"
              >
                View Full Details
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KidsCollection;
