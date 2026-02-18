import React from 'react';

const ProductList = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Product items will go here */}
        <p>Product scanning in progress...</p>
      </div>
    </div>
  );
};

export default ProductList;
