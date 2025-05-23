import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { personalData } from '../data/personalData';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(personalData.projects);
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Extract unique tags from all projects
  const allTags = Array.from(
    new Set(personalData.projects.flatMap(project => project.tags))
  );

  // Filter projects based on selected tag
  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(personalData.projects);
    } else {
      setFilteredProjects(
        personalData.projects.filter(project => project.tags.includes(filter))
      );
    }
  }, [filter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              entry.target.classList.add('animate-fadeIn');
            } else {
              entry.target.classList.add('animate-popUp');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      projectRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filteredProjects]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-gray-50 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              My Projects
            </h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              Some of my recent work
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === 'all'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  filter === tag
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                ref={el => projectRefs.current[index] = el}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 opacity-0 scale-95"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex space-x-3">
                      <a
                        href={project.link || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-teal-600 hover:text-white transition-colors duration-300"
                      >
                        <ExternalLink size={18} />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-teal-600 hover:text-white transition-colors duration-300"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;