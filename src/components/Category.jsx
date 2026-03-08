import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/bridal.jpg";
import img2 from "../assets/pret.jpg";
import img3 from "../assets/formal.jpg";

const categories = [
  { img: img1, title: "Bridals", link: "/collections/bridal" },
  { img: img2, title: "Luxury Pret", link: "collections/luxury-pret" },
  { img: img3, title: "Formal", link: "collections/formal" },
];

const Category = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / offsetWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section className="w-full bg-white py-16">
      {/* CONTAINER WIDTH: 1000px 
          To change in the future, modify 'max-w-[1000px]' 
      */}
      <div className="mx-auto max-w-[1000px] px-4">
        
        <div className="relative group/main">
          {/* SLIDER CONTAINER */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto sm:grid sm:grid-cols-3 gap-4 no-scrollbar snap-x snap-mandatory"
          >
            {categories.map((item, i) => (
              <Link
                to={item.link}
                key={i}
                className="relative group min-w-full sm:min-w-0 h-[550px] overflow-hidden flex-shrink-0 snap-center"
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* Bottom Shadow for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                {/* Category Button - Bottom Positioned */}
                <div className="absolute inset-x-0 bottom-16 sm:bottom-10 flex justify-center">
                  <span className="px-7 py-2.5 border border-white text-white text-[11px] sm:text-xs tracking-[0.1em] uppercase font-normal transition-all duration-300 group-hover:bg-white group-hover:text-black">
                    {item.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* SLIDER DOTS - Positioned INSIDE the image section (Mobile Only) */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2.5 sm:hidden pointer-events-none">
            {categories.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full border border-white transition-all duration-300 ${
                  activeIndex === i ? "bg-white scale-110" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Category;