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
      className="py-20 bg-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Experience & Education
            </h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              My professional journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Work Experience */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 rounded-full bg-teal-600 bg-opacity-10 flex items-center justify-center mr-3">
                  <BriefcaseIcon size={20} className="text-teal-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Work Experience</h3>
              </div>

              <div className="relative pl-8 border-l-2 border-gray-200">
                {personalData.experiences.map((exp, index) => (
                  <div 
                    key={index}
                    ref={el => experienceRefs.current[index] = el}
                    className="mb-10 opacity-0 translate-y-8 transition-all duration-700"
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute left-[-8px] w-3 h-3 bg-teal-600 rounded-full border-4 border-white"></div>
                    <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                        <h4 className="text-lg font-semibold text-gray-800">{exp.title}</h4>
                        <span className="text-sm text-teal-600 font-medium bg-teal-50 px-3 py-1 rounded-full mt-2 sm:mt-0">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{exp.company} - {exp.location}</p>
                      <ul className="space-y-2">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            <span className="text-gray-600">{desc}</span>
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
                <div className="w-10 h-10 rounded-full bg-teal-600 bg-opacity-10 flex items-center justify-center mr-3">
                  <GraduationCap size={20} className="text-teal-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Education</h3>
              </div>

              <div className="relative pl-8 border-l-2 border-gray-200">
                {personalData.education.map((edu, index) => (
                  <div 
                    key={index}
                    ref={el => educationRefs.current[index] = el}
                    className="mb-10 opacity-0 translate-y-8 transition-all duration-700"
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute left-[-8px] w-3 h-3 bg-teal-600 rounded-full border-4 border-white"></div>
                    <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                        <h4 className="text-lg font-semibold text-gray-800">{edu.degree}</h4>
                        <span className="text-sm text-teal-600 font-medium bg-teal-50 px-3 py-1 rounded-full mt-2 sm:mt-0">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{edu.institution} - {edu.location}</p>
                      {edu.description && (
                        <p className="text-gray-600">{edu.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;