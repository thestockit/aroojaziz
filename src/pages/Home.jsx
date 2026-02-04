import React, { useEffect, useState } from "react";
import img1 from "../assets/banner-new-again.webp";
import img2 from "../assets/banner-second-again.webp";
import img3 from "../assets/banner-third-again.webp";
import Category from "../components/Category";
import BestSeller from "../components/BestSeller";
import TextImage from "../components/TextImage";

const Home = () => {
  const [current, setCurrent] = useState(0);

  const slides = [img1, img2, img3];

  // 🔁 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Banner Section */}
      <section className="relative w-full h-[400px] md:h-[700px] overflow-hidden">
        {slides.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Banner"
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-all duration-1000 ease-in-out
              ${
                index === current
                  ? "opacity-100 translate-x-0 rotate-0 scale-100 z-20"
                  : index < current
                    ? "opacity-0 -translate-x-full -rotate-6 scale-110 z-10"
                    : "opacity-0 translate-x-full rotate-6 scale-110 z-10"
              }
            `}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 z-30"></div>
      </section>

      <Category />
      <BestSeller />
      <TextImage />
    </>
  );
};

export default Home;
