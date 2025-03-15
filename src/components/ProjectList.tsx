import React, { useRef, useState, useEffect } from 'react';
import { Project } from '@/types/Project';

interface ProjectListProps {
  projects: Project[];
  isDarkMode: boolean;
  setObservedElement: (element: HTMLDivElement | null) => void;
  observedElements: Set<Element>;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, isDarkMode, setObservedElement, observedElements }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, projects.length);
  }, [projects]);

  if (!projects || !Array.isArray(projects)) {
    return <div className="text-center py-8 text-xl">No projects available</div>;
  }

  return (
    <div className="relative">
      {projects.map((project, index) => {
        const offset = scrollPosition - index * window.innerHeight;
        const progress = offset / window.innerHeight;

        return (
          <div
            key={project.id}
            ref={(el) => {
              projectRefs.current[index] = el;
              setObservedElement(el);
            }}
            className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center p-8 transition-all duration-700 ease-out
              ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
            style={{
              zIndex: projects.length - index,
              opacity: 1 - Math.abs(progress),
              transform: `translateY(${progress * 100}px) scale(${1 - Math.abs(progress) * 0.1})`,
            }}
            id={`project-${project.id}`}
          >
            <div className="max-w-4xl w-full" style={{ transform: `translateY(${progress * -50}px)` }}>
              <h2 className="text-5xl font-bold mb-6" style={{ transform: `translateX(${progress * -100}px)` }}>{project.title}</h2>
              <p className={`text-2xl mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ transform: `translateX(${progress * -50}px)` }}>{project.type}</p>
              <p className="text-xl mb-8" style={{ transform: `translateX(${progress * -25}px)` }}>{project.description}</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-4 py-2 text-sm rounded-full ${
                      isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                    }`}
                    style={{ transform: `translateY(${progress * 50}px)` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                className={`px-8 py-4 rounded-md text-lg ${
                  isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
                } text-white transition-all duration-300 transform hover:scale-105`}
                style={{ transform: `translateY(${progress * 100}px)` }}
              >
                View Details
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
