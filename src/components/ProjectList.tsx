import React, { useRef, useState, useCallback } from 'react';
import { Project } from '@/types/Project';

interface ProjectListProps {
  projects: Project[];
  isDarkMode: boolean;
  setObservedElement: (element: HTMLDivElement | null) => void;
  observedElements: Set<Element>;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, isDarkMode, setObservedElement, observedElements }) => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  if (!projects || !Array.isArray(projects)) {
    return <div className="text-center py-8 text-xl">No projects available</div>;
  }

  const isProjectVisible = useCallback((projectId: number) => {
    if (typeof window === 'undefined') return true;
    const element = document.getElementById(`project-${projectId}`);
    return element && observedElements.has(element);
  }, [observedElements]);

  const toggleProjectExpansion = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <div className="relative overflow-y-auto max-h-[calc(100vh-200px)] pr-4">
      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.id}
            ref={setObservedElement}
            className={`p-6 rounded-lg shadow-md transition-all duration-300 ease-out
              ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}
              ${isProjectVisible(project.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              ${expandedProject === project.id ? 'h-auto' : ''}`}
            id={`project-${project.id}`}
          >
            <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
            <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.type}</p>
            <p className={`mb-4 ${expandedProject === project.id ? '' : 'line-clamp-3'}`}>{project.description}</p>
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
              onClick={() => toggleProjectExpansion(project.id)}
              className={`px-4 py-2 rounded-md ${
                isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
              } text-white transition-colors duration-300`}
              aria-expanded={expandedProject === project.id}
              aria-controls={`project-details-${project.id}`}
            >
              {expandedProject === project.id ? 'View Less' : 'View More'}
            </button>
            {expandedProject === project.id && (
              <div id={`project-details-${project.id}`} className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Additional Details</h3>
                <p>This is where you can add more detailed information about the project, such as challenges faced, solutions implemented, or key achievements.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
