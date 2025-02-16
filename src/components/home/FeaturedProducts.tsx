import React from 'react';
import { ArrowRight } from 'lucide-react';
import { products } from '../../data/products';

export function FeaturedProducts() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600">Discover our premium selection</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{product.name}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{product.description}</p>
                <a 
                  href={`/products#${product.id}`}
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}