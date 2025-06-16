import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Custom fun icon component
  const CustomIcon = ({ className }: { className: string }) => (
    <svg 
      className={className} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rocket body */}
      <path 
        d="M16 2L20 10H12L16 2Z" 
        fill="currentColor" 
        opacity="0.9"
      />
      {/* Rocket fins */}
      <path 
        d="M12 10L8 14H12V10Z" 
        fill="currentColor" 
        opacity="0.7"
      />
      <path 
        d="M20 10L24 14H20V10Z" 
        fill="currentColor" 
        opacity="0.7"
      />
      {/* Rocket flame */}
      <path 
        d="M14 14V22L16 26L18 22V14H14Z" 
        fill="currentColor" 
        opacity="0.8"
      />
      {/* Window */}
      <circle 
        cx="16" 
        cy="8" 
        r="1.5" 
        fill="white" 
        opacity="0.9"
      />
      {/* Flame effect */}
      <path 
        d="M15 22L16 28L17 22" 
        stroke="currentColor" 
        strokeWidth="1" 
        opacity="0.6"
      />
    </svg>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-slate-900/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <CustomIcon className={`h-8 w-8 transition-all duration-300 hover:scale-110 ${isScrolled ? 'text-blue-600' : 'text-blue-400'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
              Aaron Sisler
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-400'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors duration-200 ${
              isScrolled 
                ? 'text-slate-700 hover:text-blue-600' 
                : 'text-white hover:text-blue-400'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t">
            <nav className="flex flex-col space-y-1 p-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;