import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaHeart,
  FaPlus,
  FaMinus,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";
import { useCart } from "../../context/CartContext.jsx";
import { useWishlist } from "../../context/WishlistContext.jsx";
import { products } from "../../data/Kurti.js";

const KurtiProducts = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = products.find((p) => p.id === productId);

  const { toggleWishlist, isInWishlist, setIsSidebarOpen } = useWishlist();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isModalOpen]);

  if (!product) {
    return <div className="p-6 text-center">Product not found</div>;
  }

  const handleWishlist = (e) => {
    e.stopPropagation();
    toggleWishlist(product, product.brand, "kurti");
    setIsSidebarOpen(false);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    for (let i = 0; i < quantity; i++) {
      addToCart(product, product.brand, "kurti");
    }
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
          <div className="relative bg-white w-full max-w-6xl rounded-lg shadow-lg md:flex">
            {/* ❌ CLOSE BUTTON SAME AS EMBROIDERY */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-5 -right-5 z-50 w-11 h-11 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
            >
              <FaTimes size={18} />
            </button>

            {/* LEFT: Image */}
            <div className="px-8 pt-16 pb-10 md:w-1/2 flex justify-center items-center bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>

            {/* RIGHT: Content */}
            <div className="px-8 pt-16 pb-10 md:w-1/2 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-light tracking-wide mb-4">
                  {product.name}
                </h2>

                <button
                  onClick={handleWishlist}
                  className={`p-3 rounded-full ${
                    isInWishlist(product, product.brand, "kurti")
                      ? "bg-red-500 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <FaHeart />
                </button>
              </div>

              {product.price && (
                <p className="text-xl text-gray-700 mb-6">{product.price}</p>
              )}

              {product.fabric && (
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">Fabric</p>
                  <p className="text-sm text-gray-600">{product.fabric}</p>
                </div>
              )}

              {product.size && (
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">Size</p>
                  <div className="flex gap-2 flex-wrap">
                    {product.size.split("&").map((s, i) => (
                      <button
                        key={i}
                        className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
                      >
                        {s.trim()}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {product.color && (
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">Color</p>
                  <span className="inline-block border px-6 py-3 text-sm text-gray-600">
                    {product.color || "Crimson Red"}
                  </span>
                </div>
              )}

              {product.description && (
                <div className="mb-8">
                  <p className="text-sm text-gray-500 mb-1">Description</p>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-[420px]">
                    {product.description}
                  </p>
                </div>
              )}

              {/* Quantity + Add to Cart */}
              <div className="mb-10 flex gap-4 items-center">
                <div className="flex border w-fit text-gray-600">
                  <button
                    className="px-5 py-3"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
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

                <button
                  onClick={handleAddToCart}
                  className="flex items-center justify-center gap-2 px-6 py-3 text-white bg-black rounded hover:bg-black/90"
                >
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KurtiProducts;
