import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/shop/Gulabo.webp";
import img2 from "../assets/shop/Orish.webp";
import img3 from "../assets/shop/navyblue.webp";

import Container from "./Container";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const TextImage = () => {
  return (
    <div>
      {/* First Section */}
      <section className="flex flex-col items-center justify-between gap-10 px-4 md:flex-row mt-28 md:px-20">
        {/* Text Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col items-start max-w-md gap-4 text-left"
        >
          <h1 className="text-3xl font-bold text-black sm:text-4xl">
            Everyday Comfort, Premium Quality
          </h1>
          <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
            Our clothing is designed to keep you comfortable and stylish all day
            long. From everyday essentials to standout seasonal pieces, we bring
            you outfits that blend elegance, comfort, and versatility. Whether
            you’re dressing for a casual day out or a special occasion, there’s
            something here to make you shine.
          </p>
          {/* <a href="/shop" target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-2 font-semibold text-black transition-colors duration-300 border-2 border-black rounded-md hover:bg-black hover:text-white">
              Shop Now
            </button>
          </a> */}
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative group w-full md:w-1/2 max-w-[600px] aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/3] rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={img1}
            alt="Clothing Display"
            className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-black/20 group-hover:opacity-40"></div>
        </motion.div>
      </section>

      {/* Middle Text */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center px-4 mt-20 sm:px-6 lg:px-8"
      ></motion.div>

      {/* Container Section */}
      {/* <Container /> */}

      {/* Second Section */}
      <section className="px-[5%] py-24">
        <div className="grid items-center gap-20 md:grid-cols-2">
          {/* ================= TEXT ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-sm tracking-widest text-gray-500 uppercase">
              New Collection
            </span>

            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
              Aaira Exclusive
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Crafted with elegance and passion, our exclusive designs redefine
              modern luxury.
            </p>

            <div className="mt-8">
              <a href="/shop">
                <button className="px-10 h-12 text-sm font-semibold text-white bg-black rounded-md hover:scale-105 transition">
                  SHOP COLLECTION
                </button>
              </a>
            </div>
          </motion.div>

          {/* ================= IMAGES ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
        relative 
        flex flex-col items-center gap-8
        md:block md:h-[520px]
      "
          >
            {/* BACK IMAGE */}
            <div
              className="
          w-[220px] h-[220px]
          sm:w-[260px] sm:h-[260px]
          md:absolute md:left-10 md:top-32
          rounded-full overflow-hidden shadow-lg
        "
            >
              <img
                src={img3}
                alt="Collection"
                className="w-full h-full object-cover"
              />
            </div>

            {/* FRONT IMAGE */}
            <div
              className="
          w-[300px] h-[300px]
          sm:w-[340px] sm:h-[340px]
          md:absolute md:right-0 md:top-0
          rounded-full overflow-hidden shadow-2xl
        "
            >
              <img
                src={img2}
                alt="Exclusive Wear"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TextImage;
