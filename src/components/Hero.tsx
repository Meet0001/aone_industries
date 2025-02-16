import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quality Groundnut for a Better Tomorrow
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Leading supplier of premium peanuts and groundnut seeds in Gujarat. 
            Delivering 1998nce since 1998.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/products" 
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors group"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 rounded-md hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}