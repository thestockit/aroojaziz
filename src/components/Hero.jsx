import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// ASSET IMPORTS
import pc1 from '../assets/banner.jpeg';
import pc2 from '../assets/Banner2.png';
import m1 from '../assets/Banner/m1.webp';
import m2 from '../assets/Banner/m2.webp'; 
import m3 from '../assets/Banner/m3.webp';

// REQUIRED CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Hero = () => {
  const slides = [
    { id: 1, desktop: pc1, mobile: m1 },
    { id: 2, desktop: pc2, mobile: m2 },
    { id: 3, desktop: pc1, mobile: m3 },
  ];

  return (
    <section className="relative w-full overflow-hidden group">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        speed={1500}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false
        }}
        navigation={{
          prevEl: '.hero-prev',
          nextEl: '.hero-next',
        }}
        className="h-[65vh] md:h-[85vh] lg:h-[95vh] w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-full bg-[#f9f9f9]">
              {/* DESKTOP BANNER */}
              <img
                src={slide.desktop}
                className="hidden md:block w-full h-full object-cover object-top"
                alt="Luxury Collection Desktop"
                loading={index === 0 ? "eager" : "lazy"}
                fetchpriority={index === 0 ? "high" : "low"}
              />
              
              {/* MOBILE BANNER */}
              <img
                src={slide.mobile}
                className="block md:hidden w-full h-full object-cover object-center"
                alt="Luxury Collection Mobile"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </SwiperSlide>
        ))}

        {/* ✅ FIXED NAVIGATION ARROWS (Visible on both Mobile & Desktop) */}
        <button className="hero-prev absolute left-2 md:left-10 top-1/2 -translate-y-1/2 z-30 p-2 text-white/60 md:text-white/30 hover:text-white transition-all duration-500 flex items-center justify-center">
          <FiChevronLeft className="text-[32px] md:text-[48px]" strokeWidth={1} />
        </button>
        
        <button className="hero-next absolute right-2 md:right-10 top-1/2 -translate-y-1/2 z-30 p-2 text-white/60 md:text-white/30 hover:text-white transition-all duration-500 flex items-center justify-center">
          <FiChevronRight className="text-[32px] md:text-[48px]" strokeWidth={1} />
        </button>
      </Swiper>
    </section>
  );
};

export default Hero;