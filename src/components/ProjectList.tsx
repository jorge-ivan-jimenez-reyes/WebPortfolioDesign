import React, { useRef, useEffect, useState } from 'react';
import { Project } from '@/types/Project';

interface ProjectListProps {
  projects: Project[];
  isDarkMode: boolean;
  setObservedElement: (element: HTMLDivElement | null) => void;
  observedElements: Set<Element>;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, isDarkMode, setObservedElement, observedElements }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [visibleProjects, setVisibleProjects] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollRef.current) {
        e.preventDefault();
        scrollRef.current.scrollLeft += e.deltaY;
      }
    };

    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      currentScrollRef.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (currentScrollRef) {
        currentScrollRef.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const newVisibleProjects = new Set<string>();
      projects.forEach((project) => {
        const element = document.getElementById(`project-${project.id}`);
        if (element && observedElements.has(element)) {
          newVisibleProjects.add(project.id.toString());
        }
      });
      setVisibleProjects(newVisibleProjects);
    }
  }, [projects, observedElements]);

  return (
    <div 
      ref={scrollRef}
      className="flex overflow-x-auto pb-8 hide-scrollbar"
      style={{ scrollBehavior: 'smooth' }}
    >
      {projects.map((project) => (
        <div
          key={project.id}
          ref={setObservedElement}
          className={`flex-shrink-0 w-80 mx-4 p-6 rounded-lg shadow-md ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } opacity-0 transform translate-y-4 transition-all duration-300 ease-out ${
            visibleProjects.has(project.id.toString()) ? 'fade-in' : ''
          }`}
          id={`project-${project.id}`}
        >
          <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
          <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.type}</p>
          <p className="mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-2 py-1 text-xs rounded-full ${
                  isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
          <button
            className={`px-4 py-2 rounded-md ${
              isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
            } text-white transition-colors duration-300`}
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
