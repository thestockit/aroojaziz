import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// 1. IMPORT THE NEW COMPONENTS
import ProductGrid from "../components/QuickView/ProductGrid";
import { products } from "../components/QuickView/ProductsData";

import img1 from "../assets/banner-new-again.webp";
import img2 from "../assets/banner-aaria.png";
import mobile1 from "../assets/mobile-1.png";
import mobile2 from "../assets/banner-new-again.webp";

import Category from "../components/Category";
import TextImage from "../components/TextImage";
import VideoSection from "../components/VideoSection";

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const desktopSlides = [img1, img2];
  const mobileSlides = [mobile1, mobile2];
  const slides = isMobile ? mobileSlides : desktopSlides;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Velvet filter from your data
  const velvetProducts = products.filter((p) => p.category === "velvet");

  return (
    <>
      {/* Banner Section */}
      <section className="relative w-full h-[350px] sm:h-[450px] md:h-[600px] lg:h-[700px] overflow-hidden">
        {slides.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Banner"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <button onClick={prevSlide} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white hover:scale-110 transition hidden md:flex">
          <FaAngleLeft size={38} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white hover:scale-110 transition hidden md:flex">
          <FaAngleRight size={38} />
        </button>
      </section>

      <Category />

{/* BEST SELLERS SECTION */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 text-center">
    <div className="mb-12">
      <h2 className="text-[24px] font-heading font-normal text-[#171717] mb-2">
        Best Sellers
      </h2>
      <Link 
        to="/collections/luxury-pret"
        className="text-[11.25px] font-body font-medium uppercase tracking-[0.2em] text-[#C16452] underline underline-offset-[6px] decoration-[1px] hover:opacity-80 transition-opacity"
      >
        View All
      </Link>
    </div>
    
    <ProductGrid products={products} />
  </div>
</section>

      <TextImage />

 {/* VELVET COLLECTION SECTION */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 text-center">
    <div className="mb-12">
      <h2 className="text-[24px] font-heading font-normal text-[#171717] mb-2">
        The Velvet Collection
      </h2>
      <Link 
        to="/collections/luxury-pret" 
        className="text-[11.25px] font-body font-medium uppercase tracking-[0.2em] text-[#C16452] underline underline-offset-[6px] decoration-[1px] hover:opacity-80 transition-opacity"
      >
        View All
      </Link>
    </div>
    
    <ProductGrid products={velvetProducts} />
  </div>
</section>

      <VideoSection />
      
      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/923108067450`}
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