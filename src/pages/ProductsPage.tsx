import React from 'react';
import { Search } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/products/ProductCard';
import { ProductModal } from '../components/products/ProductModal';
import { Product } from '../types/product';

export function ProductsPage() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);

  const filteredProducts = products.filter(product => {
    const searchLower = searchTerm.toLowerCase();
    
    // Search in product name and description
    if (
      product.name.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower)
    ) {
      return true;
    }
    
    // Search in variants
    return product.variants.some(variant => 
      variant.name.toLowerCase().includes(searchLower) ||
      variant.specifications.some(spec => 
        spec.key.toLowerCase().includes(searchLower) ||
        spec.value.toLowerCase().includes(searchLower)
      )
    );
  });

  return (
    <div className="pt-20">
      <div className="relative py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-xl text-green-50 mb-8">
            Premium quality peanuts and groundnut seeds for your needs
          </p>
          
          <div className="relative max-w-xl">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-green-100 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-green-100" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        )}
      </div>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}