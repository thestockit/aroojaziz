import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { products } from '../data/products'; 
import SizeGuidePopup from '../components/SizeGuidePopup';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.slug === slug);

  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('S');
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const mainSwiperRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) return <div className="py-20 text-center font-serif uppercase tracking-widest">Product Not Found</div>;

  const isBridal = product.category === 'bridal';

  return (
    <div className="min-h-screen bg-white pb-20 pt-4">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        
        {/* Responsive Breadcrumbs */}
        <div className="flex justify-between items-center py-4 md:py-6 text-[10px] md:text-[11px] uppercase tracking-widest text-gray-400">
          <nav className="flex flex-wrap gap-1">
            Home &nbsp;›&nbsp; {product.category} &nbsp;›&nbsp; <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* LEFT: IMAGE GALLERY */}
          <div className="lg:col-span-7 w-full">
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#f9f9f9]">
                <Swiper
                  onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                  onSlideChange={(swiper) => setActiveImgIndex(swiper.activeIndex)}
                  modules={[Navigation]}
                  className="h-full w-full"
                >
                  {product.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img src={img} className="w-full h-full object-cover" alt={product.name} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                {/* Desktop Navigation Arrows */}
                <button onClick={() => mainSwiperRef.current?.slidePrev()} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/50 hover:bg-white rounded-full hidden md:block transition-all">
                  <FiChevronLeft size={20}/>
                </button>
                <button onClick={() => mainSwiperRef.current?.slideNext()} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/50 hover:bg-white rounded-full hidden md:block transition-all">
                  <FiChevronRight size={20}/>
                </button>
              </div>

              {/* Thumbnail Bar */}
              <div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => mainSwiperRef.current?.slideTo(idx)}
                    className={`w-16 md:w-20 aspect-[3/4] flex-shrink-0 border-2 transition-all ${activeImgIndex === idx ? 'border-black' : 'border-transparent opacity-60'}`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt="" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: CONTENT SECTION */}
          <div className="lg:col-span-5 flex flex-col text-left space-y-6 md:space-y-8">
            <h1 className="text-3xl md:text-5xl font-serif text-[#1a1a1a] leading-tight">{product.name}</h1>
            
            {/* BRIDAL LAYOUT: Exact In-Line Buttons */}
            {isBridal ? (
              <div className="flex flex-col sm:flex-row gap-3 pt-6 pb-2 border-t border-gray-100">
                <a 
                  href="https://wa.me/923330601258?text=Hi%20I%20would%20like%20to%20book%20an%20appointment" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <button className="w-full py-3.5 border border-black text-[9px] md:text-[10px] font-bold tracking-[0.2em] hover:bg-black hover:text-white transition uppercase">
                    BOOK AN APPOINTMENT
                  </button>
                </a>
                <a 
                  href="https://wa.me/923330601258?text=Hi%20I%20need%20fashion%20consultation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <button className="w-full py-3.5 border border-black text-[9px] md:text-[10px] font-bold tracking-[0.2em] hover:bg-black hover:text-white transition uppercase">
                    TALK TO A CONSULTANT
                  </button>
                </a>
              </div>
            ) : (
              /* GENERAL LAYOUT: Stacked Buttons */
              <div className="space-y-6 md:space-y-8 pt-6 border-t border-gray-100">
                <button 
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="bg-[#1e2d3b] text-white px-8 md:px-10 py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-black transition"
                >
                  SIZE GUIDE
                </button>

                <div className="space-y-3">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Size</p>
                  <div className="flex flex-wrap gap-2">
                    {['XS', 'S', 'M', 'L', 'XL'].map(s => (
                      <button key={s} onClick={() => setSelectedSize(s)} className={`w-12 md:w-14 h-10 md:h-11 border text-[11px] transition-all ${selectedSize === s ? 'border-black bg-black text-white' : 'border-gray-200 text-gray-400 hover:border-black'}`}>{s}</button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* PRODUCT DETAILS */}
            <div className="space-y-6 md:space-y-8 pt-8 border-t border-gray-100">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-2">Color</p>
                  <div className="px-5 py-2 border border-gray-400 w-fit text-[13px] uppercase tracking-wider">
                    {product.colors?.[0] || 'Default'}
                  </div>
                </div>

                {product.fabricDetails && (
                  <div className="space-y-3">
                    <p className="text-[11px] font-bold uppercase tracking-widest">Product Details:</p>
                    <ul className="text-[13px] md:text-[14px] text-gray-600 space-y-2 font-light list-disc list-inside ml-1 leading-relaxed">
                        {Object.entries(product.fabricDetails).map(([key, val]) => (
                          <li key={key} className="capitalize">{val}</li>
                        ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-3">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-900">Description</p>
                  <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed font-light">{product.description}</p>
                </div>

                {product.shippingTime && (
                  <p className="text-[12px] font-bold uppercase tracking-widest">
                    Shipping Time: <span className="font-light normal-case text-gray-500 ml-2">{product.shippingTime}</span>
                  </p>
                )}
            </div>
          </div>
        </div>

        {/* YOU MAY ALSO LIKE */}
        <div className="mt-20 md:mt-32 pt-16 md:pt-24 border-t border-gray-100">
          <h2 className="text-xl md:text-2xl font-serif text-center uppercase tracking-[0.4em] md:tracking-[0.5em] mb-12 md:mb-16">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-10 md:gap-y-12">
            {products.filter(p => p.category === product.category && p.slug !== product.slug).slice(0, 4).map((item) => (
              <div key={item.id} className="group cursor-pointer text-center" onClick={() => navigate(`/product/${item.slug}`)}>
                <div className="aspect-[3/4] overflow-hidden bg-[#f9f9f9] mb-4 md:mb-5">
                   <img src={item.images[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={item.name} />
                </div>
                <h3 className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-gray-900 font-light mb-1 px-2 line-clamp-1">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SizeGuidePopup isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />
    </div>
  );
};

export default ProductDetail;