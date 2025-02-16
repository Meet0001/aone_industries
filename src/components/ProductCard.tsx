import React from 'react';
import { Product } from '../types/product';
import { ProductFeatures } from './products/ProductFeatures';
import { ProductSpecifications } from './products/ProductSpecifications';
import { SubProductList } from './products/SubProductList';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h2 className="absolute bottom-4 left-6 text-3xl font-bold text-white">
          {product.name}
        </h2>
      </div>
      
      <div className="p-6 space-y-6">
        <p className="text-gray-600 text-lg">{product.description}</p>
        
        <ProductFeatures features={product.features} />
        
        <ProductSpecifications specifications={product.specifications} />
        
        {product.subProducts && (
          <SubProductList subProducts={product.subProducts} />
        )}
      </div>
    </div>
  );
}