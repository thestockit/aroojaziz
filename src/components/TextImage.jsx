import React from "react";
import { motion } from "framer-motion";
import imgLeft from "../assets/shop/Orish.webp"; // Left/Back Image
import imgRight from "../assets/shop/navyblue.webp"; // Right/Front Image

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const TextImage = () => {
  return (
    /* py-16 sm:py-24 ensures perfectly symmetrical top and bottom padding */
    <section className="w-full bg-white py-16 sm:py-24">
      
      {/* Container width set to 1000px */}
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
          
          {/* IMAGE SECTION: Precise Collaging */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative flex items-center w-full md:w-[55%]"
          >
            {/* Left Image (Positioned slightly higher and behind) */}
            <div className="relative w-[55%] aspect-[3/4] z-0 -mt-10">
              <img
                src={imgLeft}
                alt="FS Style Back"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Image (Overlapping the left image from the front) */}
            <div className="relative w-[55%] aspect-[3/4] z-10 -ml-[5%] mt-10 shadow-sm">
              <img
                src={imgRight}
                alt="FS Style Front"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* TEXT SECTION: Centered Block */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-center text-center w-full md:w-[45%]"
          >
            <h2 className="text-2xl md:text-3xl font-serif tracking-widest text-gray-900 mb-8">
            Luxury Pret
            </h2>

            <div className="pt-2">
              <a href="/shop" className="group">
                <button className="px-12 py-3 border border-black text-black text-[10px] tracking-[0.2em] uppercase font-normal transition-all duration-300 group-hover:bg-black group-hover:text-white">
                  SHOP NOW
                </button>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TextImage;