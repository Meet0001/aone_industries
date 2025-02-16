import React from 'react';
import { ProductVariant as ProductVariantType } from '../../types/product';
import { Badge } from '../ui/Badge';
import { Package } from 'lucide-react';

interface ProductVariantProps {
  variant: ProductVariantType;
}

export function ProductVariant({ variant }: ProductVariantProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={variant.displayImage}
          alt={variant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-3 left-4 text-xl font-semibold text-white">
          {variant.name}
        </h3>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            {variant.specifications.map((spec, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-600">{spec.key}</span>
                <Badge variant="success">{spec.value}</Badge>
              </div>
            ))}
          </div>
          
          <div className="flex items-center pt-4 border-t">
            <Package className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-sm text-gray-600">{variant.packaging}</span>
          </div>
        </div>
      </div>
    </div>
  );
}