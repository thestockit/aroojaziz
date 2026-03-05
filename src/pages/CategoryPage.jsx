import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products'; // ✅ Ensure this is your new Master Data
import ProductCard from '../components/QuickView/ProductCard';
import QuickViewDrawer from '../components/QuickView/QuickViewDrawer';
import { AnimatePresence } from 'framer-motion';

const CategoryPage = () => {
  const { categoryName, subCategoryName } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Ref for the scroll target so the page doesn't feel "stuck"
  const quickViewRef = useRef(null);

  // Scroll to top on category change
  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedProduct(null); // Reset drawer when changing categories
  }, [categoryName, subCategoryName]);

  // Step 2: Smooth scroll to the drawer when it opens
  useEffect(() => {
    if (selectedProduct && quickViewRef.current) {
      setTimeout(() => {
        quickViewRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  }, [selectedProduct]);

  // Filtering Logic based on Master Data
  const filteredProducts = products.filter(p => {
    if (subCategoryName) {
      return p.category === categoryName && p.subcategory === subCategoryName;
    }
    return p.category === categoryName;
  });

  return (
    <div className="min-h-screen bg-white pb-20">
      <header className="py-16 text-center border-b border-gray-50 bg-[#FAF9F6]">
        <h1 className="text-3xl font-serif uppercase tracking-[0.4em] text-[#171717]">
          {subCategoryName ? subCategoryName.replace('-', ' ') : categoryName.replace('-', ' ')}
        </h1>
      </header>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12">
        {/* The Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              // Toggle logic: click same product to close, new to open
              onQuickView={(p) => setSelectedProduct(selectedProduct?.id === p.id ? null : p)} 
            />
          ))}
        </div>

        {/* SLIDE DOWN LOGIC: 
            By placing the Drawer BELOW the grid instead of 'fixed', 
            it expands the page downward just like your Home Section.
        */}
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
          <div className="py-20 text-center text-gray-400 uppercase tracking-widest text-sm font-light">
            Collection Updating Soon
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;