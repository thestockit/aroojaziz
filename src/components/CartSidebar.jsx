import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { FaTimes, FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartSidebar = () => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    isCartOpen,
    setIsCartOpen,
    cartTotal,
  } = useCart();

  const navigate = useNavigate();

   useEffect(() => {
      if (isCartOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";   
      }
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [isCartOpen]);


  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full max-h-screen bg-white shadow-lg transform transition-transform duration-300 z-50 flex flex-col 
        w-full sm:w-96 
        ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between flex-shrink-0 p-4 border-b">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button
          onClick={() => setIsCartOpen(false)}
          className="p-2 rounded hover:bg-gray-100"
        >
          <FaTimes />
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 p-4 overflow-y-auto">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="mb-4 text-gray-500">Your cart is empty.</p>
            <button
              onClick={() => {
                setIsCartOpen(false);
                // navigate("/shop");
              }}
              className="px-4 py-2 text-white bg-black rounded hover:bg-blackShade"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.uniqueKey}
              className="flex items-center justify-between pb-2 mb-4 border-b"
            >
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-16 h-16 rounded"
              />
              <div className="flex-1 ml-4">
                <h4 className="font-semibold line-clamp-1">{item.name}</h4>
                <p className="text-xs text-gray-500">{item.brand}</p>
                <p className="text-sm text-gray-500">
                  Rs {item.price.toLocaleString()} x {item.quantity}
                </p>

                {/* Qty controls */}
                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() =>
                      decreaseQty(item.id, item.brand, item.source)
                    }
                    className="p-1 border rounded hover:bg-gray-100"
                  >
                    <FaMinus size={12} />
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() =>
                      increaseQty(item.id, item.brand, item.source)
                    }
                    className="p-1 border rounded hover:bg-gray-100"
                  >
                    <FaPlus size={12} />
                  </button>
                </div>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeFromCart(item.id, item.brand, item.source)}
                className="p-2 text-red-500 rounded hover:bg-red-100"
              >
                <FaTrash />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {cartItems.length > 0 && (
        <div className="flex-shrink-0 p-4 border-t">
          <div className="flex justify-between mb-3 font-semibold">
            <span>Total:</span>
            <span>Rs {cartTotal.toLocaleString()}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full py-2 text-white bg-black rounded hover:bg-blackShade"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
