import React from 'react';
import { Leaf, Package, Trophy, Users } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Premium Quality',
    description: 'Carefully selected and processed peanuts and groundnut seeds of the highest grade'
  },
  {
    icon: Package,
    title: 'Bulk Supply',
    description: 'Efficient bulk supply chain ensuring timely delivery for large-scale requirements'
  },
  {
    icon: Trophy,
    title: 'Industry Leader',
    description: 'Recognized as a trusted name in the agricultural supply industry since 1998'
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Dedicated support and personalized service for all our valued customers'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose A One Industries?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}