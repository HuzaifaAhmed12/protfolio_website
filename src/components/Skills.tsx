import React, { useEffect, useRef } from 'react';
import { personalData } from '../data/personalData';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              entry.target.classList.add('animate-fadeIn');
            } else {
              // For skill bars
              entry.target.classList.add('animate-slideRight');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    skillRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      skillRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gray-50 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              My Skills
            </h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              Technologies and tools I work with
            </p>
          </div>

          <div className="space-y-12">
            {personalData.skillCategories.map((category, categoryIndex) => (
              <div key={category.category} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  {category.category}
                </h3>
                
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => {
                    const index = categoryIndex * 10 + skillIndex;
                    return (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level * 20}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            ref={el => skillRefs.current[index] = el}
                            className="h-full bg-teal-600 rounded-full w-0 opacity-0 transition-all duration-1000"
                            style={{ width: `${skill.level * 20}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Other Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Problem Solving', 'UI/UX Design', 'RESTful APIs', 'Team Collaboration', 'Project Management', 'Responsive Design', 'Performance Optimization', 'Clean Code'].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-teal-600 hover:text-white transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;