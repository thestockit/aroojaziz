import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "animate.css";

// 🧩 Layout & Pages
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";

// 🛍️ Components
import Checkout from "./components/Checkout";
// import WishlistSidebar from "./components/Wishlist";
import ShopProduct from "./components/ShopProduct";

// 🧵 Product Category Pages
import ThreePcProducts from "./components/ProductPages/ThreePcProducts";
import ThreePcPage from "./pages/ThreePcPage";
import TwoPcPage from "./pages/TwoPcPage";
import TwoPcProducts from "./components/ProductPages/TwoPcProducts";
import AllOver from "./pages/AllOver";
import AllOverProducts from "./components/ProductPages/AllOverProducts";
import Kurti from "./pages/Kurti";
import KurtiProducts from "./components/ProductPages/KurtiProducts";
import Embroidery from "./pages/Embroidery";
import EmbroideryProducts from "./components/ProductPages/EmbroideryProducts";
import Kids from "./pages/Kids";
import KidsProducts from "./components/ProductPages/KidsProducts";

// 🌐 Context Providers
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

// 🧭 Router setup
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "contact", element: <Contact /> },

        // 🆕 Add these

        // 🛍️ Product Routes
        { path: "chahatcollection/shop/suit/:id", element: <ShopProduct /> },
        { path: "chahatcollection/3pc/suit", element: <ThreePcPage /> },
        { path: "chahatcollection/3pc/suit/:id", element: <ThreePcProducts /> },
        { path: "chahatcollection/2pc/suit", element: <TwoPcPage /> },
        { path: "chahatcollection/2pc/suit/:id", element: <TwoPcProducts /> },
        { path: "chahatcollection/allover/suit", element: <AllOver /> },
        {
          path: "chahatcollection/allover/suit/:id",
          element: <AllOverProducts />,
        },
        { path: "chahatcollection/kurti&trouser/suit", element: <Kurti /> },
        {
          path: "chahatcollection/kurti&trouser/suit/:id",
          element: <KurtiProducts />,
        },
        { path: "chahatcollection/embroidery/suit", element: <Embroidery /> },
        {
          path: "chahatcollection/embroidery/suit/:id",
          element: <EmbroideryProducts />,
        },
        { path: "chahatcollection/kids/suit", element: <Kids /> },
        { path: "chahatcollection/kids/suit/:id", element: <KidsProducts /> },

        // 🛒 Cart + Wishlist
        { path: "checkout", element: <Checkout /> },
        // { path: "wishlist", element: <WishlistSidebar /> },
      ],
    },
    // 404 fallback
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
