// src/context/WishlistContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  // ✅ Initialize wishlist from localStorage (runs only once)
  const [wishlist, setWishlist] = useState(() => {
    try {
      const stored = localStorage.getItem("wishlist");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("Failed to parse wishlist from localStorage", e);
      return [];
    }
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // ✅ Save to localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Unique key for each product
  const getKey = (product, brand, source) =>
    `${brand}-${product.id}-${source}-${product.name}`;

  // Add / Remove product
  const toggleWishlist = (product, brand, source) => {
    const key = getKey(product, brand, source);
    setWishlist((prev) => {
      const exists = prev.some((item) => item.key === key);
      return exists
        ? prev.filter((item) => item.key !== key)
        : [...prev, { key, product, brand, source }];
    });
  };

  // Check if in wishlist
  const isInWishlist = (product, brand, source) => {
    const key = getKey(product, brand, source);
    return wishlist.some((item) => item.key === key);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist,
        isSidebarOpen,
        setIsSidebarOpen,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
