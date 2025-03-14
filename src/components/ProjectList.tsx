import React, { useEffect, useRef } from 'react';
import { Project } from '@/types/Project';

interface ProjectListProps {
  projects: Project[];
  isDarkMode: boolean;
  setObservedElement: (element: HTMLDivElement | null) => void;
  observedElements: Set<Element>;
}

const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  isDarkMode,
  setObservedElement,
  observedElements,
}) => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Ajusta el array de referencias según la cantidad de proyectos
    projectRefs.current = projectRefs.current.slice(0, projects.length);

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      document.querySelectorAll<HTMLDivElement>('[id^="project-"]').forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const offset = rect.top + scrollPosition - index * windowHeight;
        const progress = offset / windowHeight;
        el.style.opacity = `${1 - Math.abs(progress)}`;
        el.style.transform = `translateY(${progress * 100}px) scale(${1 - Math.abs(progress) * 0.1})`;

        const h2 = el.querySelector('h2');
        const firstP = el.querySelector('p:first-of-type');
        const secondP = el.querySelector('p:nth-of-type(2)');
        const button = el.querySelector('button');

        if (h2) h2.style.transform = `translateX(${progress * -100}px)`;
        if (firstP) firstP.style.transform = `translateX(${progress * -50}px)`;
        if (secondP) secondP.style.transform = `translateX(${progress * -25}px)`;

        el.querySelectorAll('span').forEach((span) => {
          span.style.transform = `translateY(${progress * 50}px)`;
        });
        if (button) button.style.transform = `translateY(${progress * 100}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [projects]);

  if (!projects || !Array.isArray(projects)) {
    return <div className="text-center py-8 text-xl">No projects available</div>;
  }

  return (
    <div className="relative">
      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el) => {
            projectRefs.current[index] = el;
            setObservedElement(el);
          }}
          className={`min-h-screen w-full flex items-center justify-center p-8 transition-all duration-700 ease-out ${
            isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
          }`}
          id={`project-${project.id}`}
        >
          <div className="max-w-4xl w-full">
            <h2 className="text-5xl font-bold mb-6">{project.title}</h2>
            <p className={`text-2xl mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {project.type}
            </p>
            <p className="text-xl mb-8">{project.description}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className={`px-4 py-2 text-sm rounded-full ${
                    isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <button
              className={`px-8 py-4 rounded-md text-lg ${
                isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
              } text-white transition-all duration-300 transform hover:scale-105`}
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
