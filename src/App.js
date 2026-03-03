import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "animate.css";

// Layout & Pages
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail"; // ✅ Import your new Page

// Components
import Checkout from "./components/Checkout";
import ShopProduct from "./components/ShopProduct";
import VideoSection from "./components/VideoSection";

// Product Pages
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

// Context
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "contact", element: <Contact /> },

        // ✅ NEW: Dynamic Route for your Home Page Product Cards
        { path: "product/:id", element: <ProductDetail /> },

        { path: "media", element: <VideoSection /> },

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

        { path: "checkout", element: <Checkout /> },
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