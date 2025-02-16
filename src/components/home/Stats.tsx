import React from 'react';
import '../../styles/glassmorphism.css';

const stats = [
  { value: '26+', label: 'Years of Excellence' },
  { value: '1000+', label: 'Happy Customers' },
  { value: '50+', label: 'Products' },
  { value: '10+', label: 'Awards' }
];

export function Stats() {
  return (
    <div className="relative overflow-hidden">
      {/* Agricultural Background with Subtle Gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(135deg, 
              rgba(0, 0, 0, 0.92) 0%,
              rgba(0, 0, 0, 0.85) 50%,
              rgba(0, 0, 0, 0.80) 100%
            ),
            url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div 
                className="text-5xl font-bold mb-2"
                style={{
                  background: 'linear-gradient(to right, #ffffff, #e5e5e5)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {stat.value}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}