// D:\aroojaziz\aroojaziz-main\src\pages\Test.jsx

import React from 'react';
// Changed 'QuickViewSlider' to 'QuickView' to match your folder
import ProductGrid from '../components/QuickView/ProductGrid'; 
import { products } from '../components/QuickView/ProductsData'; 

function Test() {
  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-center text-3xl font-serif mb-10 uppercase tracking-widest">
        Test Section
      </h1>
      <ProductGrid products={products} />
    </div>
  );
}

export default Test;