import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products'; 
import ProductCard from '../components/QuickView/ProductCard';
import QuickViewDrawer from '../components/QuickView/QuickViewDrawer';
import { AnimatePresence } from 'framer-motion';

const CategoryPage = () => {
  const { categoryName, subCategoryName } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const quickViewRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedProduct(null); 
  }, [categoryName, subCategoryName]);

  useEffect(() => {
    if (selectedProduct && quickViewRef.current) {
      setTimeout(() => {
        quickViewRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [selectedProduct]);

  const filteredProducts = products.filter(p => {
    if (subCategoryName) {
      return p.category === categoryName && p.subcategory === subCategoryName;
    }
    return p.category === categoryName;
  });

  const formatTitle = (str) => {
    if (!str) return '';
    return str.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  const displayTitle = subCategoryName ? formatTitle(subCategoryName) : formatTitle(categoryName);

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* EXPERT HEADER:
          - flex + items-center + justify-center: Forces the title into the exact center.
          - py-10 md:py-14: Sets identical padding top and bottom.
      */}
      <header className="w-full bg-white flex items-center justify-center py-10 md:py-14">
        <h1 className="text-2xl md:text-3xl font-serif text-[#1a1a1a] m-0 p-0 leading-none tracking-wide">
          {displayTitle}
        </h1>
      </header>

      {/* MAIN GRID:
          - pt-2: Brings the products closer to the name for that high-end look.
      */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 pt-2">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10 md:gap-y-14">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onQuickView={(p) => setSelectedProduct(selectedProduct?.id === p.id ? null : p)} 
            />
          ))}
        </div>

        <div ref={quickViewRef} className="scroll-mt-24">
          <AnimatePresence>
            {selectedProduct && (
              <QuickViewDrawer 
                product={selectedProduct} 
                onClose={() => setSelectedProduct(null)} 
              />
            )}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center text-gray-400 font-serif italic text-sm">
            Collection Updating Soon
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;