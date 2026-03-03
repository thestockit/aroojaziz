import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onQuickView }) => {
  const navigate = useNavigate();

  // Unified navigation handler
  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="group relative flex flex-col items-center bg-white cursor-pointer">
      <div className="relative w-full aspect-[2/3] overflow-hidden bg-[#f4f4f4]">
        {/* Swiper logic */}
        <Swiper
          modules={[Navigation]}
          nested={true}
          navigation={{ 
            nextEl: `.next-${product.id}`, 
            prevEl: `.prev-${product.id}` 
          }}
          className="h-full w-full"
        >
          {product.images.map((img, i) => (
            <SwiperSlide 
              key={i} 
              onClick={handleCardClick} // Clicking the image directly triggers navigation
            >
              <img 
                src={img} 
                className="h-full w-full object-cover select-none" 
                alt={product.name} 
              />
            </SwiperSlide>
          ))}
          
          {/* Navigation Arrows: We MUST stopPropagation here so they don't trigger the page change */}
          <button 
            onClick={(e) => e.stopPropagation()} 
            className={`prev-${product.id} absolute left-0 top-1/2 z-20 -translate-y-1/2 bg-white/40 p-2 opacity-0 transition-opacity group-hover:opacity-100 hidden md:flex hover:bg-white/60`}
          >
            <FiChevronLeft size={20} />
          </button>
          <button 
            onClick={(e) => e.stopPropagation()} 
            className={`next-${product.id} absolute right-0 top-1/2 z-20 -translate-y-1/2 bg-white/40 p-2 opacity-0 transition-opacity group-hover:opacity-100 hidden md:flex hover:bg-white/60`}
          >
            <FiChevronRight size={20} />
          </button>
        </Swiper>

        {/* Quick View Button: Slides up on desktop hover */}
        <button 
          onClick={(e) => {
            e.stopPropagation(); // Prevents navigating to product page
            onQuickView(product);
          }}
          className="absolute bottom-4 left-1/2 z-30 w-[90%] -translate-x-1/2 translate-y-[130%] bg-white/95 py-3 text-[11px] font-bold tracking-[0.2em] transition-all duration-300 group-hover:translate-y-0 hidden md:block shadow-sm"
        >
          QUICK VIEW
        </button>
      </div>

      {/* Info Section: Clicking here also triggers navigation */}
      <div 
        className="mt-4 text-center w-full" 
        onClick={handleCardClick}
      >
        <h3 className="text-[13px] text-[#707070] font-light uppercase tracking-wide mb-1">
          {product.name}
        </h3>
        <p className="text-[14px] font-medium text-[#1a1a1a]">
          Rs {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;