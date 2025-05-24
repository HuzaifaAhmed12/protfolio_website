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

  const iconComponents = {
    Github,
    Linkedin,
    Twitter,
    MessageCircle,
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex flex-col justify-center items-center gradient-bg"
    >
      <div 
        ref={scrollRef}
        className="container mx-auto px-4 py-20 flex flex-col items-center text-center opacity-0 transition-opacity duration-1000"
      >
        <div className="mb-8 relative animate-float">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/90 mx-auto overflow-hidden border-4 border-white shadow-lg hover-lift">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-600 opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center text-teal-700 text-4xl md:text-5xl font-bold">
              {personalData.name.split(' ').map(name => name[0]).join('')}
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          <span className="block mb-2">Hi, I'm {personalData.name.split(' ')[0]}</span>
          <span className="text-gradient hover-scale inline-block">
            {personalData.title}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          {personalData.about}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a 
            href="#projects" 
            className="px-8 py-3 rounded-full bg-white text-gray-800 font-medium hover-lift inline-flex items-center justify-center gap-2 group"
          >
            <span>View My Work</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a 
            href={`mailto:${personalData.email}`} 
            className="px-8 py-3 rounded-full bg-transparent text-white font-medium border-2 border-white hover-lift inline-flex items-center justify-center gap-2"
          >
            <Mail size={18} />
            <span>Contact Me</span>
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
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover-lift"
                aria-label={item.name}
              >
                <Icon size={22} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={handleScrollDown}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover-lift"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/5 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
};

export default Hero;