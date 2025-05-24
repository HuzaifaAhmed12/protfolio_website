import React, { useEffect, useRef } from 'react';
import { BriefcaseIcon, GraduationCap } from 'lucide-react';
import { personalData } from '../data/personalData';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const educationRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              entry.target.classList.add('animate-fadeIn');
            } else {
              entry.target.classList.add('animate-slideUp');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    experienceRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    educationRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      experienceRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
      educationRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50 opacity-0 transition-opacity duration-1000 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Experience & Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              My professional journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Work Experience */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center mr-3 hover-lift">
                  <BriefcaseIcon size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gradient">Work Experience</h3>
              </div>

              <div className="relative pl-8 border-l-2 border-gradient">
                {personalData.experiences.map((exp, index) => (
                  <div 
                    key={index}
                    ref={el => experienceRefs.current[index] = el}
                    className="mb-10 opacity-0 translate-y-8 transition-all duration-700"
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute left-[-9px] w-4 h-4 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full border-4 border-white"></div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover-lift">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                        <h4 className="text-xl font-semibold text-gray-800 hover:text-gradient transition-all duration-300">{exp.title}</h4>
                        <span className="text-sm text-white font-medium bg-gradient-to-r from-teal-500 to-blue-500 px-4 py-1 rounded-full mt-2 sm:mt-0">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{exp.company} - {exp.location}</p>
                      <ul className="space-y-2">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start group">
                            <span className="w-2 h-2 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                            <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center mr-3 hover-lift">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gradient">Education</h3>
              </div>

              <div className="relative pl-8 border-l-2 border-gradient">
                {personalData.education.map((edu, index) => (
                  <div 
                    key={index}
                    ref={el => educationRefs.current[index] = el}
                    className="mb-10 opacity-0 translate-y-8 transition-all duration-700"
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute left-[-9px] w-4 h-4 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full border-4 border-white"></div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover-lift">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                        <h4 className="text-xl font-semibold text-gray-800 hover:text-gradient transition-all duration-300">{edu.degree}</h4>
                        <span className="text-sm text-white font-medium bg-gradient-to-r from-blue-500 to-teal-500 px-4 py-1 rounded-full mt-2 sm:mt-0">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{edu.institution} - {edu.location}</p>
                      {edu.description && (
                        <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300">{edu.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-teal-500/5 to-blue-500/5 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-r from-blue-500/5 to-teal-500/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Experience;