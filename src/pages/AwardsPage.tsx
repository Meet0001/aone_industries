import React from 'react';
import { awards } from '../data/awards';
import { Trophy } from 'lucide-react';

export function AwardsPage() {
  return (
    <div className="pt-20">
      <div className="relative py-16 bg-green-600">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Awards & Recognition</h1>
          <p className="text-xl text-green-50">
            Celebrating our commitment to excellence
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <Trophy className="h-12 w-12 text-green-600 mb-4" />
              <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm mb-4">
                {award.year}
              </div>
              <h3 className="text-xl font-bold mb-2">{award.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{award.organization}</p>
              <p className="text-gray-600">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}