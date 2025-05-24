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
      className="py-20 bg-gray-50 opacity-0 transition-opacity duration-1000 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              My Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              Technologies and tools I work with
            </p>
          </div>

          <div className="space-y-12">
            {personalData.skillCategories.map((category, categoryIndex) => (
              <div key={category.category} className="bg-white p-8 rounded-xl shadow-lg hover-lift">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <span className="text-gradient">{category.category}</span>
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const index = categoryIndex * 10 + skillIndex;
                    return (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">{skill.name}</span>
                          <span className="text-sm text-teal-600 font-semibold bg-teal-50 px-3 py-1 rounded-full">
                            {skill.level * 20}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            ref={el => skillRefs.current[index] = el}
                            className="h-full rounded-full w-0 opacity-0 transition-all duration-1000 bg-gradient-to-r from-teal-500 to-blue-500 animate-shine"
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

          <div className="mt-12 bg-white p-8 rounded-xl shadow-lg hover-lift">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Other Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Problem Solving', 'UI/UX Design', 'RESTful APIs', 'Team Collaboration', 'Project Management', 'Responsive Design', 'Performance Optimization', 'Clean Code'].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-teal-500/10 to-blue-500/10 text-gray-700 rounded-full text-sm font-medium hover:from-teal-500 hover:to-blue-500 hover:text-white transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-teal-500/5 to-blue-500/5 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-gradient-to-r from-blue-500/5 to-teal-500/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Skills;