import React from 'react';
import { Check } from 'lucide-react';

interface ProductFeaturesProps {
  features: string[];
}

export function ProductFeatures({ features = [] }: ProductFeaturesProps) {
  if (!features.length) return null;

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">Key Features</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}