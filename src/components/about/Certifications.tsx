import React from 'react';
import { Award } from 'lucide-react';

export function Certifications() {
  return (
    <section className="bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Award className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">ISO 22000:2018 Certified</h2>
          <p className="text-xl text-gray-600">
            Our commitment to quality is backed by international certifications, 
            ensuring we meet the highest standards in food safety and processing.
          </p>
        </div>
      </div>
    </section>
  );
}