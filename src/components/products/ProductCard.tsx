import React from 'react';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h2 className="absolute bottom-4 left-6 text-3xl font-bold text-white">
          {product.name}
        </h2>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 text-lg">{product.description}</p>
      </div>
    </div>
  );
}