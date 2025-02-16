import React from 'react';
import { Link } from './Link';
import { Sprout, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sprout className="h-8 w-8 text-green-500" />
              <span className="text-xl font-bold text-white">A One Industries</span>
            </div>
            <p className="text-sm">
              Leading supplier of premium peanuts and groundnut seeds since 2016.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-white">Home</Link>
              <Link href="/about" className="block text-gray-300 hover:text-white">About</Link>
              <Link href="/products" className="block text-gray-300 hover:text-white">Products</Link>
              <Link href="/certifications" className="block text-gray-300 hover:text-white">Certifications</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:info@aoneindustries.com" className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>info@aoneindustries.com</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+91 98765 43210</span>
              </a>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Junagadh, Gujarat, India</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Business Hours</h3>
            <div className="space-y-2">
              <p>Monday - Saturday</p>
              <p>9:00 AM - 6:00 PM</p>
              <p className="text-gray-400">Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} A One Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}