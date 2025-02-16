import React from 'react';
import { Infrastructure } from '../components/about/Infrastructure';
import { Certifications } from '../components/about/Certifications';

export function AboutPage() {
  return (
    <div className="pt-20">
      <div className="relative py-16 bg-gradient-to-r from-green-600 to-green-500">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-green-50">
            Leading the way in peanut processing since 1998
          </p>
        </div>
      </div>
      
      <Infrastructure />
      <Certifications />
    </div>
  );
}