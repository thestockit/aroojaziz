import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaTimes } from "react-icons/fa";
import { useCart } from "../../context/CartContext.jsx";
import { useWishlist } from "../../context/WishlistContext.jsx";
import { getProducts } from "../../data/Embroidery.js";

const EmbroideryProducts = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);

  const products = getProducts();
  const product = products.find((p) => p.id === productId);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // BODY SCROLL LOCK
  useEffect(() => {
    document.body.style.overflow = product ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [product]);

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  const images =
    product.images && product.images.length
      ? product.images.slice(0, 3)
      : [product.image, product.image, product.image];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, product.brand, "embroidery");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 overflow-y-auto">
      <div className="relative top-[110px] pb-20 flex justify-center px-4">
        {/* 🔴 IMPORTANT: relative */}
        <div className="bg-white w-full max-w-6xl relative">
          {/* ❌ CLOSE BUTTON (SAME AS SHOP) */}
          <button
            onClick={() => window.history.back()}
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
            {/* LEFT IMAGE SECTION */}
            <div className="px-8 pt-16 pb-10">
              <img
                src={images[activeIndex]}
                alt={product.name}
                className="w-full max-h-[70vh] object-contain mx-auto"
              />

              {/* THUMBNAILS */}
              <div className="flex justify-center gap-4 mt-6">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setActiveIndex(i)}
                    className={`w-24 h-32 object-cover cursor-pointer border ${
                      activeIndex === i ? "border-black" : "border-gray-300"
                    }`}
                    alt="thumb"
                  />
                ))}
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="px-8 pt-16 pb-10">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-light tracking-wide mb-4">
                  {product.name}
                </h2>

                <button
                  onClick={() =>
                    toggleWishlist(product, product.brand, "embroidery")
                  }
                  className={`p-3 rounded-full ${
                    isInWishlist(product, product.brand, "embroidery")
                      ? "bg-red-500 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <FaHeart />
                </button>
              </div>

              <p className="text-xl text-gray-700 mb-8">{product.price}</p>

              {/* COLOR */}
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Color</p>
                <span className="inline-block border px-6 py-3 text-sm">
                  {product.color}
                </span>
              </div>

              {/* DESCRIPTION */}
              <div className="mb-8">
                <p className="text-sm text-gray-600 mb-2">Description</p>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[420px]">
                  {product.description}
                </p>
              </div>

              {/* QUANTITY */}
              <div className="mb-10">
                <p className="text-sm text-gray-600 mb-2">Quantity</p>
                <div className="flex border w-fit">
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
              </div>

              {/* BUTTONS */}
              <button
                onClick={handleAddToCart}
                className="w-full border py-4 mb-4 tracking-wide"
              >
                ADD TO CART
              </button>

              <button className="w-full bg-black text-white py-4 tracking-wide">
                BUY IT NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmbroideryProducts;
