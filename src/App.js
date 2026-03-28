import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "animate.css";

// Layout & Pages
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage"; // ✅ New dynamic page

// Components
import Checkout from "./components/Checkout";
import ShopProduct from "./components/ShopProduct";
import VideoSection from "./components/VideoSection";

// Context
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

import TestSizeGuide from './pages/TestSizeGuide';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "contact", element: <Contact /> },
        { path: "media", element: <VideoSection /> },
        { path: "checkout", element: <Checkout /> },

        { path: "test-size", element: <TestSizeGuide /> },

        // ✅ THE EXPERT DYNAMIC ROUTES
        // These handle ALL categories and subcategories automatically
        { path: "collections/:categoryName", element: <CategoryPage /> },
        { path: "collections/:categoryName/:subCategoryName", element: <CategoryPage /> },

        // ✅ SEO FRIENDLY PRODUCT ROUTE
        { path: "product/:slug", element: <ProductDetail /> },

        // Legacy/Old routes (Keeping them to avoid breaking existing links)
        { path: "chahatcollection/shop/suit/:id", element: <ShopProduct /> },
      ],
      
    },
    {
      path: "*",
      element: (
        <div className="text-center text-2xl font-semibold py-20">
          404 - Page Not Found
        </div>
      ),
    },
  ]);

  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <RouterProvider router={router} />
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
    
  );
}

export default App;