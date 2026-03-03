import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaTimes } from "react-icons/fa";
import { useCart } from "../../context/CartContext.jsx";
import { useWishlist } from "../../context/WishlistContext.jsx";
import { products } from "../../data/Allover.js"; // ✅ Correct import

const AllOverProducts = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id); // ✅ safer

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist, setIsSidebarOpen } = useWishlist();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isModalOpen]);

  if (!product) return <div className="p-6 text-center">Product not found</div>;

  const handleWishlist = (e) => {
    e.stopPropagation();
    toggleWishlist(product, product.brand, "allover");
    setIsSidebarOpen(false);
  };

  const handleAddToCart = () => {
    addToCart(product, product.brand, "allover");
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="max-w-7xl px-4 py-8 mx-auto">
        {/* Main Product */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full rounded-lg shadow-md cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            />
            <button
              onClick={handleWishlist}
              className={`absolute top-4 right-4 p-3 rounded-full shadow-md ${
                isInWishlist(product, product.brand, "allover")
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              <FaHeart size={18} />
            </button>
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p>
              <span className="font-semibold">Fabric:</span> {product.fabric}
            </p>
            <p>
              <span className="font-semibold">Size:</span> {product.brand}
            </p>
            <p>
              <span className="font-semibold">Color & Design:</span>{" "}
              {product.colorDesign}
            </p>
            <p className="text-xl font-semibold">{product.price}</p>
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center gap-2 px-6 py-3 text-white bg-black rounded hover:bg-blackShade"
            >
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-16">
          <h2 className="mb-6 text-xl font-bold">You may also like</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {products
              .filter((p) => p.id.toString() !== id)
              .slice(0, 10)
              .map((item) => (
                <Link
                  to={`/chahatcollection/allover/suit/${item.id}`}
                  key={item.id}
                  className="group"
                >
                  <div className="overflow-hidden border rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover w-full h-[320px] transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="p-3 text-center">
                      <h3 className="text-sm font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative w-full max-w-3xl bg-white rounded-lg overflow-hidden flex flex-col md:flex-row">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3"
            >
              <FaTimes size={22} />
            </button>

            <div className="md:w-1/2 bg-gray-100 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="object-contain max-h-[70vh]"
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

export default AllOverProducts;
