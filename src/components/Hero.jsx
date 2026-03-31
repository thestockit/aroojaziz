import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// ✅ DOUBLE CHECK: Autoplay must be imported here
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// ✅ ASSET IMPORTS
import pc1 from '../assets/Banner/pc1.webp';
import pc2 from '../assets/Banner/pc2.png';
import m1 from '../assets/Banner/m1.webp';
import m3 from '../assets/Banner/m3.webp';

// ✅ REQUIRED CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Hero = () => {
  const slides = [
    { id: 1, desktop: pc1, mobile: m1 },
    { id: 2, desktop: pc2, },
    { id: 3, desktop: pc1, mobile: m3 }, // Using pc1 as placeholder for 3rd slide
  ];

  return (
    <section className="relative w-full overflow-hidden group">
      <Swiper
        // ✅ CRITICAL: All modules must be listed here
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        speed={1500} // How long the fade lasts
        loop={true}
        autoplay={{
          delay: 4000, // Wait 4 seconds before changing
          disableOnInteraction: false, // ✅ Keep sliding after user clicks
          pauseOnMouseEnter: false
        }}
        navigation={{
          prevEl: '.hero-prev',
          nextEl: '.hero-next',
        }}
        className="h-[70vh] md:h-[85vh] lg:h-[95vh] w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-full">
              {/* DESKTOP BANNER */}
              <img
                src={slide.desktop}
                className="hidden md:block w-full h-full object-cover object-top"
                alt="Desktop Banner"
              />
              {/* MOBILE BANNER */}
              <img
                src={slide.mobile}
                className="block md:hidden w-full h-full object-cover object-center"
                alt="Mobile Banner"
              />
            </div>
          </SwiperSlide>
        ))}

        {/* NAVIGATION ARROWS */}
        <button className="hero-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 text-white/40 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:block">
          <FiChevronLeft size={44} strokeWidth={1} />
        </button>
        <button className="hero-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 text-white/40 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:block">
          <FiChevronRight size={44} strokeWidth={1} />
        </button>
      </Swiper>
    </section>
  );
};

export default Hero;