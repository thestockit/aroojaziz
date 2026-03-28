import React, { useState } from 'react';
import SizeGuidePopup from '../components/SizeGuide/SizeGuidePopup';
import { sizeCharts } from '../components/SizeGuide/SizeData';

const TestSizeGuide = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeType, setActiveType] = useState('shirt');

  const openChart = (type) => {
    setActiveType(type);
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-10">
      <h1 className="font-serif text-3xl mb-8 tracking-widest uppercase">Size Guide Layout Preview</h1>
      
      <div className="flex flex-wrap gap-4 justify-center max-w-2xl">
        {Object.keys(sizeCharts).map((key) => (
          <button
            key={key}
            onClick={() => openChart(key)}
            className="px-6 py-3 border border-black bg-white hover:bg-black hover:text-white transition uppercase text-[11px] font-bold tracking-widest"
          >
            Preview {key} Chart
          </button>
        ))}
      </div>

      <p className="mt-10 text-gray-400 text-sm">Click a button to check the Faiza Saqlain style popup.</p>

      <SizeGuidePopup 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        type={activeType} 
      />
    </div>
  );
};

export default TestSizeGuide;