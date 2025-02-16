import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SubProduct } from '../../types/product';
import { Badge } from '../ui/Badge';

interface SubProductListProps {
  subProducts: SubProduct[];
}

export function SubProductList({ subProducts }: SubProductListProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">Available Varieties</h3>
      <div className="space-y-3">
        {subProducts.map((subProduct) => (
          <div 
            key={subProduct.id}
            className="group flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-all cursor-pointer"
          >
            <img
              src={subProduct.image}
              alt={subProduct.name}
              className="w-20 h-20 object-cover rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
            />
            <div className="flex-grow">
              <h4 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                {subProduct.name}
              </h4>
              <p className="text-sm text-gray-600 mb-2">{subProduct.description}</p>
              <div className="flex flex-wrap gap-2">
                {subProduct.specifications.map((spec, index) => (
                  <Badge key={index} variant="success">
                    {spec.key}: {spec.value}
                  </Badge>
                ))}
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
}