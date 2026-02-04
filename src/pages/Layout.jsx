import React from "react";

import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import WishlistSidebar from "../components/Wishlist";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <WishlistSidebar />
      <Footer />
    </>
  );
};

export default Layout;
