import React from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { products } from "../data/Kurti.js";

const KurtiCollection = () => {
  const navigate = useNavigate();
  const { toggleWishlist, isInWishlist, setIsSidebarOpen } = useWishlist();

  const handleProductClick = (id) => {
    navigate(`/chahatcollection/kurti&trouser/suit/${id}`);
  };

  return (
    <>
      {/* Heading */}
      <div className="px-4 py-6 text-center">
        <h1 className="text-3xl sm:text-4xl text-black font-semibold">
          Best Luxury Dresses - WANIA
        </h1>
      </div>

      {/* Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-[5%]">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product.id)}
            className="relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer group"
          >
            {/* Wishlist */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleWishlist(product, product.brand, "3PC");
                setIsSidebarOpen(false);
              }}
              className={`absolute top-4 right-4 z-20 p-2 rounded-full shadow ${
                isInWishlist(product, product.brand, "3PC")
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              <FaHeart size={18} />
            </button>

            {/* Image */}
            <div className="overflow-hidden aspect-[4/5]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Info */}
            <div className="p-4 text-center space-y-1">
              <h3 className="text-base font-semibold">{product.name}</h3>

              <p className="text-sm text-gray-500">{product.brand}</p>

              <p className="text-sm font-medium text-black">{product.price}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default KurtiCollection;
