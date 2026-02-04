// CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth?.() || { user: null };

  // Load cart from localStorage on first render
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  const getUniqueKey = (id, brand, source) => `${id}-${brand}-${source}`;

  // Ensure price is numeric
  const parsePrice = (price) =>
    Number(price.toString().replace(/[^0-9.-]+/g, ""));

  // ✅ Add product to cart
  const addToCart = (product, brand, source = "default") => {
    const uniqueKey = getUniqueKey(product.id, brand, source);
    const numericPrice = parsePrice(product.price);

    setCartItems((prev) => {
      const existing = prev.find((item) => item.uniqueKey === uniqueKey);

      if (existing) {
        return prev.map((item) =>
          item.uniqueKey === uniqueKey
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          brand,
          source,
          price: numericPrice,
          quantity: 1,
          uniqueKey,
        },
      ];
    });

    setIsCartOpen(true); // auto-open cart when an item is added
  };

  // ✅ Remove product from cart
  const removeFromCart = (id, brand, source = "default") => {
    const uniqueKey = getUniqueKey(id, brand, source);
    setCartItems((prev) => prev.filter((item) => item.uniqueKey !== uniqueKey));
  };

  // ✅ Increase quantity
  const increaseQty = (id, brand, source = "default") => {
    const uniqueKey = getUniqueKey(id, brand, source);
    setCartItems((prev) =>
      prev.map((item) =>
        item.uniqueKey === uniqueKey
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ✅ Decrease quantity
  const decreaseQty = (id, brand, source = "default") => {
    const uniqueKey = getUniqueKey(id, brand, source);
    setCartItems((prev) =>
      prev.map((item) =>
        item.uniqueKey === uniqueKey
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  // ✅ Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ Calculate total price
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        isCartOpen,
        setIsCartOpen,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
