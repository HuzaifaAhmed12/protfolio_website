import React, { useEffect, useRef } from 'react';
import { User, MapPin, Mail, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { personalData } from '../data/personalData';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Map of icon names to components
  const iconComponents = {
    Github,
    Linkedin,
    Twitter,
    MessageCircle,
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Get to know me better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Who I Am</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                I'm a passionate software developer with a strong focus on creating efficient and user-friendly web applications.
                My journey in tech started with a curiosity about how websites work, and it has evolved into a career where
                I get to build solutions that make a real impact.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I enjoy the process of turning complex problems into simple, beautiful, and intuitive designs.
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge with the developer community.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 rounded-full bg-teal-600 bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <User size={18} className="text-teal-600" />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 mb-1">Full Name</span>
                    <span className="text-gray-800 font-medium">{personalData.name}</span>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 rounded-full bg-teal-600 bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-teal-600" />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 mb-1">Email</span>
                    <a 
                      href={`mailto:${personalData.email}`} 
                      className="text-gray-800 font-medium hover:text-teal-600 transition-colors"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 rounded-full bg-teal-600 bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-teal-600" />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 mb-1">Location</span>
                    <span className="text-gray-800 font-medium">{personalData.location}</span>
                  </div>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-gray-800 font-medium mb-3">Connect With Me</h4>
                <div className="flex space-x-3">
                  {personalData.social.map((item) => {
                    const Icon = iconComponents[item.icon as keyof typeof iconComponents];
                    return (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all duration-300"
                        aria-label={item.name}
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;