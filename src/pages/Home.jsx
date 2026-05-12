import React from "react";
import { Link } from "react-router-dom";

// 1. COMPONENT IMPORTS
import Hero from "../components/Hero";
import Category from "../components/Category";
import TextImage from "../components/TextImage";
import VideoSection from "../components/VideoSection";
import ProductGrid from "../components/QuickView/ProductGrid";

// ✅ ENSURE: This points to your master data file
import { products } from "../data/products"; 

const Home = () => {
  // Velvet filter for the featured section
  const velvetProducts = products.filter((p) => p.subcategory?.toLowerCase() === "velvet");

  // Best Sellers filter (or just show the first 4 products)
  const bestSellers = products
    .filter((p) => p.isBestSeller === true)
    .slice(0, 8); // This ensures you never show more than 8, even if you tag 10

  return (
    <>
      {/* ✅ NEW HERO COMPONENT (Handles its own images and responsiveness) */}
      <Hero />

      {/* CATEGORY LINKS */}
      <Category />

      {/* BEST SELLERS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-[24px] font-serif font-normal text-[#171717] mb-2 uppercase tracking-widest">
              Best Sellers
            </h2>
            <Link 
              to="/collections/luxury-pret"
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#C16452] underline underline-offset-[6px] decoration-[1px] hover:opacity-80 transition-opacity"
            >
              View All
            </Link>
          </div>
          
          <ProductGrid products={bestSellers} />
        </div>
      </section>

      {/* PROMOTIONAL TEXT IMAGE SECTION */}
      <TextImage />

      {/* VELVET COLLECTION SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-[24px] font-serif font-normal text-[#171717] mb-2 uppercase tracking-widest">
              The Velvet Collection
            </h2>
            <Link 
              to="/collections/formal/velvet" 
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#C16452] underline underline-offset-[6px] decoration-[1px] hover:opacity-80 transition-opacity"
            >
              View All
            </Link>
          </div>
          
          <ProductGrid products={velvetProducts} />
        </div>
      </section>

      {/* CINEMATIC VIDEO SECTION */}
      <VideoSection />
      
      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/923330601258"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M20.52 3.48A11.91 11.91 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.15 1.59 5.95L0 24l6.22-1.63A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.92 9.92 0 01-5.06-1.38l-.36-.21-3.69.96.99-3.6-.23-.37A9.93 9.93 0 012 12C2 6.48 6.48 2 12 2c2.66 0 5.17 1.04 7.07 2.93A9.92 9.92 0 0122 12c0 5.52-4.48 10-10 10zm5.1-7.4c-.28-.14-1.65-.81-1.91-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.08-.17.19-.35.21-.63.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.56-1.93-.17-.28-.02-.43.13-.57.13-.13.28-.35.42-.52.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.1-.23-.56-.47-.48-.64-.49-.17 0-.37-.01-.57-.01-.2 0-.53.07-.81.35-.28.28-1.07 1.04-1.07 2.54s1.1 2.94 1.26 3.14c.16.21 2.16 3.3 5.23 4.63.73.31 1.3.49 1.74.62.73.23 1.39.2 1.91.12.58-.09 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33z" />
        </svg>
      </a>
    </>
  );
};

export default Home;