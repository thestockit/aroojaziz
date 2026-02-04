import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { products } from "../../data/3pc";

const ThreePcProducts = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = products.find((p) => p.id === productId);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className="p-6 text-center">Product not found</div>;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, product.brand, "3pc");
    }
  };

  return (
    <div className="px-4 py-10 mx-auto max-w-7xl">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[520px] object-cover"
          />

          <button
            onClick={() => toggleWishlist(product, product.brand, "3pc")}
            className={`absolute top-4 right-4 p-3 rounded-full ${
              isInWishlist(product, product.brand, "3pc")
                ? "bg-red-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            <FaHeart />
          </button>
        </div>

        {/* Details */}
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p className="text-xl font-bold">{product.price}</p>

          <div>
            <h3 className="font-semibold">Fabric:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {product.fabric.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <p>
            <strong>Size:</strong> {product.size}
          </p>

          <p className="text-gray-600">{product.colorDesign}</p>

          <div>
            <h3 className="font-semibold">Features:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {product.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          <p>
            <strong>Care:</strong> {product.careInstructions}
          </p>

          <p>
            <strong>Perfect For:</strong> {product.perfectFor}
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="border px-3 py-2"
            >
              <FaMinus />
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="border px-3 py-2"
            >
              <FaPlus />
            </button>
          </div>

          {/* Cart */}
          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-black text-white"
          >
            <FaShoppingCart className="inline mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreePcProducts;
