import React from 'react';
import { ArrowRight, Leaf, Shield, Truck } from 'lucide-react';
import '../../styles/animations.css';
import '../../styles/glassmorphism.css';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            // backgroundImage: `
            //   linear-gradient(45deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3)),
            //   url("https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&q=80")
            // `,
            backgroundImage: `
              linear-gradient(45deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3)),
              url("https://plus.unsplash.com/premium_photo-1661811677567-6f14477aa1fa?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-500/20 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-600/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl relative">
          <div className="glass inline-flex items-center px-4 py-2 rounded-full text-green-300 mb-6 scale-in">
            <Leaf className="h-4 w-4 mr-2" />
            <span className="animate-shine">Leading Agricultural Supplier</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Quality groundnut for a
            <span className="animate-shine"> Better Tomorrow</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed glass-dark p-4 rounded-lg">
            Premium peanuts and groundnut seeds from Gujarat's finest supplier. 
            Delivering excellence and quality since 1998.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="/products" 
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg hover:from-green-700 hover:to-green-600 transition-all duration-300 group shadow-lg hover:shadow-green-500/25"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/contact" 
              className="glass inline-flex items-center justify-center px-8 py-4 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: Leaf, text: 'Premium Quality' },
              { icon: Shield, text: 'Quality Assured' },
              { icon: Truck, text: 'Pan India Delivery' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="glass flex items-center space-x-2 p-3 rounded-lg text-white/90 hover:bg-white/20 transition-all duration-300 cursor-pointer"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}