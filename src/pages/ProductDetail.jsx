import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { products } from '../components/QuickView/ProductsData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  // State management
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedSleeve, setSelectedSleeve] = useState('Without Sleeves');
  
  // Refs for swiper synchronization
  const mainSwiperRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-sm uppercase tracking-widest text-gray-400">Product Not Found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        
        {/* Breadcrumbs (Desktop) */}
        <nav className="hidden md:flex py-8 text-[10px] uppercase tracking-[0.2em] text-gray-400">
          Home &nbsp;/&nbsp; {product.name}
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-24 pt-6 lg:pt-0">
          
          {/* LEFT: IMAGE GALLERY SECTION (Synchronized Sliders) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            
            {/* 1. Main Swipable Image */}
            <div className="relative aspect-[3/4] bg-[#f9f9f9] overflow-hidden group">
              <Swiper
                onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveImgIndex(swiper.activeIndex)}
                modules={[Navigation, Thumbs]}
                className="h-full w-full"
                grabCursor={true}
              >
                {product.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img 
                      src={img} 
                      className="w-full h-full object-cover select-none" 
                      alt={`${product.name} view ${i}`} 
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Arrows (Desktop Only) */}
              <button 
                onClick={() => mainSwiperRef.current?.slidePrev()}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 p-4 hover:bg-white/40 transition-all hidden md:block z-20"
              >
                <FiChevronLeft size={24} />
              </button>
              <button 
                onClick={() => mainSwiperRef.current?.slideNext()}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 p-4 hover:bg-white/40 transition-all hidden md:block z-20"
              >
                <FiChevronRight size={24} />
              </button>
            </div>

            {/* 2. Thumbnail Swiper */}
            <div className="w-full">
              <Swiper
                modules={[FreeMode]}
                spaceBetween={10}
                slidesPerView={4.5}
                freeMode={true}
                watchSlidesProgress={true}
                breakpoints={{
                  768: { slidesPerView: 5.5 },
                  1024: { slidesPerView: 6.5 }
                }}
                className="thumbnail-swiper"
              >
                {product.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <button 
                      onClick={() => {
                        setActiveImgIndex(idx);
                        mainSwiperRef.current?.slideTo(idx);
                      }}
                      className={`w-full aspect-[3/4] border transition-all duration-300 ${
                        activeImgIndex === idx ? 'border-black opacity-100' : 'border-transparent opacity-60'
                      }`}
                    >
                      <img src={img} className="w-full h-full object-cover" alt="" />
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* RIGHT: PRODUCT INFO SECTION */}
          <div className="lg:col-span-5 flex flex-col space-y-8 lg:pt-4 pb-12">
            <header className="space-y-3 border-b border-gray-100 pb-8">
              <h1 className="text-2xl md:text-3xl font-serif tracking-tight text-[#1a1a1a] uppercase leading-snug">
                {product.name}
              </h1>
              <p className="text-xl font-light text-[#1a1a1a]">Rs {product.price}</p>
            </header>

            <div className="space-y-10">
              {/* Size Selection */}
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900">Size</p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {['XS', 'S', 'M', 'L', 'XL'].map(s => (
                    <button 
                      key={s} 
                      onClick={() => setSelectedSize(s)}
                      className={`w-12 h-10 sm:w-14 sm:h-12 border text-[11px] transition-all duration-300 ${
                        selectedSize === s ? 'border-black bg-black text-white' : 'border-gray-200 hover:border-black'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sleeve Style Selection */}
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900">Sleeve Style</p>
                <div className="flex flex-wrap gap-2">
                  {['Without Sleeves', 'With Sleeves', 'Spaghetti Straps'].map(style => (
                    <button 
                      key={style} 
                      onClick={() => setSelectedSleeve(style)}
                      className={`px-4 py-2 sm:px-6 sm:py-3 border text-[10px] uppercase tracking-widest transition-all duration-300 ${
                        selectedSleeve === style ? 'border-black text-black' : 'border-gray-100 text-gray-400 hover:border-black'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900">Quantity</p>
                <div className="flex items-center border border-gray-200 w-fit bg-white">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-6 py-2 sm:py-3 hover:bg-gray-50 border-r border-gray-200">–</button>
                  <div className="w-12 sm:w-16 text-center text-sm font-medium">{quantity}</div>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-6 py-2 sm:py-3 hover:bg-gray-50 border-l border-gray-200">+</button>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4 pt-6">
              <button className="w-full border border-black py-4 sm:py-5 text-[10px] font-bold tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-500 uppercase">
                ADD TO CART
              </button>
              <button className="w-full bg-[#1e2d3b] text-white py-4 sm:py-5 text-[10px] font-bold tracking-[0.3em] hover:bg-black transition-all duration-500 uppercase">
                BUY IT NOW
              </button>
            </div>

            {/* Description */}
            <div className="pt-10 border-t border-gray-100 space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900">Description</p>
              <div className="text-[13px] text-gray-600 leading-relaxed font-light space-y-4">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;