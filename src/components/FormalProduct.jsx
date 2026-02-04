// src/components/ProductPages/FormalProducts.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaTimes } from "react-icons/fa";
import { useCart } from "../../context/CartContext.jsx";
import { useWishlist } from "../../context/WishlistContext.jsx";
import { getProducts } from "../../data/formalProducts"; // ✅ Formal products

const FormalProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const productId = parseInt(id, 10);

  const products = getProducts();
  const product = products.find((p) => p.id === productId);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isModalOpen]);

  if (!product) {
    return <div className="p-6 text-center">Product not found</div>;
  }

  const handleWishlist = (e) => {
    e.stopPropagation();
    toggleWishlist(product, product.brand, "formal");
  };

  const handleAddToCart = () => {
    addToCart(product, product.brand, "formal");
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="max-w-7xl px-4 py-8 mx-auto">
        {/* ================= MAIN PRODUCT ================= */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div
              className="w-full aspect-[3.5/5] overflow-hidden rounded-lg bg-gray-100 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <button
              onClick={handleWishlist}
              className={`absolute top-4 right-4 p-3 rounded-full shadow-md ${
                isInWishlist(product, product.brand, "formal")
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              <FaHeart size={18} />
            </button>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">{product.name}</h1>

            <p>
              <strong>Fabric:</strong> {product.fabric || "N/A"}
            </p>

            <p>
              <strong>Size:</strong> {product.size || "N/A"}
            </p>

            <p>
              <strong>Color & Design:</strong> {product.colorDesign || "N/A"}
            </p>

            <p className="text-xl font-semibold">{product.price}</p>

            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center gap-2 px-6 py-3 text-white bg-black rounded hover:bg-black/90"
            >
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        </div>

        {/* ================= SIMILAR PRODUCTS ================= */}
        <div className="mt-16">
          <h2 className="mb-6 text-xl font-bold">You may also like</h2>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {products
              .filter((p) => p.id !== productId)
              .slice(0, 10)
              .map((item) => (
                <div
                  key={item.id}
                  onClick={() => navigate(`/shop/formal/${item.id}`)}
                  className="relative cursor-pointer group rounded-lg overflow-hidden transition hover:shadow-md"
                >
                  {/* Wishlist */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(item, item.brand, "formal");
                    }}
                    className={`absolute top-3 right-3 z-20 p-2 rounded-full shadow ${
                      isInWishlist(item, item.brand, "formal")
                        ? "bg-red-500 text-white"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    <FaHeart size={14} />
                  </button>

                  {/* Image */}
                  <div className="aspect-[3.5/5] overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-3 text-center">
                    <h3 className="text-sm font-semibold line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">{item.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative w-full max-w-3xl bg-white rounded-lg overflow-hidden flex flex-col md:flex-row">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 z-10"
            >
              <FaTimes size={22} />
            </button>

            <div className="md:w-1/2 flex items-center justify-center bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[80vh] object-contain"
              />
            </div>

            <div className="md:w-1/2 p-6 space-y-4">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p>{product.price}</p>

              <button
                onClick={handleAddToCart}
                className="flex items-center justify-center w-full gap-2 px-6 py-3 text-white bg-black rounded"
              >
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormalProducts;
