import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { AnimatePresence } from 'framer-motion';

import ProductCard from './ProductCard';
import QuickViewDrawer from './QuickViewDrawer';

// Essential Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';

const ProductGrid = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const quickViewRef = useRef(null); // Step 1: Create a ref for the scroll target

  // Step 2: Watch for changes to selectedProduct
  useEffect(() => {
    if (selectedProduct && quickViewRef.current) {
      // Use a slight timeout to allow the Framer Motion animation to begin 
      // before calculating the scroll position
      setTimeout(() => {
        quickViewRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start', // Aligns the top of the drawer with the top of the screen
        });
      }, 100);
    }
  }, [selectedProduct]);

  return (
    <div className="w-full relative px-4 md:px-12">
      {/* 1. Horizontal Slider Section */}
      <div className="mb-10">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.2}
          navigation={{
            nextEl: '.main-next',
            prevEl: '.main-prev',
          }}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }}
          className="relative"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard 
                product={product} 
                onQuickView={(p) => {
                  // Toggle off if clicking the same product, otherwise set new
                  setSelectedProduct(selectedProduct?.id === p.id ? null : p);
                }} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Main Navigation Arrows */}
      <button className="main-prev absolute left-0 top-[35%] z-20 hidden lg:block text-2xl">←</button>
      <button className="main-next absolute right-0 top-[35%] z-20 hidden lg:block text-2xl">→</button>

      {/* 3. The Scroll Target & Drawer (Downward Expansion) */}
      <div ref={quickViewRef} className="scroll-mt-20"> {/* scroll-mt adds a margin so it's not glued to the top */}
        <AnimatePresence>
          {selectedProduct && (
            <QuickViewDrawer 
              product={selectedProduct} 
              onClose={() => setSelectedProduct(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductGrid;