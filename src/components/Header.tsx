import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingCart, Coffee } from 'lucide-react';
import logo from '../assets/logo (2).png';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-pink-200/50 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src={logo} className="w-24 h-auto" alt="" />
              {/* <div className="w-12 h-12 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 rounded-2xl flex items-center justify-center transform hover:rotate-12 transition-all duration-300 shadow-lg">
                <Coffee className="w-6 h-6 text-white" />
              </div> */}
              {/* <div>
                <span className="text-3xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent">
                  NutriVision
                </span>
                <div className="text-xs text-gray-500 font-medium -mt-1">
                  Smart Breakfast
                </div>
              </div> */}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium relative group"
              >
                Home
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-500 transition-colors font-medium relative group"
              >
                Products
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-purple-400 to-yellow-400 rounded-full group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-yellow-500 transition-colors font-medium relative group"
              >
                Nutrition
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-emerald-500 transition-colors font-medium relative group"
              >
                About
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full group-hover:w-full transition-all duration-300"></span>
              </a>
              <Button className="bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 hover:from-pink-500 hover:via-purple-500 hover:to-yellow-500 text-white font-bold px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Order Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-pink-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-pink-200/50 shadow-xl animate-slide-down rounded-b-2xl">
              <div className="px-6 py-6 space-y-4">
                <a
                  href="#"
                  className="block text-gray-700 hover:text-pink-500 transition-colors py-2 font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-purple-500 transition-colors py-2 font-medium"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-yellow-500 transition-colors py-2 font-medium"
                >
                  Nutrition
                </a>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-emerald-500 transition-colors py-2 font-medium"
                >
                  About
                </a>
                <Button className="w-full bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 text-white font-bold py-3 rounded-full shadow-lg">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Order Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
