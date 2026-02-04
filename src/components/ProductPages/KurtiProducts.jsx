import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
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
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";


const KurtiProducts = () => {
  const scrollRef = useRef(null);
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const product = products.find((p) => p.id === productId);
  const { toggleWishlist, isInWishlist, setIsSidebarOpen } = useWishlist();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = React.useState(1);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
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
      <div className="px-4 py-8 mx-auto max-w-7xl">
        {/* 🔹 Main Product Section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left: Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-auto rounded-lg shadow-md"
              onClick={() => setIsModalOpen(true)}
            />
            <button
              onClick={handleWishlist}
              className={`absolute top-4 right-4 p-3 rounded-full shadow-md transition ${
                isInWishlist(product, product.brand, "ScentNStories")
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              <FaHeart size={20} />
            </button>
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col justify-between">
            <div className="space-y-3">
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <p className="text-gray-500">
                <span className="font-bold text-black">Fabric:</span>{" "}
                {product.fabric}
              </p>
              <p className="text-gray-500">
                <span className="font-bold text-black">Size:</span>{" "}
                {product.brand}
              </p>
              <p className="text-gray-500">
                <span className="font-bold text-black">Color & Design:</span>{" "}
                {product.colorDesign}
              </p>
              <p className="text-xl font-semibold">{product.price}</p>

              {/* Features */}
              {product.features && (
                <div className="mt-4">
                  <h2 className="mb-2 text-lg font-bold">Features:</h2>
                  <ul className="space-y-1 text-gray-600 list-disc list-inside marker:text-black">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="mt-2 text-gray-600">
                <span className="font-bold text-black">Care Instructions:</span>{" "}
                {product.careInstructions}
              </p>
              <p className="mt-1 text-gray-600">
                <span className="font-bold text-black">Perfect For:</span>{" "}
                {product.perfectFor}
              </p>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex flex-col gap-4 mt-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <button
                  className="px-3 py-2 border rounded hover:bg-gray-100"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  <FaMinus size={12} />
                </button>
                <span className="px-3">{quantity}</span>
                <button
                  className="px-3 py-2 border rounded hover:bg-gray-100"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  <FaPlus size={12} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex items-center justify-center gap-2 px-6 py-3 text-white bg-black rounded hover:bg-blackShade"
              >
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        </div>
        {/* 🔹 Similar Products Section */}
        <div className="mt-16">
          <h2 className="mb-6 text-xl font-bold">You may also like</h2>

          {/* Container with arrows */}
          <div className="relative">
            {/* 🔹 Scrollable Products */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto md:grid md:grid-cols-4 md:gap-6 scrollbar-hide scroll-smooth"
            >
              {products
                .filter((p) => p.id !== productId)
                .slice(0, 8)
                .map((item) => (
                  <Link
                    to={`/chahatcollection/kurti&trouser/suit/${item.id}`}
                    key={item.id}
                    className="w-[240px] sm:w-[260px] md:w-auto flex-shrink-0 p-3 border rounded-lg hover:shadow-lg transition"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover w-full h-56 rounded"
                    />
                    <h3 className="mt-2 text-sm font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.price}</p>
                  </Link>
                ))}
            </div>

            {/* 🔹 Arrows bottom-center (sirf small screens) */}
            <div className="flex items-center justify-center gap-6 mt-4 md:hidden">
              <button
                onClick={() => (scrollRef.current.scrollLeft -= 250)}
                className="p-2 bg-white rounded-full shadow-md"
              >
                <FaLongArrowAltLeft />
              </button>
              <button
                onClick={() => (scrollRef.current.scrollLeft += 250)}
                className="p-2 bg-white rounded-full shadow-md"
              >
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 🔹 Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="relative flex flex-col w-full max-w-3xl overflow-hidden bg-white rounded-lg shadow-lg md:flex-row">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute text-gray-600 top-3 right-3 hover:text-black"
            >
              <FaTimes size={22} />
            </button>

            {/* Left: Image */}
            <div className="flex items-center justify-center w-full bg-gray-100 md:w-1/2">
              <img
                src={product.image}
                alt={product.name}
                className="object-contain w-full max-h-[70vh]"
              />
            </div>

            {/* Right: Details */}
            <div className="flex flex-col justify-between w-full p-6 overflow-auto md:w-1/2">
              {/* Product Info */}
              <div className="space-y-3">
                <h2 className="text-lg font-bold sm:text-xl">{product.name}</h2>
                <p className="text-sm text-gray-600 sm:text-base">
                  <span className="font-bold">Brand:</span> {product.brand}
                </p>
                <p className="text-sm text-gray-600 sm:text-base">
                  <span className="font-bold">Price:</span> {product.price}
                </p>
                <p className="text-sm text-gray-600 sm:text-base">
                  <span className="font-bold">Fabric:</span> {product.fabric}
                </p>
              </div>

              {/* Quantity + Add to Cart */}
              <div className="flex flex-col gap-4 mt-6 sm:flex-row sm:items-center">
                {/* Quantity */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    className="px-3 py-2 border rounded hover:bg-gray-100"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    <FaMinus size={12} />
                  </button>
                  <span className="px-3">{quantity}</span>
                  <button
                    className="px-3 py-2 border rounded hover:bg-gray-100"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    <FaPlus size={12} />
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  className="flex items-center justify-center w-full gap-2 px-6 py-3 text-white bg-black rounded hover:bg-blackShade sm:w-auto"
                >
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
       {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/923108067450`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M20.52 3.48A11.91 11.91 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.15 1.59 5.95L0 24l6.22-1.63A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.92 9.92 0 01-5.06-1.38l-.36-.21-3.69.96.99-3.6-.23-.37A9.93 9.93 0 012 12C2 6.48 6.48 2 12 2c2.66 0 5.17 1.04 7.07 2.93A9.92 9.92 0 0122 12c0 5.52-4.48 10-10 10zm5.1-7.4c-.28-.14-1.65-.81-1.91-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.08-.17.19-.35.21-.63.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.56-1.93-.17-.28-.02-.43.13-.57.13-.13.28-.35.42-.52.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.1-.23-.56-.47-.48-.64-.49-.17 0-.37-.01-.57-.01-.2 0-.53.07-.81.35-.28.28-1.07 1.04-1.07 2.54s1.1 2.94 1.26 3.14c.16.21 2.16 3.3 5.23 4.63.73.31 1.3.49 1.74.62.73.23 1.39.2 1.91.12.58-.09 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33z" />
        </svg>
      </a>
    </>
  );
};

export default KurtiProducts;
