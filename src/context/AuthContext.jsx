import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Only these users can access Dashboard (optional)
  const adminAllowList = ["tar348551@gmail.com"];

  useEffect(() => {
    // Simulate auth loading or restore from localStorage
    const savedUser = localStorage.getItem("appUser");
    if (savedUser) setUser(JSON.parse(savedUser));
    setLoading(false);
  }, []);

  const signInWithGoogle = async () => {
    // Placeholder function
    const mockUser = {
      uid: "mock-uid-123",
      email: "demo@example.com",
      displayName: "Demo User",
      photoURL: "https://via.placeholder.com/150",
    };
    setUser(mockUser);
    localStorage.setItem("appUser", JSON.stringify(mockUser));
    return mockUser;
  };

  const signInWithEmail = async (email, password) => {
    // Fake email login for testing
    const mockUser = {
      uid: "mock-email-uid",
      email,
      displayName: "Email User",
    };
    setUser(mockUser);
    localStorage.setItem("appUser", JSON.stringify(mockUser));
    return mockUser;
  };

  const signUpWithEmail = async (email, password) => {
    // Fake signup function
    const mockUser = {
      uid: "mock-signup-uid",
      email,
      displayName: "New User",
    };
    setUser(mockUser);
    localStorage.setItem("appUser", JSON.stringify(mockUser));
    return mockUser;
  };

  const signOut = async () => {
    setUser(null);
    localStorage.removeItem("appUser");
  };

  const isAdmin = !!user && adminAllowList.includes(user.email || "");

  const value = {
    user,
    loading,
    isAdmin,
    signInWithGoogle,
    signOut,
    signInWithEmail,
    signUpWithEmail,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
