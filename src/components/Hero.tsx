import React, { useEffect, useRef } from 'react';
import { ChevronDown, Mail, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { personalData } from '../data/personalData';

const Hero: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      },
      { threshold: 0.1 }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current);
      }
    };
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Map of icon names to components
  const iconComponents = {
    Github,
    Linkedin,
    Twitter,
    MessageCircle,
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      <div 
        ref={scrollRef}
        className="container mx-auto px-4 py-20 flex flex-col items-center text-center opacity-0 transition-opacity duration-1000"
      >
        <div className="mb-6 relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-teal-600 bg-opacity-20 mx-auto overflow-hidden border-4 border-white shadow-lg">
            <div className="absolute inset-0 bg-teal-600 bg-opacity-10 animate-pulse rounded-full"></div>
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center text-teal-700 text-4xl md:text-5xl font-bold">
              {personalData.name.split(' ').map(name => name[0]).join('')}
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
          <span className="block">Hi, I'm {personalData.name.split(' ')[0]}</span>
          <span className="relative inline-block">
            <span className="text-teal-600 inline-block relative">
              {personalData.title}
              <span className="absolute bottom-1 left-0 w-full h-2 bg-teal-600 opacity-20"></span>
            </span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          {personalData.about}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a 
            href="#projects" 
            className="px-8 py-3 rounded-md bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            View My Work
          </a>
          <a 
            href={`mailto:${personalData.email}`} 
            className="px-8 py-3 rounded-md bg-white text-gray-800 font-medium border border-gray-300 hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow flex items-center justify-center gap-2"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </div>

        <div className="flex space-x-6">
          {personalData.social.map((item) => {
            const Icon = iconComponents[item.icon as keyof typeof iconComponents];
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-teal-600 hover:text-white transition-all duration-300"
                aria-label={item.name}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={handleScrollDown}
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-teal-600 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 left-10 w-16 h-16 bg-teal-600 opacity-5 rounded-full"></div>
      <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-blue-600 opacity-5 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gray-800 opacity-5 rounded-full"></div>
    </section>
  );
};

export default Hero;