import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { products } from '../data/products'; 
import SizeGuidePopup from '../components/SizeGuide/SizeGuidePopup';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

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

  if (!product) return (
    <div className="py-20 text-center font-serif uppercase tracking-widest text-gray-400">
      Product Not Found
    </div>
  );

  const isBridal = product.category?.toLowerCase() === 'bridal';

  return (
    <div className="min-h-screen bg-white pb-20 pt-4">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        
        {/* Breadcrumbs */}
        <div className="flex justify-between items-center py-4 md:py-6 text-[10px] md:text-[11px] uppercase tracking-widest text-gray-400">
          <nav className="flex flex-wrap gap-1">
            Home &nbsp;›&nbsp; {product.category} &nbsp;›&nbsp; <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* LEFT: IMAGE GALLERY (Stable & Responsive) */}
          <div className="lg:col-span-7 w-full">
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#f9f9f9] group">
                <Swiper
                  onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                  onSlideChange={(swiper) => setActiveImgIndex(swiper.activeIndex)}
                  modules={[Navigation]}
                  className="h-full w-full"
                >
                  {product.images && product.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img src={img} className="w-full h-full object-cover select-none" alt={product.name} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                <button onClick={() => mainSwiperRef.current?.slidePrev()} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/60 rounded-full hidden md:block transition-all opacity-0 group-hover:opacity-100">
                  <FiChevronLeft size={22}/>
                </button>
                <button onClick={() => mainSwiperRef.current?.slideNext()} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/60 rounded-full hidden md:block transition-all opacity-0 group-hover:opacity-100">
                  <FiChevronRight size={22}/>
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar">
                {product.images && product.images.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => mainSwiperRef.current?.slideTo(idx)}
                    className={`w-16 md:w-20 aspect-[3/4] flex-shrink-0 border-2 transition-all duration-300 ${activeImgIndex === idx ? 'border-black opacity-100' : 'border-transparent opacity-50'}`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt="" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: CONTENT SECTION */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <header className="pb-4 border-b border-gray-100">
              <h1 className="text-3xl md:text-5xl font-serif text-[#1a1a1a] leading-tight uppercase">
                {product.name}
              </h1>
            </header>

            {/* CTA AND INFO BLOCK - Pulled closer to Header */}
            <div className="mt-8 space-y-8">
              
              {isBridal ? (
                /* BRIDAL LAYOUT: Appointment/Consultation Only */
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="https://wa.me/923330601258" target="_blank" rel="noreferrer" className="flex-1">
                    <button className="w-full py-4 border border-black text-[9px] md:text-[10px] font-bold tracking-[0.2em] hover:bg-black hover:text-white transition uppercase">
                      BOOK AN APPOINTMENT
                    </button>
                  </a>
                  <a href="https://wa.me/923330601258" target="_blank" rel="noreferrer" className="flex-1">
                    <button className="w-full py-4 border border-black text-[9px] md:text-[10px] font-bold tracking-[0.2em] hover:bg-black hover:text-white transition uppercase">
                      TALK TO A CONSULTANT
                    </button>
                  </a>
                </div>
              ) : (
                /* OTHER COLLECTIONS: Size Selector & Guide Only */
                <div className="space-y-6">
                  <button 
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="bg-[#1e2d3b] text-white px-10 py-3.5 text-[10px] font-bold tracking-widest uppercase hover:bg-black transition"
                  >
                    SIZE GUIDE
                  </button>

                  <div className="space-y-4">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Select Size</p>
                    <div className="flex flex-wrap gap-2">
                      {['XS', 'S', 'M', 'L', 'XL'].map(s => (
                        <button key={s} onClick={() => setSelectedSize(s)} className={`w-14 h-11 border text-[11px] transition-all ${selectedSize === s ? 'border-black bg-black text-white' : 'border-gray-200 text-gray-400 hover:border-black'}`}>{s}</button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SHARED SPECIFICATIONS (Fabric, Color, Shipping) */}
              <div className="space-y-8 pt-8 border-t border-gray-100">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-3">Color</p>
                  <div className="px-5 py-2 border border-gray-400 w-fit text-[13px] uppercase tracking-wider font-light">
                    {product.colors?.[0] || 'Original'}
                  </div>
                </div>

                {product.fabricDetails && (
                  <div className="space-y-4">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#1a1a1a]">Product Details:</p>
                    <ul className="text-[13px] md:text-[14px] text-gray-600 space-y-3 font-light list-none ml-0">
                      {Object.entries(product.fabricDetails).map(([key, val]) => (
                        <li key={key} className="flex items-start">
                          <span className="font-bold text-black min-w-[100px] uppercase text-[10px] tracking-widest pt-0.5">
                            {key}:
                          </span> 
                          <span className="capitalize leading-relaxed">{val}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-3">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-900">Description</p>
                  <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed font-light whitespace-pre-line">
                    {product.description}
                  </p>
                </div>

                {product.shippingTime && (
                  <p className="text-[12px] font-bold uppercase tracking-widest">
                    Shipping Time: <span className="font-light normal-case text-gray-500 ml-2">{product.shippingTime}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* YOU MAY ALSO LIKE */}
        <div className="mt-24 md:mt-32 pt-16 md:pt-24 border-t border-gray-100">
          <h2 className="text-xl md:text-2xl font-serif text-center uppercase tracking-[0.5em] mb-12 md:mb-16 text-[#1a1a1a]">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12">
            {products
              .filter(p => p.category === product.category && p.slug !== product.slug)
              .slice(0, 4)
              .map((item) => (
              <div 
                key={item.id} 
                className="group cursor-pointer text-center" 
                onClick={() => navigate(`/product/${item.slug}`)}
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#f9f9f9] mb-4">
                   <img src={item.images[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={item.name} />
                </div>
                <h3 className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-gray-900 font-light mb-1 px-2 line-clamp-1">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SizeGuidePopup 
        isOpen={isSizeGuideOpen} 
        onClose={() => setIsSizeGuideOpen(false)} 
        productName={product.name}
      />
    </div>
  );
};

export default ProductDetail;