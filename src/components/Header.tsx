import React from 'react';
import { Menu, X, Sprout } from 'lucide-react';
import { Link } from './Link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Sprout className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-800">A One Industries</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/certifications">Certifications</Link>
            <Link href="/contact" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="/" className="block py-2">Home</Link>
            <Link href="/about" className="block py-2">About</Link>
            <Link href="/products" className="block py-2">Products</Link>
            <Link href="/certifications" className="block py-2">Certifications</Link>
            <Link href="/contact" className="block py-2 text-green-600">Contact Us</Link>
          </div>
        )}
      </nav>
    </header>
  );
}