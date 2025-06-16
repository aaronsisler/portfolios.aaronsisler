import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: "#", label: "Email" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Custom fun icon component (same as header)
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
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <CustomIcon className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Aaron Sisler</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Full-stack developer passionate about creating exceptional web experiences and robust APIs. 
              Always learning, always building.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <div className="space-y-2 text-slate-400">
              <p>aaron@aaronsisler.com</p>
              <p>Available for opportunities</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <p className="text-sm text-slate-400">
                Open to freelance projects and full-time opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-400 text-sm">
            © {currentYear} Aaron Sisler. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-slate-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and lots of coffee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;