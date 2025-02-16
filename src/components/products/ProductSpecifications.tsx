import React from 'react';
import { Badge } from '../ui/Badge';

interface Specification {
  key: string;
  value: string;
}

interface ProductSpecificationsProps {
  specifications: Specification[];
}

export function ProductSpecifications({ specifications = [] }: ProductSpecificationsProps) {
  if (!specifications.length) return null;

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">Specifications</h3>
      <div className="grid grid-cols-2 gap-4">
        {specifications.map((spec, index) => (
          <div key={index} className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm text-gray-500">{spec.key}</p>
            <p className="font-medium text-gray-900">{spec.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}