import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { personalData } from '../data/personalData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Map of icon names to components
  const iconComponents = {
    Github,
    Linkedin,
    Twitter,
    MessageCircle,
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2 text-teal-400">
                Syed Huzaifa<span className="text-white">.dev</span>
              </h2>
              <p className="text-gray-400 max-w-md">
                Creating beautiful, functional websites and applications that make a difference.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {personalData.social.map((item) => {
                const Icon = iconComponents[item.icon as keyof typeof iconComponents];
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-teal-600 hover:text-white transition-all duration-300"
                    aria-label={item.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="border-t border-gray-800 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {currentYear} {personalData.name}. All rights reserved.
              </p>
              
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-teal-600 hover:text-white transition-colors duration-300 group"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} className="group-hover:animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;