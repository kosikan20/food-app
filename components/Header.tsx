'use client';

import { Button } from './ui/button';
import { useState } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="text-xl sm:text-2xl text-orange-600 font-medium">
              FoodieApp
            </div>
            <nav className="hidden lg:flex items-center gap-6">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Restaurants
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                How it works
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:flex text-gray-600">
              Sign In
            </Button>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white text-sm sm:text-base px-3 sm:px-4 py-2">
              <span className="hidden sm:inline">Download App</span>
              <span className="sm:hidden">Download</span>
            </Button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-gray-600 block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}
                ></span>
                <span
                  className={`bg-gray-600 block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                ></span>
                <span
                  className={`bg-gray-600 block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors px-2"
              >
                Restaurants
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors px-2"
              >
                How it works
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors px-2"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors px-2"
              >
                Contact
              </a>
              <Button
                variant="ghost"
                className="justify-start text-gray-600 px-2"
              >
                Sign In
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
