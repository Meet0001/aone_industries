import React from 'react';
import { Quote } from 'lucide-react';

export function Testimonial() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="h-12 w-12 text-green-600 mx-auto mb-8" />
          <blockquote className="text-2xl font-medium text-gray-900 mb-8">
            "A One Industries has been our trusted partner for years. Their commitment to quality and service excellence is unmatched in the industry."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
              alt="Customer"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-left">
              <div className="font-semibold text-gray-900">Rajesh Patel</div>
              <div className="text-gray-600">Agricultural Cooperative, Gujarat</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}