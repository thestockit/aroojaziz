import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

const QuickViewDrawer = ({ product, onClose }) => {
  const navigate = useNavigate(); // ✅ Initialize navigate
  const [quantity, setQuantity] = useState(1);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  if (!product) return null;

  // Navigation Logic for images
  const nextImg = () => {
    setActiveImgIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImg = () => {
    setActiveImgIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  // ✅ New function to handle redirecting to the full page
  const handleViewFullDetails = () => {
    onClose(); // Close the drawer first
    navigate(`/product/${product.slug}`); // Navigate using the SLUG
  };

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="w-full overflow-hidden bg-[#FAF9F6] border-t border-b border-gray-100"
    >
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-16 relative">
        <button onClick={onClose} className="absolute right-6 top-6 text-2xl text-gray-400 hover:text-black transition z-50">✕</button>

        {/* LEFT SECTION: Image Gallery */}
        <div className="flex flex-col space-y-4">
          <div className="relative w-full aspect-[3/4] bg-white group flex items-center justify-center overflow-hidden">
            <img 
              src={product.images[activeImgIndex]} 
              className="h-full w-full object-cover transition-all duration-500" 
              alt={product.name} 
            />

            <button onClick={prevImg} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/40 p-3 hover:bg-white/70 transition-colors z-10">
              <FiChevronLeft size={24} className="text-gray-800" />
            </button>
            <button onClick={nextImg} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/40 p-3 hover:bg-white/70 transition-colors z-10">
              <FiChevronRight size={24} className="text-gray-800" />
            </button>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {product.images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveImgIndex(idx)}
                className={`w-16 h-20 flex-shrink-0 border transition-all ${
                  activeImgIndex === idx ? 'border-black opacity-100' : 'border-transparent opacity-60'
                }`}
              >
                <img src={img} className="w-full h-full object-cover" alt="" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION: Product Controls */}
        <div className="flex flex-col text-left space-y-5">
          <header className="space-y-2">
            <h2 className="text-3xl font-serif tracking-tight text-[#1a1a1a] uppercase">{product.name}</h2>
            <p className="text-lg text-[#707070]">Rs {product.price}</p>
          </header>

          <div className="space-y-6 pt-2">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] mb-3 text-gray-900">Color</p>
              <div className="border border-gray-400 px-5 py-2 text-sm w-fit bg-white uppercase">
                {product.colors ? product.colors[0] : "Default"}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] mb-3 text-gray-900">Size</p>
              <div className="flex flex-wrap gap-2">
                {['XS', 'S', 'M', 'L', 'XL'].map(s => (
                  <button key={s} className="min-w-[55px] h-10 border border-gray-300 text-[13px] hover:border-black transition uppercase bg-white">{s}</button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] mb-3 text-gray-900">Quantity</p>
              <div className="flex items-center border border-gray-300 w-fit bg-white">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-gray-100 border-r border-gray-300">–</button>
                <div className="w-12 text-center text-sm">{quantity}</div>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-gray-100 border-l border-gray-300">+</button>
              </div>
            </div>
          </div>

          <div className="pt-6 space-y-3">
            <button className="w-full border border-black py-4 text-xs font-bold tracking-[0.2em] hover:bg-black hover:text-white transition uppercase">
              ADD TO CART
            </button>
            <button className="w-full bg-[#1e2d3b] text-white py-4 text-xs font-bold tracking-[0.2em] hover:bg-black transition uppercase shadow-lg">
              BUY IT NOW
            </button>
          </div>
          
          {/* ✅ FIXED BUTTON: Now points to the full details page using slug */}
          <button 
            onClick={handleViewFullDetails}
            className="text-[11px] underline text-gray-500 tracking-widest hover:text-black uppercase mt-4 text-left"
          >
            More details &gt;
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default QuickViewDrawer;