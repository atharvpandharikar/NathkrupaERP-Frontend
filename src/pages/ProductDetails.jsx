import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Product Details</h1>
      <p className="mt-4">Viewing product with ID: {id}</p>
    </div>
  );
};

export default ProductDetails;
