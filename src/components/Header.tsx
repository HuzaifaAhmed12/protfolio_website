import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' }
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-teal-600 transition-colors duration-300">
          Syed Huzaifa<span className="text-gray-800">.dev</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 hover:text-teal-600 relative ${
                    activeSection === link.href.substring(1) 
                      ? 'text-teal-600' 
                      : 'text-gray-800'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-teal-600 transition-all duration-300 ${
                    activeSection === link.href.substring(1) ? 'w-full' : 'w-0'
                  }`}></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[400px] border-t border-gray-100' : 'max-h-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-3">
          <ul className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className={`block py-2 px-4 text-base transition-colors duration-300 ${
                    activeSection === link.href.substring(1) 
                      ? 'text-teal-600 bg-gray-50 rounded-md' 
                      : 'text-gray-800'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;