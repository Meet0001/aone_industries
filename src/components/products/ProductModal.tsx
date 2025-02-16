import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Product, ProductVariant } from '../../types/product';
import { ProductSpecifications } from './ProductSpecifications';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div
        className="relative min-h-screen flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()} // Prevent backdrop click from closing modal
      >
        <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Product Details */}
          <div className="p-6 space-y-8">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.variants.map((variant, index) => (
                <VariantCard key={index} variant={variant} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VariantCard({ variant }: { variant: ProductVariant }) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 space-y-4">
      <img src={variant.displayImage} alt={variant.name} className="w-full h-48 object-cover rounded-lg" />
      <h4 className="text-xl font-semibold">{variant.name}</h4>
      <ProductSpecifications specifications={variant.specifications} />
    </div>
  );
}
