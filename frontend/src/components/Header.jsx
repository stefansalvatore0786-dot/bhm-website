import React from 'react';
import { Button } from './ui/button';

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold tracking-tight text-slate-900">
            BHM SUNRISE
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('focus')}
              className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium"
            >
              Focus Areas
            </button>
            <button 
              onClick={() => scrollToSection('ecosystem')}
              className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium"
            >
              Ventures
            </button>
            <button 
              onClick={() => scrollToSection('leadership')}
              className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium"
            >
              Leadership
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-slate-900 hover:bg-slate-800 text-white px-6"
            >
              Contact Us
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
